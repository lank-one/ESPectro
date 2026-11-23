# ESPectro — Assembly Notes & Lessons Learned

Hard-won notes from building **ESPectro-0** (the prototype), so the remaining
units go smoothly. ESPectro is a build of the **ESP-HACK** reference 2-board
PCB by **Teapot174**, with ESPectro-branded firmware (a fork — see the
`firmware/` folder).

---

## 1. The PCB (2-board design)

The reference PCB is **two boards joined by a V-score groove**, meant to be
**snapped apart and stacked (sandwich)**, connected by board-to-board headers:

- **MAIN board** (`esp-hack`): ESP32, SD, CC1101, IR, BAT connector.
- **BACK PLATE**: OLED, buttons, TP4056 charger (POWER / IN± / OUT±).

> **ESPectro-0 was left un-snapped** (flat panel) → it's **bigger**. For the
> next units, **snap the V-score and stack** them for a compact device like
> the reference photo.

Module and board **mounting holes** are for screws/standoffs — use them to
fix modules in the case.

---

## 2. microSD module — the #1 gotcha ⚠️

The board needs the **mini 3.3 V** module with pin order
**`3V3 · CS · MOSI · CLK · MISO · GND`** (VCC and GND at opposite ends).

- **Do NOT** use the large "Micro SD Card Adapter" (5 V level-shifter, order
  `CS·SCK·MOSI·MISO·VCC·GND`) — it does not fit the footprint.
- **Beware mirrored-pinout mini modules.** Some mini modules have the **same
  pins in reverse order**. Matching the silkscreen then forces a 180° flip
  whose body **collides with the CC1101** socket.
  - **Fix A (recommended):** buy the exact BOM module
    (AliExpress `32674518514`) — plugs in directly, correct orientation.
  - **Fix B (what ESPectro-0 did):** desolder the module's header and
    **re-solder it on the opposite face** → the module plugs in "mirrored",
    which fixes the pin order **and** keeps the body clear of the CC1101.
    Verify with continuity before soldering: `3V3·CS·MOSI·CLK·MISO·GND`
    must match by name (CS↔G15, MOSI↔G13, CLK↔G14, MISO↔G17).
- **Cards:** format as **FAT32** (use the official *SD Card Formatter*). Old /
  tiny (2 GB) cards may fail to init — use a modern **SDHC** card (16 GB worked).
  The firmware creates its folders on first boot. Boot logo goes in `/bootlogo`.

**SD wiring:** `3V3→3V3 · CS→G15 · MOSI→G13 · CLK→G14 · MISO→G17 · GND→GND`.

---

## 3. CC1101 (SubGHz) + SD collision

With the wrong SD variant, the SD and CC1101 **fight for the same space**.
On ESPectro-0 the **CC1101 was relocated with 7 jumper wires** (SD kept in its
socket). With the correct SD module, re-check whether the CC1101 plugs
directly before wiring.

**CC1101 pinout (module pin → ESP32):**

| Pin | Function | GPIO |
|----|----------|------|
| 1 | GND | GND |
| 2 | VCC | 3V3 |
| 3 | GDO0 | G4 |
| 4 | CSN | G5 |
| 5 | SCK | G18 |
| 6 | MOSI | G23 |
| 7 | MISO | G19 |
| 8 | GDO2 | *(not connected)* |

- The **antenna must exit the enclosure** — mount the module at an edge.
- Keep SPI wires **short** and verify continuity by function before power-on.
- Error **`0x001`** on screen = CC1101 not detected (bad contact / wiring).

---

## 4. IR emitter & receiver

- **IR-TX (emitter, clear LED)** → **G16** (+ VCC 3V3, GND)
- **IR-RX (receiver, black dome)** → **G35** (+ VCC 3V3, GND)

> IR module pin order **varies by brand** — wire **by name**, not by position,
> and verify continuity (SIG↔G16, OUT↔G35). For the next units, source IR
> modules with a matching pinout/size to avoid hand-wiring.

**Tests:** TV-B-Gone → point the emitter at a **phone front camera**, you
should see it flicker (invisible to the eye). IR Read → point a TV remote at
the receiver, it captures the code (needs the SD working).

---

## 5. Power

- **No battery** is installed on ESPectro-0 → powered via the ESP32's
  **USB-C** (power bank or USB). The **BAT** connector is at the top of the
  MAIN board; the **TP4056** charger is on the BACK PLATE.
- Some power banks **auto-shut-off** at low current — use one that stays on.

---

## 6. Building & flashing (PlatformIO)

- Open the `firmware/` folder in VS Code + PlatformIO. Environment: **SH1106**.
- **Upload** (→) compiles and flashes.
- If flashing fails with **"chip stopped responding"**: retry, add
  `upload_speed = 115200` to `platformio.ini`, and use a good data USB cable on
  a **direct** port (not a hub). A brown-out with peripherals attached can also
  cause it.

---

## 7. General wiring tips

- Tape module groups into a **block** and bundle wires with **zip ties**
  (don't over-tighten near solder joints — leave strain relief).
- **Insulate** (Kapton/tape) under any module placed over bare PCB areas
  (e.g. the BAT zone) to avoid shorts.

---

## 8. Firmware

ESPectro firmware is a **fork of ESP-HACK (AGPL-3.0)** with ESPectro branding:
ghost graphics replacing the Flipper dolphins, Pages menu as the factory
default, GPIO menu removed (no GPIO modules populated), themed About / SD-error
/ SubGHz / IR screens, and ESPectro device identity. See `firmware/NOTICE.md`.
