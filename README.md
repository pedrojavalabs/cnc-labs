# img2cad — Image to CAD (Spring Boot + Vaadin + H2 in-memory)

Upload any image → its dark (or opaque) shape is traced and extruded into a
watertight solid → view in 3D → download a binary STL for Cimatron.

## Run
Requires Java 17+ and Maven (Node is downloaded automatically by Vaadin).

    mvn spring-boot:run

Open http://localhost:8080. H2 console: http://localhost:8080/h2-console
(JDBC URL `jdbc:h2:mem:cad`). Data is lost on restart.

## Viewer controls
- Left drag: rotate · Right drag (or Shift/Ctrl+drag): pan · Wheel: zoom to cursor
- "Reset view" refits the model; "Wireframe" toggles mesh display.

## Settings
- Threshold: pixels darker than this become solid. Transparent pixels are empty.
- Invert: use light areas instead.
- Width (mm): real-world width of the model. Extrude height (mm): thickness.
- Images are resampled to max 256 cells on the longest side.

## Cimatron
Cimatron's native .elt format is proprietary, so the app exports STL.
In Cimatron: File › Import › STL (or convert mesh to faces/solid if needed).
