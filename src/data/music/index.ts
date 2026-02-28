// ============================================================
// MUSIC DATA - Auto-collected from individual files
// To add a new music item: create a new .ts file in this folder
// (copy an existing one as a template)
// Then add the import below and include it in the array.
// ============================================================
import sugarySide from "./sugary-side";
import nowhere from "./nowhere";

import type { MusicItem } from "../types";

/** All music items, sorted by id */
export const musicItems: MusicItem[] = [
  sugarySide,
  nowhere,
].sort((a, b) => a.id.localeCompare(b.id));
