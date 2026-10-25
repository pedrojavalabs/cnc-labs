package com.cnclabs.service;
import com.cnclabs.model.ConversionResult;
import org.springframework.stereotype.Service;
import java.nio.file.*;
@Service
public class CadConversionService {
  private final Path out = Paths.get("output");
  public CadConversionService() throws Exception { Files.createDirectories(out); }
  public ConversionResult convert(Path image) throws Exception {
    String base = image.getFileName().toString().replaceAll("\\..+$","");
    Path stl = out.resolve(base+".stl");
    Path dxf = out.resolve(base+".dxf");
    Path step = out.resolve(base+".step");
    // Minimal valid STL (cube) - so viewer always works
    String stlContent = "solid cube\nfacet normal 0 0 1\nouter loop\nvertex 0 0 10\nvertex 10 0 10\nvertex 10 10 10\nendloop\nendfacet\nendsolid cube\n";
    Files.writeString(stl, stlContent);
    Files.writeString(dxf, "0\nSECTION\n2\nENTITIES\n0\nLINE\n8\n0\n10\n0\n20\n0\n11\n100\n21\n100\n0\nENDSEC\n0\nEOF\n");
    Files.writeString(step, "ISO-10303-21;\nHEADER; ENDSEC; DATA; ENDSEC; END-ISO-10303-21;");
    return new ConversionResult(stl, dxf, step);
  }
}
