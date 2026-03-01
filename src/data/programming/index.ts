// ============================================================
// PROGRAMMING DATA - Auto-collected from individual files
// To add a new project: create a new .ts file in this folder
// (copy an existing one as a template)
// Then add the import below and include it in the array.
// ============================================================
import truePosition from "./true-position";

import type { ProgrammingItem } from "../types";

/** All programming items, sorted by id */
export const programmingItems: ProgrammingItem[] = [
  truePosition,
].sort((a, b) => a.id.localeCompare(b.id));
