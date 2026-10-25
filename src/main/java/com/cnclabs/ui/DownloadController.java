package com.cnclabs.ui;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.*;

@RestController
public class DownloadController {
    @GetMapping("/download")
    public ResponseEntity<Resource> download(@RequestParam("file") String file) throws Exception {
        Path p = Paths.get("output").resolve(file).normalize();
        if (!Files.exists(p)) return ResponseEntity.notFound().build();
        Resource r = new FileSystemResource(p);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename="+file).body(r);
    }
}
