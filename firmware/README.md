# ESPectro Firmware

Custom firmware for the **ESPectro** — a DIY ESP32-based wireless / RF
security-auditing device.

This is a fork of **[ESP-HACK](https://github.com/Teapot174/ESP-HACK) by
Teapot174** (AGPL-3.0), with ESPectro branding and some minor changes.
See [`NOTICE.md`](NOTICE.md) for full attribution and the complete list of
changes.

## Hardware

Runs on the ESP-HACK reference board, populated with:

- ESP32-WROOM-32 (AZDelivery, 38-pin)
- CC1101 433 MHz transceiver (SubGHz)
- SH1106 1.3" OLED (I²C)
- microSD module (3.3 V)
- IR emitter + receiver (38 kHz, 940 nm)

## Build & flash (PlatformIO)

1. Open this folder in **VS Code** with the **PlatformIO** extension.
2. Connect the ESP32 via **USB-C**.
3. **Upload** using the **SH1106** environment (Upload compiles *and* flashes).

## SD card

Format the microSD as **FAT32**. The firmware creates the folders it needs on
first boot.

- **Custom boot logo:** place a bitmap `.txt` in a `/bootlogo` folder.
- **Universal Remote (IR database):** copy the contents of `sdcard.zip` from
  the upstream [ESP-HACK](https://github.com/Teapot174/ESP-HACK) project to the
  card.

## Credits

Firmware based on **ESP-HACK by Teapot174** — https://github.com/Teapot174/ESP-HACK
Wiki: https://teapot174.github.io/

## License

**GNU Affero General Public License v3.0 (AGPL-3.0)** — same as the upstream
ESP-HACK. See [`LICENSE`](LICENSE).
