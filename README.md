# img2cad — Image to CAD (Spring Boot + Vaadin + H2 in-memory)

Upload any image → its dark (or opaque) shape is traced and extruded into a
watertight solid → view in 3D → download a binary STL for Cimatron.

## Production build (no Node at runtime)

Build once on any machine that has Java 17+ and Maven:

    mvn clean package -Pproduction

This produces `target/img2cad-1.1.0.jar` with the web frontend pre-compiled
and embedded. To run it, the server needs **only Java 17+** — no Node, no
npm, no Maven:

    java -jar target/img2cad-1.1.0.jar

Open http://localhost:8080. H2 console: http://localhost:8080/h2-console
(JDBC URL `jdbc:h2:mem:cad`). Data is lost on restart.

### About Node during the build

Vaadin's build step may download a local copy of Node the first time it
compiles the frontend (it does not touch your system Node). To skip Node
entirely even at build time, build with the `CI` environment variable set —
Vaadin 24.4+ then uses its pre-compiled default bundle:

    CI=true mvn clean package -Pproduction

Note: this project ships a custom browser file (`src/main/frontend/
cad-viewer.js` for the 3D viewer), so a bundle recompile is triggered on
first build; after that the result is cached and reused.

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
