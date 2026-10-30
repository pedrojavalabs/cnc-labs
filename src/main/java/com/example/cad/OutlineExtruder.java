package com.example.cad;

import org.springframework.stereotype.Service;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.ArrayList;
import java.util.List;

/**
 * Converts an image into a closed, watertight solid by tracing the dark
 * (or opaque) shape and extruding it. Output is binary STL, which Cimatron
 * imports directly (File > Import > STL).
 */
@Service
public class OutlineExtruder {

    public static final int MAX_CELLS = 256;

    public record Result(byte[] stl, int triangles) {}

    public Result convert(byte[] imageBytes, int threshold, boolean invert,
                          double widthMm, double heightMm) throws IOException {
        BufferedImage img = ImageIO.read(new ByteArrayInputStream(imageBytes));
        if (img == null) throw new IOException("Unsupported image format");
        boolean[][] mask = buildMask(img, threshold, invert);
        int rows = mask.length, cols = mask[0].length;
        double cell = widthMm / cols;

        List<float[]> tris = new ArrayList<>();
        for (int y = 0; y < rows; y++) {
            for (int x = 0; x < cols; x++) {
                if (!mask[y][x]) continue;
                // image y grows downward; CAD Y grows upward
                double x0 = x * cell, x1 = (x + 1) * cell;
                double y0 = (rows - y - 1) * cell, y1 = (rows - y) * cell;
                double z0 = 0, z1 = heightMm;
                quad(tris, x0,y0,z1, x1,y0,z1, x1,y1,z1, x0,y1,z1, 0,0,1);   // top
                quad(tris, x0,y0,z0, x0,y1,z0, x1,y1,z0, x1,y0,z0, 0,0,-1);  // bottom
                if (!filled(mask, x - 1, y)) quad(tris, x0,y0,z0, x0,y0,z1, x0,y1,z1, x0,y1,z0, -1,0,0);
                if (!filled(mask, x + 1, y)) quad(tris, x1,y0,z0, x1,y1,z0, x1,y1,z1, x1,y0,z1, 1,0,0);
                if (!filled(mask, x, y + 1)) quad(tris, x0,y0,z0, x1,y0,z0, x1,y0,z1, x0,y0,z1, 0,-1,0);
                if (!filled(mask, x, y - 1)) quad(tris, x0,y1,z0, x0,y1,z1, x1,y1,z1, x1,y1,z0, 0,1,0);
            }
        }
        if (tris.isEmpty()) throw new IOException("No shape found - try another threshold or toggle invert");
        return new Result(toBinaryStl(tris), tris.size());
    }

    boolean[][] buildMask(BufferedImage img, int threshold, boolean invert) {
        int w = img.getWidth(), h = img.getHeight();
        double scale = Math.min(1.0, (double) MAX_CELLS / Math.max(w, h));
        int cols = Math.max(1, (int) Math.round(w * scale));
        int rows = Math.max(1, (int) Math.round(h * scale));
        boolean hasAlpha = img.getColorModel().hasAlpha();
        boolean[][] m = new boolean[rows][cols];
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                int px = Math.min(w - 1, (int) ((c + 0.5) / scale));
                int py = Math.min(h - 1, (int) ((r + 0.5) / scale));
                int argb = img.getRGB(px, py);
                int a = (argb >>> 24) & 0xff;
                int lum = (int) (0.299 * ((argb >> 16) & 0xff) + 0.587 * ((argb >> 8) & 0xff) + 0.114 * (argb & 0xff));
                boolean on = hasAlpha && a < 128 ? false : lum < threshold;
                if (hasAlpha && a < 128) m[r][c] = invert; else m[r][c] = invert != on;
            }
        }
        return m;
    }

    private static boolean filled(boolean[][] m, int x, int y) {
        return y >= 0 && y < m.length && x >= 0 && x < m[0].length && m[y][x];
    }

    private static void quad(List<float[]> t, double ax, double ay, double az, double bx, double by, double bz,
                             double cx, double cy, double cz, double dx, double dy, double dz,
                             double nx, double ny, double nz) {
        t.add(new float[]{(float)nx,(float)ny,(float)nz,(float)ax,(float)ay,(float)az,(float)bx,(float)by,(float)bz,(float)cx,(float)cy,(float)cz});
        t.add(new float[]{(float)nx,(float)ny,(float)nz,(float)ax,(float)ay,(float)az,(float)cx,(float)cy,(float)cz,(float)dx,(float)dy,(float)dz});
    }

    private static byte[] toBinaryStl(List<float[]> tris) {
        ByteBuffer buf = ByteBuffer.allocate(84 + tris.size() * 50).order(ByteOrder.LITTLE_ENDIAN);
        byte[] header = "img2cad outline extrusion".getBytes();
        buf.put(header).position(80);
        buf.putInt(tris.size());
        for (float[] t : tris) { for (float f : t) buf.putFloat(f); buf.putShort((short) 0); }
        return buf.array();
    }
}
