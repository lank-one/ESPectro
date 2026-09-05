# ESPectro

<p align="center">
  <a href="README.md">🇬🇧 English</a> · <a href="README.es.md">🇪🇸 Español</a>
</p>

<p align="center">
  <img src="docs/branding/logo-banner.png" width="480" alt="ESPectro logo">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-WIP-orange" alt="Status: Work in Progress">
  <img src="https://img.shields.io/badge/platform-ESP32-blue" alt="Platform: ESP32">
  <img src="https://img.shields.io/badge/firmware-ESP--HACK-critical" alt="Firmware: ESP-HACK">
  <img src="https://img.shields.io/github/license/lank-one/ESPectro" alt="License">
</p>

🚧 **Work in progress** — hardware and documentation are still being built.

A DIY multi-function pentesting device built on the [ESP-HACK](https://github.com/Teapot174/ESP-HACK) firmware.

## Table of Contents

- [Project Status](#project-status)
- [Bill of Materials](#bill-of-materials)
- [Wiring Guide](#wiring-guide)
- [Known Issues & Design Decisions](#known-issues--design-decisions)
- [Firmware Installation](#firmware-installation)
- [Legal Disclaimer](#legal-disclaimer)
- [Credits](#credits)

## Project Status

- [x] Components selected and ordered (BOM)
- [x] Firmware built and flashed — ESP-HACK v1.2, `SH1106` display environment, jammer functionality disabled (see [Firmware Installation](#firmware-installation))
- [x] OLED display wired and verified (SDA→G21, SCL→G22)
- [x] Custom PCB ordered — official ESP-HACK reference design (Gerbers by Teapot174 / Dripside, from the upstream repository's `/others` folder), manufactured via JLCPCB — ETA 7–10 business days
- [x] Breadboard prototyping discontinued — persistent contact reliability issues with the ESP32 header pins (see [Known Issues & Design Decisions](#known-issues--design-decisions))
- [ ] Final assembly on PCB (blocked on PCB delivery)
- [ ] microSD module — functional verification
- [ ] CC1101 module — wiring and testing
- [ ] Buttons — wiring and testing
- [ ] IR emitter/receiver — wiring and testing
- [ ] 3D-printed enclosure
- [ ] Full build documentation with photos

## Wiring Guide

The pinout below is sourced directly from ESP-HACK's firmware configuration (`src/CONFIG.h`) — the same GPIO map used by the official reference PCB this build is based on, so it applies whether you build on the PCB, on perfboard, or on a breadboard for testing.

### OLED Display (SH1106, I²C) — ✅ Wired & verified

| Display Pin | ESP32 GPIO |
|---|---|
| VCC | 3V3 |
| GND | GND |
| SDA | G21 |
| SCL | G22 |

### Navigation Buttons — ⏳ Pending assembly (PCB)

Each button connects one leg to the listed GPIO, the other to GND (firmware uses internal pull-ups).

| Function | ESP32 GPIO |
|---|---|
| UP | G27 |
| DOWN | G26 |
| OK | G33 |
| BACK | G32 |

### CC1101 433MHz Module (SPI) — ⏳ Pending assembly (PCB)

| CC1101 Pin | ESP32 GPIO |
|---|---|
| VCC | 3V3 |
| GND | GND |
| SCK | G18 |
| MOSI | G23 |
| MISO | G19 |
| CSN (CS) | G5 |
| GDO0 | G4 |

### microSD Module (dedicated SPI bus) — ⏳ Wired, functional verification pending

| SD Module Pin | ESP32 GPIO |
|---|---|
| VCC | 3V3 |
| GND | GND |
| CS | G15 |
| MOSI | G13 |
| SCK (CLK) | G14 |
| MISO | G17 |

> The SD card runs on its own dedicated SPI instance in firmware (`sdSPI`), separate from the CC1101's hardware SPI bus above — the two do not share pins.

### Infrared Emitter / Receiver — ⏳ Pending assembly (PCB)

| Signal | ESP32 GPIO |
|---|---|
| IR TX (emitter) | G16 |
| IR RX (receiver) | G35 |

### Optional GPIO Expansion Header

Reserved for add-on modules (iButton, NRF24, ST25R3916/RFID):

| Label | ESP32 GPIO | Shared with |
|---|---|---|
| GPIO_A | G16 | IR TX |
| GPIO_B | G2 | — |
| GPIO_C | G18 | CC1101 SCK |
| GPIO_D | G23 | CC1101 MOSI |
| GPIO_E | G19 | CC1101 MISO |
| GPIO_F | G25 | — |

These pins are multiplexed with other peripherals by design — only wire an add-on to a shared pin if the corresponding peripheral isn't populated on your build.

## Known Issues & Design Decisions

**Breadboard prototyping — discontinued.** Early prototyping used two 830-point breadboards with Female-Female DuPont jumpers wired directly into the ESP32 header. This was abandoned after repeated contact/connection failures on the header pins — the friction-fit sockets degraded quickly under normal handling, making the board unreliable beyond short bench tests.

**Resolved: official reference PCB instead of a custom design or perfboard.** Rather than designing a PCB from scratch or moving to perfboard and hand soldering, this build uses the **official ESP-HACK reference PCB**, whose Gerber files are published by the firmware author in the upstream repository's `/others` folder (design credited to **Teapot174** and **Dripside**). Reusing the vetted reference design:

- guarantees the physical pinout matches the firmware's hardcoded GPIO map (`src/CONFIG.h`) exactly, with no risk of a wiring-to-firmware mismatch,
- skips PCB design and review time entirely,
- benefits from prior community use of that same layout.

Boards were ordered through **JLCPCB**, with an estimated delivery of **7–10 business days**.

> **Note on reuse:** the Gerber files are not this repository's own design — they belong to the upstream ESP-HACK project. If you mirror them into your own repo rather than only linking to the source, keep the original attribution intact and check the upstream repository's license before redistributing.

Pin mapping and the firmware version constant both live in `src/CONFIG.h` — see the [Wiring Guide](#wiring-guide) for the complete GPIO map used by this build.


## Credits

- **Firmware:** [ESP-HACK](https://github.com/Teapot174/ESP-HACK) by Teapot174, licensed under AGPL-3.0
- **Reference PCB design:** Teapot174 and Dripside — Gerber files published in the upstream repository's `/others` folder
- **Hardware build, wiring documentation, and this repository:** [lank-one](https://github.com/lank-one)
