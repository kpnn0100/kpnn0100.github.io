// ============================================================
// DATA TYPES for portfolio items
// To add a new item, create a file in the corresponding folder:
//   src/data/music/     - for music items
//   src/data/art/       - for art items
//   src/data/programming/ - for programming items
// ============================================================

// ── Music types ──
export interface Track {
  num: number;
  title: string;
  featuring?: string;
  duration?: string;
  youtubeId?: string;
  note?: string;
}

export interface Album {
  id: string;
  title: string;
  year: string;
  genre: string;
  type: "Album" | "EP" | "Single" | "Mixtape";
  coverImage: string;
  story: string;
  tracks: Track[];
  featuredVideoId?: string;
  featuredVideoLabel?: string;
}

// ── Art types ──
export type ImageLayout = "full" | "duo" | "trio" | "asymmetric-left" | "asymmetric-right";

export interface ArtImage {
  src: string;
  caption?: string;
  alt: string;
}

export type ArtContentBlock =
  | { type: "text"; heading?: string; body: string }
  | { type: "images"; layout: ImageLayout; images: ArtImage[] }
  | { type: "video"; youtubeId: string; caption?: string };

export interface ArtProject {
  id: string;
  title: string;
  year: string;
  medium: string;
  category: string;
  tagline: string;
  coverImage: string;
  sections: ArtContentBlock[];
}

// ── Content blocks for programming post body ──
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "figure"; src: string; alt: string; caption: string; figNum: number }
  | { type: "code"; language: string; code: string; caption?: string }
  | { type: "list"; items: string[] };

export interface Section {
  /** Section number, e.g. "1", "2", "2.1" */
  num: string;
  /** Section heading */
  heading: string;
  /** Content blocks within this section */
  content: ContentBlock[];
}

export interface ProgrammingItem {
  /** Unique ID (also used in the URL: /programming/{id}) */
  id: string;
  /** Project title */
  title: string;
  /** Author names */
  authors: string[];
  /** Year */
  year: string;
  /** Category/conference */
  conference: string;
  /** Short abstract shown in list & detail header */
  abstract: string;
  /** Technology tags */
  tags: string[];
  /** Link to external repo */
  link: string;
  /** Full paper-style sections (optional — detail page uses these) */
  sections?: Section[];
}
