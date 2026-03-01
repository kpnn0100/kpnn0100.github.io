import type { ProgrammingItem } from "../types";

const item: ProgrammingItem = {
  id: "5",
  title: "Firmware Development Framework for Multi-Protocol IoT Gateways",
  authors: ["Nam Doan"],
  year: "2024",
  conference: "Industrial Application",
  abstract:
    "Architected and developed a flexible firmware framework — GatewayOS — that abstracts over three IoT messaging protocols (MQTT, CoAP, HTTP/REST) on an ESP32-based gateway hardware platform. The framework includes an OTA update subsystem with A/B partition switching, a secure boot chain enforcing RSA-2048 code signing, and a structured error-handling layer with crash telemetry. GatewayOS was productized and successfully deployed on 500+ field devices across two commercial clients with zero security incidents in 18 months of operation.",
  tags: ["Firmware", "ESP32", "IoT", "Security", "FreeRTOS", "OTA"],
  link: "#",
  sections: [
    {
      num: "1",
      heading: "Background",
      content: [
        {
          type: "paragraph",
          text: "Industrial IoT gateways must bridge heterogeneous edge sensors to cloud backends. Different cloud vendors mandate different protocols: AWS IoT Core and Mosquitto brokers use MQTT; OSCORE-secured networks prefer CoAP; REST-heavy enterprise integrations use plain HTTPS. Writing bespoke firmware for each protocol stack is untenable at scale.",
        },
        {
          type: "figure",
          src: "https://images.unsplash.com/photo-1610878785620-3ab2d3a2ae7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
          alt: "IoT gateway circuit board",
          caption:
            "Figure 1. GatewayOS target platform: custom ESP32-WROVER-E carrier board with Ethernet PHY, RS-485 transceiver, and 4 MB PSRAM.",
          figNum: 1,
        },
      ],
    },
    {
      num: "2",
      heading: "Architecture",
      content: [
        {
          type: "paragraph",
          text: "GatewayOS introduces a Protocol Adapter Layer (PAL) that presents a uniform send(topic, payload) / subscribe(topic, callback) API regardless of the underlying protocol. At compile time, a Kconfig option selects which protocol backends are linked into the firmware image. At runtime, the active backend is selected from non-volatile storage, allowing field reconfiguration without re-flashing.",
        },
        {
          type: "code",
          language: "c",
          caption: "Listing 1. PAL abstraction and MQTT backend registration.",
          code: `/* protocol_adapter.h */
typedef struct {
    esp_err_t (*connect)(const char *host, uint16_t port);
    esp_err_t (*publish)(const char *topic,
                         const uint8_t *payload, size_t len,
                         uint8_t qos);
    esp_err_t (*subscribe)(const char *topic,
                           pal_msg_cb_t cb);
    void      (*disconnect)(void);
} pal_backend_t;

/* mqtt_backend.c */
static const pal_backend_t mqtt_backend = {
    .connect    = mqtt_connect,
    .publish    = mqtt_publish,
    .subscribe  = mqtt_subscribe,
    .disconnect = mqtt_disconnect,
};

void pal_register_mqtt(void) {
    pal_set_backend(&mqtt_backend);
}`,
        },
        {
          type: "paragraph",
          text: "The OTA subsystem uses ESP-IDF's native partition table with two equal-sized OTA partitions. Firmware images are fetched over HTTPS from an S3-hosted manifest, verified against an embedded RSA-2048 public key, and written to the inactive partition. The boot loader switches the active partition only after a successful SHA-256 hash check, guaranteeing automatic rollback on failed updates.",
        },
        {
          type: "figure",
          src: "https://images.unsplash.com/photo-1546124404-9e7e3cac2ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
          alt: "Server deployment infrastructure",
          caption:
            "Figure 2. OTA update flow. The manifest server and firmware CDN are hosted on AWS; field devices poll for updates every 6 hours during the configured maintenance window.",
          figNum: 2,
        },
      ],
    },
    {
      num: "3",
      heading: "Deployment & Outcomes",
      content: [
        {
          type: "paragraph",
          text: "GatewayOS was deployed across two industrial clients: a building management system integrator (320 devices) and a cold-chain logistics provider (210 devices). Over 18 months of continuous operation, the OTA subsystem has delivered 7 firmware updates without requiring physical hardware access. The crash-telemetry layer reported and resolved 3 previously unknown edge-case panics in the CoAP backend.",
        },
        {
          type: "list",
          items: [
            "Total field devices: 530 across 2 clients",
            "OTA update success rate: 99.6% (2 devices required manual recovery after power loss mid-update)",
            "Security incidents: 0 in 18 months",
            "Mean time between firmware-related failures: >4,000 device-hours",
            "Code footprint: 680 KB flash, 52 KB RAM (FreeRTOS + all three PAL backends)",
          ],
        },
      ],
    },
  ],
};

export default item;
