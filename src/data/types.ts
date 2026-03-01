// ============================================================
// DATA TYPES for portfolio items
// To add a new item, create a file in the corresponding folder:
//   src/data/music/     - for music items
//   src/data/art/       - for art items
//   src/data/programming/ - for programming items
// ============================================================

export interface MusicItem {
  /** Unique ID (used for ordering) */
  id: string;
  /** YouTube video ID (from the URL: youtube.com/watch?v=THIS_PART) */
  youtubeId: string;
  /** Song/video title */
  title: string;
  /** Full YouTube URL */
  url: string;
}

export interface ArtItem {
  /** Unique ID (also used in the URL: /art/{id}) */
  id: string;
  /** Artwork title */
  title: string;
  /** Short description for the gallery card */
  description: string;
  /** Image URL or local path (relative to public/) */
  src: string;
  /** Year created */
  year?: string;
  /** Medium used */
  medium?: string;
  /** Detailed description for the detail page */
  longDescription?: string;
  /** Process description */
  process?: string;
  /** Dimensions */
  dimensions?: string;
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
