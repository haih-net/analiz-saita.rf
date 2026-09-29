# First blog post illustrations

Generated with the built-in ImageGen tool for this article. Both are conceptual editorial images, not measurements or technical diagrams. Originals are 1536 × 1024 PNG; the current frontend uses responsive WebP derivatives.

## paper-site.png — prompt

Create an editorial illustration for an English engineering blog article about a small corporate website that already works, with limitations still visible. Wide landscape 1536x1024. A small precise architectural model of a white modern office pavilion made from neatly stacked paper website pages, ultramarine blue structural frames, a small coral inspection marker and a few loose unfinished parts on the tabletop. Crisp studio lighting, white background, tactile paper and matte painted metal, sophisticated magazine still life, generous negative space. Optimistic but thoughtful, not a triumphant advertisement. No text, no letters, no logos, no charts. The image is a metaphor, not a technical diagram.

## image-weight.png — prompt

Use case: editorial illustration. Create a wide 1536x1024 conceptual magazine still life for an engineering article about image preparation and the surprising weight of images on a small website. White tabletop, one large thick stack of photographic paper showing a simple blue sky and coral geometric building, alongside two much smaller carefully cut versions of the same image, a slim blue ruler and a tiny coral paper offcut. Elegant tactile paper sculpture, crisp soft studio shadows, white background, ultramarine and coral accents, generous whitespace, restrained sophisticated composition. No text, numbers, logos, arrows or chart. It should convey choosing appropriate image sizes, not imply benchmark results.

## Delivery optimization — 30 September 2026

PNG originals and prompts are preserved. The page uses 1440 × 960 and 600 × 400 WebP variants, quality 82, generated with global Sharp through `node scripts/optimize-images.mjs` from the project root. `srcSet` and `sizes` let the browser select the appropriate resource for article, card, viewport, and pixel density. Original PNGs are not imported into the production build.
