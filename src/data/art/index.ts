// ============================================================
// ART DATA - Auto-collected from individual files
// To add a new art item: create a new .ts file in this folder
// (copy an existing one as a template)
// Then add the import below and include it in the array.
// ============================================================
import abstractComposition from "./abstract-composition";
import urbanLandscape from "./urban-landscape";
import natureStudy from "./nature-study";
import portraitSeries from "./portrait-series";
import digitalDreams from "./digital-dreams";
import minimalistStudy from "./minimalist-study";

import type { ArtItem } from "../types";

/** All art items, sorted by id */
export const artItems: ArtItem[] = [
  abstractComposition,
  urbanLandscape,
  natureStudy,
  portraitSeries,
  digitalDreams,
  minimalistStudy,
].sort((a, b) => a.id.localeCompare(b.id));

/** Lookup map for art detail page */
export const artItemsById: Record<string, ArtItem> = Object.fromEntries(
  artItems.map((item) => [item.id, item])
);
