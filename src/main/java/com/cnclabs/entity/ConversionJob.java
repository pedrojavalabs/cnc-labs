package com.cnclabs.entity;
import jakarta.persistence.*;
import java.time.LocalDateTime;
@Entity @Table(name="conversion_jobs")
public class ConversionJob {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
    private String originalFilename; private String storedImagePath;
    private String outputDxfPath; private String outputStepPath;
    private String mode; private Double heightMm; private Double tolerance;
    private String status; private LocalDateTime createdAt = LocalDateTime.now();
    public Long getId(){return id;} public void setId(Long id){this.id=id;}
    public String getOriginalFilename(){return originalFilename;} public void setOriginalFilename(String s){this.originalFilename=s;}
    public String getStoredImagePath(){return storedImagePath;} public void setStoredImagePath(String s){this.storedImagePath=s;}
    public String getOutputDxfPath(){return outputDxfPath;} public void setOutputDxfPath(String s){this.outputDxfPath=s;}
    public String getOutputStepPath(){return outputStepPath;} public void setOutputStepPath(String s){this.outputStepPath=s;}
    public String getMode(){return mode;} public void setMode(String s){this.mode=s;}
    public Double getHeightMm(){return heightMm;} public void setHeightMm(Double d){this.heightMm=d;}
    public Double getTolerance(){return tolerance;} public void setTolerance(Double d){this.tolerance=d;}
    public String getStatus(){return status;} public void setStatus(String s){this.status=s;}
    public LocalDateTime getCreatedAt(){return createdAt;}
}
