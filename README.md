# ESPectro

<p align="center">
  <a href="README.md">🇬🇧 English</a> · <a href="README.es.md">🇪🇸 Español</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-WIP-orange" alt="Status: Work in Progress">
  <img src="https://img.shields.io/badge/platform-ESP32-blue" alt="Platform: ESP32">
  <img src="https://img.shields.io/badge/firmware-ESP--HACK-critical" alt="Firmware: ESP-HACK">
  <img src="https://img.shields.io/github/license/lank-one/ESPectro" alt="License">
</p>

🚧 **Work in progress** — hardware and documentation are still being built.

A DIY multi-function pentesting device built on the [ESP-HACK](https://github.com/Teapot174/ESP-HACK) firmware.

## Project Status

- [x] Physical breadboard assembly — completed (dual 830-point boards with folded inner rails)
- [x] Firmware flashing (ESP-HACK) — successful, SH1106 environment
- [ ] Per-module wiring verification — OLED confirmed working (H-H direct connection to ESP32 G21/G22)
- [ ] SD card setup — pending (USB microSD reader ordered)
- [ ] Remaining module wiring (CC1101, buttons, IR-TX, IR-RX)
- [ ] Enclosure / final integration
- [ ] Full documentation (wiring guide, photos)

## Bill of Materials

| Qty | Component | Purchase Link | Price |
|-----|-----------|----------------|-------|
| 2 | 830-point breadboard | [Amazon.es](https://www.amazon.es/dp/B0BDYWKC9H) | €5.40 |
| 1 | AZDelivery ESP32 Dev Kit (WROOM-32) | [Amazon.es](https://www.amazon.es/dp/B0DHY22H5B) | €15.04 |
| 1 | ICQUANZX CC1101 433MHz RF module | [Amazon.es](https://www.amazon.es/dp/B07YX92NMP) | €8.99 |
| 1 | 1.3" OLED display, I2C (SH1106) — pack of 2 | [Amazon.es](https://www.amazon.es/dp/B0DFCKSWH9) | €11.99 |
| 1 | Colored push buttons — pack of 15 | [Bricogeek](https://tienda.bricogeek.com/home/508-pack-pulsadores-de-colores-15-unidades.html) | €6.40 |
| 1 | MicroSD card reader module | [Bricogeek](https://tienda.bricogeek.com/interfaz-de-almacenamiento/2042-m%C3%B3dulo-lector-memoria-micro-sd-para-arduino.html) | €1.50 |
| 1 | IR emitter/receiver kit, 38KHz (940nm) | [Bricogeek](https://tienda.bricogeek.com/sensores-luz-infrarrojos/2122-kit-emisor-y-receptor-ir-38khz-940nm.html) | €2.80 |
| 1 | DuPont wires Male-Male, 20cm (pack of 40) | [Bricogeek](https://tienda.bricogeek.com/cables/1361-cables-dupont-macho-macho-20-cm-40-unidades.html) | €1.60 |
| 1 | DuPont wires Male-Female, 20cm (pack of 40) | [Bricogeek](https://tienda.bricogeek.com/cables/1362-cables-dupont-macho-hembra-20-cm-40-unidades.html) | €1.60 |
| 1 | DuPont wires Female-Female, 20cm (pack of 40) | [Bricogeek](https://tienda.bricogeek.com/cables/1363-cables-dupont-hembra-hembra-20-cm-40-unidades.html) | €1.60 |

**Total: ≈ €62.32**

> Some quantities (breadboards, buttons, OLED displays, cable packs) exceed what a single unit needs — this reflects buying in bulk to have spares for future builds.

## Wiring Guide

🚧 *Coming soon — this section will be filled in once the physical assembly is finalized. See [Project Status](#project-status) for the current blocker.*

## Firmware Installation

ESP-HACK is built with [PlatformIO](https://platformio.org/), targeting the Arduino framework for the `esp32dev` board. The upstream `platformio.ini` configuration is:

```ini
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200
board_build.partitions = huge_app.csv
lib_deps =
    adafruit/Adafruit SH110X@^2.1.13
    adafruit/Adafruit SSD1306@^2.5.16
    gyverlibs/GyverButton@^3.8
    crankyoldgit/IRremoteESP8266@^2.9.0
    lsatan/SmartRC-CC1101-Driver-Lib@^2.5.7
    sui77/rc-switch@^2.6.4
    h2zero/NimBLE-Arduino@^2.3.2
    nrf24/RF24@^1.5.0
    paulstoffregen/OneWire@^2.3.8

extra_scripts =
    post:build.py
```

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/) with the [PlatformIO IDE extension](https://platformio.org/platformio-ide), **or** the [PlatformIO Core CLI](https://docs.platformio.org/en/latest/core/installation/index.html)
- A USB data cable connecting the ESP32-WROOM-32 board to your computer
- The correct USB-to-UART driver for your board (typically CP2102 or CH340) installed on your host OS

### Steps

1. **Clone the upstream firmware.** The original repository is archived (read-only), so fork it on GitHub first if you plan to make changes, then clone your fork (or the original, for a straight build):
```bash
   git clone https://github.com/Teapot174/ESP-HACK.git
   cd ESP-HACK
```
2. **Open the project in PlatformIO.** In VS Code: `File → Open Folder` → select the cloned `ESP-HACK` folder. PlatformIO detects `platformio.ini` automatically and resolves the `lib_deps` dependencies on first build.
3. **Connect the ESP32 board** via USB and confirm it is detected:
```bash
   pio device list
```
4. **Build the firmware:**
```bash
   pio run
```
5. **Flash it.** The project ships with a bundled `esptool.exe` and a `huge_app.csv` partition table (needed because ESP-HACK's combined feature set exceeds the default app partition size). Using PlatformIO's upload target applies the correct partition scheme automatically:
```bash
   pio run --target upload
```
6. **Monitor the serial output** to confirm a successful boot:
```bash
   pio device monitor -b 115200
```
7. **(Optional) SD card content.** ESP-HACK can load additional content/updates from a FAT32-formatted microSD card — see the [ESP-HACK wiki](https://teapot174.github.io) for the expected folder structure.

> ⚠️ Flash this on a bare ESP32 first, before final assembly — it lets you confirm the board boots correctly without mixing firmware issues with wiring issues.

For troubleshooting and feature usage beyond this build guide, see the original documentation:
- Repository: https://github.com/Teapot174/ESP-HACK
- Wiki: https://teapot174.github.io

## Legal Disclaimer

This project is a hardware build guide for a device running the third-party, open-source **ESP-HACK** firmware. It is published strictly for educational and authorized security-research purposes.

By building and/or using this device, you agree to the following, which mirrors the upstream project's own disclaimer:

> "This firmware is designed exclusively for research purposes and hardware testing. By using the firmware, you must comply with the laws of your region. The firmware creator is not responsible for your actions."

In addition:

- **You are solely responsible for how you use this device.** Only use it against systems, networks, and RF devices you own or have explicit, written authorization to test.
- **Jamming is illegal in most jurisdictions and is explicitly called out as such by the upstream firmware author.** Any Sub-GHz or NRF24 functionality in ESP-HACK that constitutes RF jamming is present in the firmware for research/lab documentation purposes only and **must not** be used to disrupt licensed radio services, emergency communications, or any third-party equipment.
- **Wi-Fi and Bluetooth disruptive features** (deauthentication, beacon spam, BLE spam, evil portal, etc.) can violate telecommunications and computer-misuse laws in many countries even on networks you believe are "abandoned" or "public." Confirm you have authorization before use.
- **RFID/iButton/NFC emulation and cloning features** may be regulated depending on your jurisdiction and the credential type. Do not clone or emulate access credentials you are not authorized to possess or test.
- The author of this repository (the hardware build documentation) is **not the developer of ESP-HACK** and assumes no liability for how the firmware or the assembled device is used by third parties.
- This project is released for research and educational purposes only. **The author accepts no responsibility for misuse, damages, or legal consequences arising from the construction or operation of this device.**

If you are unsure whether a specific use case is legal in your country, consult local telecommunications and computer-misuse regulations, or a qualified legal professional, before proceeding.
