---
title: "LoRaChord"
track: "professional"
type: "education"
dateStart: "2023-04"
displayDate: "2023"
nodeImage: "../../assets/logos/ncl-uni-logo.png"
summary: "Peer-to-peer comms client for smart agriculture - BSc dissertation."
accent: true
links:
  - { label: "Download full dissertation (PDF)", href: "/LoRaChord_Dissertation.pdf" }
media:
  - src: "../../assets/timeline-content/Chord_network.png"
    alt: "LoRaChord Chord protocol network diagram"
    width: 30
---

**Peer-to-Peer Communication Client for Smart Agriculture** - BSc Dissertation,
Newcastle University.

My BSc dissertation tackled a real limitation in smart agriculture IoT systems:
centralized gateway architectures create single points of failure, latency, and
security risk. I designed a **peer-to-peer backup communication layer** for IoT
devices over LoRa radio, adapting the **Chord protocol** - originally built for
key-based DHT lookup - into a packet-based node-lookup scheme suited to LoRa's
broadcast nature, including a custom packet protocol with request deduplication,
and a full hardware implementation on Arduino boards.

To test it at meaningful scale, I built a **C++ simulation harness**, since
testing with hundreds of physical boards wasn't feasible. The standout result:
node failures actually *improved* network performance, since they triggered more
frequent re-stabilization of the network's internal routing tables - a fittingly
counter-intuitive finding for a system designed to handle failure.
