import type { ProgrammingItem } from "../types";

const item: ProgrammingItem = {
  id: "4",
  title: "Audio Synthesizer Engine with MIDI Integration",
  authors: ["Nam Doan"],
  year: "2025",
  conference: "Open Source Project",
  abstract:
    "A modular software synthesizer engine written in C++17, featuring three synthesis algorithms — subtractive, frequency modulation (FM), and wavetable — with a unified voice-management layer. The engine exposes a standard VST3 plugin interface and responds to full MIDI 1.0 messages including pitch bend, aftertouch, and MIDI CC automation. It has been used in production for the original tracks 'Sugary Side' and 'nowhere ft. Tran Nhu Quynh', validating its musical viability.",
  tags: ["Audio DSP", "C++", "MIDI", "VST3", "Real-Time"],
  link: "#",
  sections: [
    {
      num: "1",
      heading: "Motivation & Design Goals",
      content: [
        {
          type: "paragraph",
          text: "Commercial software synthesizers are powerful but opaque. As both a producer and an embedded engineer, I wanted full control over every aspect of sound generation — from the shape of individual oscillator waveforms to the exact curvature of envelope stages. Building from scratch also served as a practical study of real-time audio DSP on a standard desktop CPU with 64-sample buffer sizes.",
        },
        {
          type: "figure",
          src: "https://images.unsplash.com/photo-1765448999810-528c435f2ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
          alt: "MIDI keyboard and music production setup",
          caption:
            "Figure 1. Studio setup used for production testing. The synthesizer engine was loaded as a VST3 plugin inside Ableton Live 11.",
          figNum: 1,
        },
        {
          type: "paragraph",
          text: "Three design constraints drove the architecture: (1) no heap allocation on the audio thread — all voice objects pre-allocated at plugin load time; (2) sample-accurate MIDI event processing — events timestamped within the current buffer are applied at the correct sample offset; (3) parameter smoothing — all knob changes are low-pass filtered at 20 Hz to prevent zipper noise.",
        },
      ],
    },
    {
      num: "2",
      heading: "Synthesis Algorithms",
      content: [
        {
          type: "paragraph",
          text: "All three synthesis algorithms share a common Voice base class with process(), noteOn(), and noteOff() virtual methods. The VoicePool manages polyphony allocation using a simple LRU steal policy.",
        },
        {
          type: "code",
          language: "cpp",
          caption:
            "Listing 1. FM synthesis operator using Euler's formula for efficient phase modulation.",
          code: `class FMOperator {
    double phase = 0.0;
    double phase_inc;          // = freq / sample_rate
    double mod_index = 1.0;    // modulation depth

public:
    void setPitch(double freq, double sample_rate) {
        phase_inc = freq / sample_rate;
    }

    // modInput: output of the modulator operator (already processed)
    float process(float modInput) {
        float out = std::sin(
            2.0 * M_PI * phase + mod_index * modInput
        );
        phase = std::fmod(phase + phase_inc, 1.0);
        return out;
    }
};

// DX7-style 2-op FM voice
class FMVoice : public Voice {
    FMOperator carrier, modulator;
    ADSR env;
public:
    float process() override {
        float mod = modulator.process(0.0f);   // self-feedback optional
        return carrier.process(mod) * env.process();
    }
};`,
        },
        {
          type: "paragraph",
          text: "Wavetable synthesis uses 256-sample single-cycle waveforms sampled at 2048 Hz intervals across the MIDI note range (note 0 to 127). Linear interpolation between adjacent table entries suppresses aliasing at low sample counts. At the note boundaries, tables are cross-faded with a 2-sample overlap to eliminate clicks.",
        },
      ],
    },
    {
      num: "3",
      heading: "MIDI & Automation",
      content: [
        {
          type: "figure",
          src: "https://images.unsplash.com/photo-1708554983776-e9717270a9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
          alt: "Modular synthesizer patch cables",
          caption:
            "Figure 2. Modular patch used as reference for the FM routing architecture. Each physical patch cable corresponds to an operator connection in the software model.",
          figNum: 2,
        },
        {
          type: "paragraph",
          text: "MIDI note events are sorted by their sample offset and applied mid-buffer. Pitch bend is treated as a continuous signal — each bend message is converted to cents and applied to the phase increment at the corresponding sample. This achieves sample-accurate pitch slides identical to a hardware synthesizer's behavior.",
        },
        {
          type: "list",
          items: [
            "Supported MIDI: Note On/Off, Pitch Bend, Mod Wheel (CC1), Volume (CC7), Pan (CC10), Sustain Pedal (CC64)",
            "Polyphony: up to 32 voices (configurable, pre-allocated at load time)",
            "Latency: 64-sample buffer @ 48 kHz = 1.33 ms round-trip",
            "CPU usage: ~8% on a single 2.8 GHz core at 32 voices, 48 kHz",
          ],
        },
      ],
    },
  ],
};

export default item;
