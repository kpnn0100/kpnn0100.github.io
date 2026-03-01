import type { ProgrammingItem } from "../types";

const item: ProgrammingItem = {
  id: "3",
  title: "Distributed Sensor Network Protocol for Smart Home Automation",
  authors: ["Nam Doan"],
  year: "2024",
  conference: "Implementation Study",
  abstract:
    "Design and implementation of a custom mesh communication protocol — tentatively named LightMesh — for low-power wireless sensor networks in residential automation contexts. LightMesh features automatic node discovery, multi-hop routing, and self-healing topology repair, operating over the 2.4 GHz band using NRF24L01+ transceivers. Field tests in a 3-bedroom home demonstrate a 40% reduction in average node power consumption compared to baseline Zigbee deployments, with 99.3% packet delivery rate under normal operating conditions.",
  tags: ["Networking", "Embedded", "C", "Wireless", "Mesh Protocol"],
  link: "#",
  sections: [
    {
      num: "1",
      heading: "Motivation",
      content: [
        {
          type: "paragraph",
          text: "Commercial home automation protocols — Zigbee, Z-Wave, Thread — are mature and interoperable, but their general-purpose design incurs overhead that is unnecessarily costly for fixed, small-scale residential deployments. A home with 15–30 sensor nodes (temperature, door/window, motion, power) can run a simpler, tighter protocol that saves battery life without sacrificing reliability.",
        },
        {
          type: "figure",
          src: "https://images.unsplash.com/photo-1752262167753-37a0ec83f614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
          alt: "Smart home IoT sensor network",
          caption:
            "Figure 1. Residential deployment topology for the LightMesh field trial. Hexagons are sensor nodes; the gateway node (G) connects to a Raspberry Pi home server via USB.",
          figNum: 1,
        },
      ],
    },
    {
      num: "2",
      heading: "Protocol Design",
      content: [
        {
          type: "paragraph",
          text: "LightMesh is a flooding-suppressed mesh protocol. Each node maintains a 16-entry neighbor table populated by periodic beacon exchanges. Route discovery uses controlled flooding with a Time-To-Live (TTL) field that limits re-broadcast depth. A sequence-number cache prevents duplicate forwarding of packets already seen within the past 8 seconds.",
        },
        {
          type: "code",
          language: "c",
          caption: "Listing 1. Node discovery broadcast and duplicate-suppression check.",
          code: `#define MESH_MAX_TTL   5
#define SEQ_CACHE_SIZE 32

typedef struct {
    uint8_t  type;
    uint8_t  src_id;
    uint8_t  ttl;
    uint16_t seq;
    uint8_t  payload[16];
} mesh_packet_t;

static uint16_t seq_cache[SEQ_CACHE_SIZE];
static uint8_t  cache_head = 0;

bool mesh_is_duplicate(uint16_t seq) {
    for (uint8_t i = 0; i < SEQ_CACHE_SIZE; i++)
        if (seq_cache[i] == seq) return true;
    seq_cache[cache_head++ % SEQ_CACHE_SIZE] = seq;
    return false;
}

void mesh_forward(mesh_packet_t *pkt) {
    if (pkt->ttl == 0 || mesh_is_duplicate(pkt->seq)) return;
    pkt->ttl--;
    radio_broadcast(pkt, sizeof(*pkt));
}`,
        },
        {
          type: "figure",
          src: "https://images.unsplash.com/photo-1738082956220-a1f20a8632ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
          alt: "Network mesh topology diagram",
          caption:
            "Figure 2. Packet delivery success rate vs. hop count for LightMesh and baseline Zigbee over a 7-day measurement window. LightMesh maintains >99% PDR up to 4 hops.",
          figNum: 2,
        },
      ],
    },
    {
      num: "3",
      heading: "Power Management",
      content: [
        {
          type: "paragraph",
          text: "Each LightMesh node implements a Scheduled Wake-Up (SWU) scheme. Nodes synchronize clocks via beacon timestamps and sleep for configurable intervals between 500 ms and 10 s depending on their sensor type. Door/window sensors use a 500 ms wake period for fast response; temperature sensors use 10 s intervals. The NRF24L01+ is powered down entirely during sleep, consuming less than 900 nA.",
        },
        {
          type: "list",
          items: [
            "Active mode current (NRF24L01+): 11.3 mA (RX), 11.3 mA (TX at 0 dBm)",
            "Sleep mode current: <900 nA",
            "Average duty cycle (temperature node): 0.8%",
            "Average current draw on CR2032 cell: ~140 µA → estimated 2.1 year battery life",
          ],
        },
      ],
    },
  ],
};

export default item;
