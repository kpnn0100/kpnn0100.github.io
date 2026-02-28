// ============================================================
// PROGRAMMING DATA - Auto-collected from individual files
// To add a new project: create a new .ts file in this folder
// (copy an existing one as a template)
// Then add the import below and include it in the array.
// ============================================================
import embeddedAudio from "./embedded-audio";
import mlEdgeComputing from "./ml-edge-computing";
import sensorNetwork from "./sensor-network";
import audioSynthesizer from "./audio-synthesizer";
import firmwareFramework from "./firmware-framework";

import type { ProgrammingItem } from "../types";

/** All programming items, sorted by id */
export const programmingItems: ProgrammingItem[] = [
  embeddedAudio,
  mlEdgeComputing,
  sensorNetwork,
  audioSynthesizer,
  firmwareFramework,
].sort((a, b) => a.id.localeCompare(b.id));
