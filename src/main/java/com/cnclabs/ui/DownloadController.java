package com.cnclabs.ui;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.*;

@RestController
public class DownloadController {
    @GetMapping("/download")
    public ResponseEntity<Resource> download(@RequestParam("file") String file, @RequestParam(value="inline", required=false) String inline) throws Exception {
        Path p = Paths.get("output").resolve(file).normalize();
        if (!Files.exists(p)) return ResponseEntity.notFound().build();
        Resource r = new FileSystemResource(p);
        String disp = (inline != null) ? "inline" : "attachment";
        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, disp + "; filename="+file)
            .contentType(MediaType.APPLICATION_OCTET_STREAM)
            .body(r);
    }
}
