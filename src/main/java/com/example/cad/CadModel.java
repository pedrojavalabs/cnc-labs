package com.example.cad;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
public class CadModel {
    @Id @GeneratedValue private Long id;
    private String name;
    private Instant createdAt = Instant.now();
    private int threshold;
    private double heightMm;
    private double widthMm;
    private int triangles;
    @Lob @Column(columnDefinition = "BLOB") private byte[] sourceImage;
    @Lob @Column(columnDefinition = "BLOB") private byte[] stl;

    public Long getId() { return id; }
    public String getName() { return name; }
    public void setName(String n) { name = n; }
    public Instant getCreatedAt() { return createdAt; }
    public int getThreshold() { return threshold; }
    public void setThreshold(int t) { threshold = t; }
    public double getHeightMm() { return heightMm; }
    public void setHeightMm(double h) { heightMm = h; }
    public double getWidthMm() { return widthMm; }
    public void setWidthMm(double w) { widthMm = w; }
    public int getTriangles() { return triangles; }
    public void setTriangles(int t) { triangles = t; }
    public byte[] getSourceImage() { return sourceImage; }
    public void setSourceImage(byte[] b) { sourceImage = b; }
    public byte[] getStl() { return stl; }
    public void setStl(byte[] b) { stl = b; }
}
