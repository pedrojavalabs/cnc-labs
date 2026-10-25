package com.cnclabs.model;
import java.nio.file.Path;
public record ConversionResult(Path stl, Path dxf, Path step) {}
