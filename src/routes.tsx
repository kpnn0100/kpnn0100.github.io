import { createHashRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Music } from "./components/Music";
import { Art } from "./components/Art";
import { ArtDetail } from "./components/ArtDetail";
import { Programming } from "./components/Programming";
import { NotFound } from "./components/NotFound";

// Using HashRouter for GitHub Pages compatibility (no server-side routing needed)
export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "music", Component: Music },
      { path: "art", Component: Art },
      { path: "art/:id", Component: ArtDetail },
      { path: "programming", Component: Programming },
      { path: "*", Component: NotFound },
    ],
  },
]);
