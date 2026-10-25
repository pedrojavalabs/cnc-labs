package com.cnclabs.controller;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.nio.file.Path;
@RestController
public class DownloadController {
    @GetMapping("/download")
    public ResponseEntity<Resource> download(@RequestParam String file){
        Path p = Path.of(file); if(!p.toFile().exists()) return ResponseEntity.notFound().build();
        Resource r = new FileSystemResource(p);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\""+p.getFileName()+"\"").contentType(MediaType.APPLICATION_OCTET_STREAM).body(r);
    }
}
