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

Branding changes plus one deliberate functional change (the RF jammer is
disabled). The rest of the ESP-HACK functionality is unchanged:

- Rebranded the on-device UI to **ESPectro**: boot logo, standby / screensaver
  graphic, About screen, and the BLE device / manufacturer identity.
- Added custom **category icons** for the main menu (Pages style).
- Re-themed the **"SD card not detected"** icon and the **SubGHz Jammer**,
  **Bruteforce**, **SubGHz Read / Saved** and **IR Read** screens with ESPectro
  artwork.
- **Removed the GPIO entry** from the main menu (the ESPectro build does not
  populate the GPIO add-on modules).
- **Disabled the SubGHz RF jammer** (`startJamming()` is a deliberate no-op; the
  Jammer screen shows "DISABLED"). RF jamming is illegal in Spain
  (Ley 11/2022) and in most jurisdictions.
- Changed a **factory default** (default menu style set to "Pages").

## Third-party components

Bundled from the upstream ESP-HACK project, under their own licenses:

- **heatshrink** — data compression library by Scott Vokes
  (`vokes.s@gmail.com`). Its authorship notice is retained in the source.
- **OneWireHub** — 1-Wire slave/hub library, under its own license
  (see `firmware/lib/OneWireHub/LICENSE.md`).
- **BadUSB-lib** — BLE / USB HID keyboard & mouse library used for the
  BadUSB / BadBLE features.
