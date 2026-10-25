package com.cnclabs.service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.nio.file.*;
import java.util.*;
@Service
public class CimatronConversionService {
    @Value("${cnc.output-dir}") private String outputDir;
    public record ConversionResult(Path dxf, Path step, Path stl) {}
    public ConversionResult convert(Path imagePath, String mode, double heightMm, double tolerance) throws Exception {
        BufferedImage img = ImageIO.read(imagePath.toFile());
        if (img == null) throw new IOException("Invalid image");
        Files.createDirectories(Path.of(outputDir));
        BufferedImage gray = toGrayscale(img);
        List<List<int[]>> contours = extractContours(gray, tolerance);
        String baseName = imagePath.getFileName().toString().replaceAll("\\..*$","");
        Path dxfPath = Path.of(outputDir, baseName + "_CIMATRON.dxf");
        Path stepPath = Path.of(outputDir, baseName + "_CIMATRON.stp");
        Path stlPath = Path.of(outputDir, baseName + "_CIMATRON.stl");
        writeDXF(contours, dxfPath);
        writeSTL(gray, heightMm, mode, stlPath);
        writeSTEP(stepPath, baseName, heightMm, mode);
        return new ConversionResult(dxfPath, stepPath, stlPath);
    }
    private BufferedImage toGrayscale(BufferedImage src){
        BufferedImage g = new BufferedImage(src.getWidth(), src.getHeight(), BufferedImage.TYPE_BYTE_GRAY);
        g.getGraphics().drawImage(src,0,0,null); return g;
    }
    private List<List<int[]>> extractContours(BufferedImage gray, double tolerance){
        int w = gray.getWidth(), h = gray.getHeight();
        List<List<int[]>> contours = new ArrayList<>();
        List<int[]> cur = new ArrayList<>();
        int step = Math.max(1, (int)(1/tolerance*2));
        for(int y=0;y<h;y+=step*4){ for(int x=0;x<w;x+=step*4){
            int pix = gray.getRaster().getSample(x,y,0);
            if(pix<128) cur.add(new int[]{x, h-y});
        } if(cur.size()>10){contours.add(new ArrayList<>(cur)); cur.clear();}}
        if(contours.isEmpty()){ contours.add(List.of(new int[]{0,0}, new int[]{w,0}, new int[]{w,h}, new int[]{0,h}, new int[]{0,0})); }
        return contours;
    }
    private void writeDXF(List<List<int[]>> contours, Path out) throws IOException {
        try(BufferedWriter w = Files.newBufferedWriter(out)){
            w.write("0\nSECTION\n2\nHEADER\n0\nENDSEC\n");
            w.write("0\nSECTION\n2\nENTITIES\n");
            for(List<int[]> c: contours){
                w.write("0\nLWPOLYLINE\n8\nCIMATRON_PROFILE\n90\n"+c.size()+"\n70\n1\n");
                for(int[] p:c){ w.write(String.format("10\n%.4f\n20\n%.4f\n", p[0]*0.1, p[1]*0.1)); }
            }
            w.write("0\nENDSEC\n0\nEOF\n");
        }
    }
    private void writeSTEP(Path out, String name, double h, String mode) throws IOException {
        try(BufferedWriter w = Files.newBufferedWriter(out)){
            w.write("ISO-10303-21;\nHEADER;\nFILE_DESCRIPTION(('CNC-Labs Cimatron Export'),'2;1');\n");
            w.write("FILE_NAME('"+out.getFileName()+"','2026-01-01T00:00:00',('CNC-Labs'),(''),'Cimatron Compatible','CNC-Labs','');\n");
            w.write("FILE_SCHEMA(('AUTOMOTIVE_DESIGN'));\nENDSEC;\nDATA;\n#1=CARTESIAN_POINT('Origin',(0.,0.,0.));\n");
            w.write(String.format("#2=PRODUCT('Relief %s height %.2f mode %s','', '', (#1));\n", name, h, mode));
            w.write("ENDSEC;\nEND-ISO-10303-21;\n");
        }
    }
    private void writeSTL(BufferedImage gray, double heightMm, String mode, Path out) throws IOException {
        try(BufferedWriter w = Files.newBufferedWriter(out)){
            w.write("solid cnc-labs-relief\n"); int sw=80, sh=80;
            double sx = gray.getWidth()/(double)sw, sy = gray.getHeight()/(double)sh;
            for(int y=0;y<sh-1;y++) for(int x=0;x<sw-1;x++){
                double z00=getH(gray,(int)(x*sx),(int)(y*sy),heightMm,mode);
                double z10=getH(gray,(int)((x+1)*sx),(int)(y*sy),heightMm,mode);
                double z01=getH(gray,(int)(x*sx),(int)((y+1)*sy),heightMm,mode);
                double z11=getH(gray,(int)((x+1)*sx),(int)((y+1)*sy),heightMm,mode);
                facet(w,x,y,z00,x+1,y,z10,x,y+1,z01); facet(w,x+1,y,z10,x+1,y+1,z11,x,y+1,z01);
            }
            w.write("endsolid\n");
        }
    }
    private double getH(BufferedImage g,int x,int y,double max,String mode){
        x=Math.max(0,Math.min(g.getWidth()-1,x)); y=Math.max(0,Math.min(g.getHeight()-1,y));
        int gv=g.getRaster().getSample(x,y,0); double n=(255-gv)/255.0;
        if("LITHOPHANE".equals(mode)) n=1-n; return n*max;
    }
    private void facet(BufferedWriter w,double x1,double y1,double z1,double x2,double y2,double z2,double x3,double y3,double z3) throws IOException{
        w.write(String.format("facet normal 0 0 1\n outer loop\n vertex %.3f %.3f %.3f\n vertex %.3f %.3f %.3f\n vertex %.3f %.3f %.3f\n endloop\n endfacet\n", x1,y1,z1,x2,y2,z2,x3,y3,z3));
    }
}
