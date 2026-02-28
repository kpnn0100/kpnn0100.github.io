# kpnn Portfolio

Personal portfolio site for **Nam Doan** — Music Producer / Artist / Embedded Software Engineer.

## Adding New Items

### Add a Music Item
1. Create a new file in `src/data/music/` (e.g. `my-new-song.ts`):
```ts
import type { MusicItem } from "../types";

const item: MusicItem = {
  id: "3",                           // unique id (used for ordering)
  youtubeId: "YOUR_YOUTUBE_VIDEO_ID", // from youtube.com/watch?v=THIS_PART
  title: "My New Song",
  url: "https://www.youtube.com/watch?v=YOUR_YOUTUBE_VIDEO_ID",
};

export default item;
```
2. Open `src/data/music/index.ts` and add the import + include it in the array.

### Add an Art Item
1. Create a new file in `src/data/art/` (e.g. `my-painting.ts`):
```ts
import type { ArtItem } from "../types";

const item: ArtItem = {
  id: "7",
  title: "My Painting",
  description: "Short description for gallery card",
  src: "https://example.com/image.jpg",  // or put image in public/ folder
  year: "2025",
  medium: "Oil on Canvas",
  longDescription: "Detailed description for the detail page...",
  process: "How you created it...",
  dimensions: "24x36 inches",
};

export default item;
```
2. Open `src/data/art/index.ts` and add the import + include it in the array.

### Add a Programming Project
1. Create a new file in `src/data/programming/` (e.g. `my-project.ts`):
```ts
import type { ProgrammingItem } from "../types";

const item: ProgrammingItem = {
  id: "6",
  title: "My Awesome Project",
  authors: ["Nam Doan"],
  year: "2025",
  conference: "Open Source",
  abstract: "Description of what the project does...",
  tags: ["TypeScript", "React", "WebSocket"],
  link: "https://github.com/kpnn0100/my-project",
};

export default item;
```
2. Open `src/data/programming/index.ts` and add the import + include it in the array.

## Development

```bash
npm install
npm run dev
```

## Deployment

Push to `main` branch — GitHub Actions will build and deploy automatically.

Or manually:
```bash
npm run build
```

## Tech Stack
- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Motion (Framer Motion) for animations
- React Router with HashRouter (GitHub Pages compatible)
