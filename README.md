# ESPectro

<p align="center">
  <a href="README.md">English</a> · <a href="README.es.md">Español</a>
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

- [x] Components selected and ordered (BOM)
- [x] Wiring / pinout design documented
- [ ] Physical breadboard assembly — in progress, currently blocked: waiting on a second 830-point breadboard (the first one ran out of free pins for the full wiring)
- [ ] Firmware flashing (ESP-HACK)
- [ ] Per-module wiring verification (display, CC1101, IR, SD)
- [ ] Enclosure / final integration
- [ ] Full documentation (BOM, wiring guide, install steps, legal disclaimer)

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
