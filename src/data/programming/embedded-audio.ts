import type { ProgrammingItem } from "../types";

const item: ProgrammingItem = {
  id: "1",
  title: "Real-Time Embedded Audio Processing System for IoT Devices",
  authors: ["Nam Doan"],
  year: "2025",
  conference: "Personal Project",
  abstract:
    "Development of a low-latency audio processing system for resource-constrained embedded devices. The system implements real-time filtering, compression, and streaming capabilities using ARM Cortex-M microcontrollers. Achieved 99.8% uptime with sub-10ms latency across a sustained 72-hour stress test. This work demonstrates that high-quality audio processing need not be confined to powerful hardware, and provides a reproducible framework for similar IoT audio applications.",
  tags: ["Embedded Systems", "C/C++", "Real-Time Processing", "IoT", "DSP"],
  link: "#",
  sections: [
    {
      num: "1",
      heading: "Introduction",
      content: [
        {
          type: "paragraph",
          text: "The proliferation of IoT devices has opened new frontiers in embedded audio processing. Applications range from smart speakers and hearing aids to industrial noise monitoring and automotive voice control. However, deploying audio pipelines on microcontrollers — devices with kilobytes of RAM and clock speeds measured in MHz rather than GHz — demands careful co-design of hardware and software.",
        },
        {
          type: "paragraph",
          text: "This project addresses the challenge of performing professional-grade audio filtering, compression, and streaming on an ARM Cortex-M4 operating at 168 MHz with 192 KB of SRAM. The core contribution is a pipeline architecture that separates audio acquisition, processing, and transmission into independent real-time tasks orchestrated by FreeRTOS, achieving end-to-end latency below 10 ms.",
        },
        {
          type: "figure",
          src: "https://images.unsplash.com/photo-1651964178942-ccecb82a18be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
          alt: "ARM Cortex-M development board with audio peripherals",
          caption:
            "Figure 1. Target hardware: ARM Cortex-M4 development board with I²S audio codec and RF module.",
          figNum: 1,
        },
      ],
    },
    {
      num: "2",
      heading: "System Architecture",
      content: [
        {
          type: "paragraph",
          text: "The pipeline is divided into three loosely-coupled real-time tasks. The Acquisition Task runs at the highest priority and services DMA interrupts from the I²S peripheral, writing 256-sample frames into a double-buffer. The Processing Task dequeues frames, applies a 32-tap FIR low-pass filter followed by a fixed-point µ-law compressor, and forwards the result to the Transmission Task. The Transmission Task fragments encoded audio into UDP datagrams transmitted over Wi-Fi.",
        },
        {
          type: "list",
          items: [
            "Acquisition Task (Priority 3): DMA-driven I²S capture at 48 kHz, 16-bit PCM",
            "Processing Task (Priority 2): FIR filtering + µ-law compression in fixed-point arithmetic",
            "Transmission Task (Priority 1): UDP packetization and Wi-Fi send via lwIP stack",
            "Watchdog monitor: resets pipeline if any task misses its deadline",
          ],
        },
        {
          type: "figure",
          src: "https://images.unsplash.com/photo-1762281429312-77566d0ad182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
          alt: "Audio waveform and oscilloscope signal",
          caption:
            "Figure 2. Oscilloscope capture showing the processed audio signal at the I²S output. THD+N measures −68 dB across the 20 Hz–20 kHz band.",
          figNum: 2,
        },
      ],
    },
    {
      num: "3",
      heading: "Implementation",
      content: [
        {
          type: "paragraph",
          text: "The FIR filter coefficients are computed offline using a Parks-McClellan equiripple design and stored in flash as Q15 fixed-point values. The inner loop leverages the Cortex-M4's single-cycle multiply-accumulate (MAC) instruction via ARM CMSIS-DSP intrinsics, achieving throughput of one filter tap per clock cycle.",
        },
        {
          type: "code",
          language: "c",
          caption: "Listing 1. FIR filter inner loop using CMSIS-DSP Q15 operations.",
          code: `#include "arm_math.h"

#define FIR_ORDER  32
#define BLOCK_SIZE 256

static arm_fir_instance_q15 fir_inst;
static q15_t fir_state[FIR_ORDER + BLOCK_SIZE - 1];
static q15_t fir_coeffs[FIR_ORDER] = { /* offline-computed Q15 taps */ };

void audio_filter_init(void) {
    arm_fir_init_q15(&fir_inst, FIR_ORDER,
                     fir_coeffs, fir_state, BLOCK_SIZE);
}

void audio_filter_process(q15_t *pSrc, q15_t *pDst) {
    /* Single-cycle MAC via Cortex-M4 SIMD; processes BLOCK_SIZE samples */
    arm_fir_q15(&fir_inst, pSrc, pDst, BLOCK_SIZE);
}`,
        },
        {
          type: "paragraph",
          text: "µ-law compression is applied after filtering to reduce the bit depth from 16 to 8 bits. The compressor table is precomputed and stored as a 65536-entry lookup in flash, making the compression step a single array dereference per sample — O(1) with no branching.",
        },
      ],
    },
    {
      num: "4",
      heading: "Results & Discussion",
      content: [
        {
          type: "paragraph",
          text: "Over a 72-hour continuous stress test, the system maintained 99.8% uptime with a maximum observed end-to-end latency of 9.3 ms and a mean of 6.1 ms. The FIR filter consumed 34% of CPU time; µ-law compression added less than 1%. Total RAM usage peaked at 74 KB, leaving comfortable headroom for the RTOS kernel and TCP/IP stack.",
        },
        {
          type: "list",
          items: [
            "Mean latency: 6.1 ms  |  Max latency: 9.3 ms  |  Target: <10 ms ✓",
            "System uptime over 72 h: 99.8%",
            "Peak RAM usage: 74 / 192 KB (38.5%)",
            "Audio quality: THD+N = −68 dB, SNR = 72 dB",
          ],
        },
        {
          type: "paragraph",
          text: "Future work will explore adaptive bit-rate control — dynamically switching between 8, 12, and 16-bit output based on channel congestion — and porting the pipeline to the RP2040's PIO state machines for zero-CPU-overhead audio capture.",
        },
      ],
    },
  ],
};

export default item;
