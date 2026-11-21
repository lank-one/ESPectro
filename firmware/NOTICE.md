# NOTICE

## ESPectro Firmware

This firmware is a fork and customization of **ESP-HACK** by **Teapot174**.

- Original project: **ESP-HACK** — https://github.com/Teapot174/ESP-HACK
- Original author: **Teapot174**
- Based on: ESP-HACK **v1.3**
- License: **GNU Affero General Public License v3.0 (AGPL-3.0)**

This fork is maintained by **lank-one** (Alan) for the **ESPectro** device:
https://github.com/lank-one/ESPectro

As a derivative work under the AGPL-3.0, this fork is distributed under the
**same license**. The full license text is in the [`LICENSE`](LICENSE) file.
The original copyright and authorship of ESP-HACK by Teapot174 are retained,
and the firmware credit to Teapot174 remains visible on the device's **About**
screen.

## Changes made in this fork

Cosmetic / branding and minor functional changes only — the core
functionality remains that of ESP-HACK:

- Rebranded the on-device UI to **ESPectro**: boot logo, standby / screensaver
  graphic, About screen, and the BLE device / manufacturer identity.
- Added custom **category icons** for the main menu (Pages style).
- Re-themed the **"SD card not detected"** icon and the **SubGHz Jammer** and
  **Bruteforce** screens with ESPectro artwork.
- **Removed the GPIO entry** from the main menu (the ESPectro build does not
  populate the GPIO add-on modules).
- Changed a **factory default** (default menu style set to "Pages").

## Third-party components

- **heatshrink** — data compression library by Scott Vokes
  (`vokes.s@gmail.com`). Its authorship notice is retained in the source.
