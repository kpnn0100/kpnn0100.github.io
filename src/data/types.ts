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

export interface ProgrammingItem {
  /** Unique ID */
  id: string;
  /** Project title */
  title: string;
  /** Author names */
  authors: string[];
  /** Year */
  year: string;
  /** Category/conference */
  conference: string;
  /** Project description */
  abstract: string;
  /** Technology tags */
  tags: string[];
  /** Link to project */
  link: string;
}
