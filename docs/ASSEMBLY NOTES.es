# ESPectro — Notas de montaje y lecciones aprendidas

Notas sacadas a pulso montando **ESPectro-0** (el prototipo), para que las
siguientes unidades vayan sobre ruedas. ESPectro usa la PCB de referencia de
2 placas de **ESP-HACK** (por **Teapot174**), con firmware ESPectro (un fork —
ver la carpeta `firmware/`).

---

## 1. La PCB (diseño de 2 placas)

La PCB de referencia son **dos placas unidas por una muesca (V-score)**,
pensadas para **separarse y apilarse (sándwich)**, conectadas por headers
placa-a-placa:

- **Placa principal** (`esp-hack`): ESP32, SD, CC1101, IR, conector BAT.
- **Back plate**: OLED, botones, cargador TP4056 (POWER / IN± / OUT±).

> **ESPectro-0 se dejó SIN separar** (panel plano) → queda **más grande**. Para
> las siguientes unidades, **separa por el V-score y apila** para un dispositivo
> compacto como la foto de referencia.

Los **agujeros de montaje** de los módulos y la placa son para tornillos/
separadores — úsalos para fijar los módulos en la carcasa.

---

## 2. Módulo microSD — el fallo nº1 ⚠️

La placa necesita el módulo **mini de 3.3 V** con el orden de pines
**`3V3 · CS · MOSI · CLK · MISO · GND`** (VCC y GND en extremos opuestos).

- **NO** uses el adaptador grande "Micro SD Card Adapter" (conversor de 5 V,
  orden `CS·SCK·MOSI·MISO·VCC·GND`) — no encaja en el footprint.
- **Cuidado con los módulos mini de pinout espejado.** Algunos traen los
  **mismos pines en orden inverso**. Al cuadrarlos con la serigrafía obligan a
  girar 180°, y el cuerpo **choca con el zócalo del CC1101**.
  - **Solución A (recomendada):** compra el módulo exacto del BOM
    (AliExpress `32674518514`) — enchufa directo, orientación correcta.
  - **Solución B (lo que hizo ESPectro-0):** desuelda el header del módulo y
    **resuéldalo en la cara contraria** → el módulo enchufa "espejado", lo que
    corrige el orden de pines **y** deja el cuerpo libre del CC1101. Verifica
    con continuidad antes de soldar: `3V3·CS·MOSI·CLK·MISO·GND` debe casar por
    nombre (CS↔G15, MOSI↔G13, CLK↔G14, MISO↔G17).
- **Tarjetas:** formatea en **FAT32** (usa el *SD Card Formatter* oficial). Las
  tarjetas viejas/pequeñas (2 GB) pueden fallar al iniciar — usa una **SDHC**
  moderna (16 GB funcionó). El firmware crea sus carpetas al primer arranque. El
  boot logo va en `/bootlogo`.

**Cableado SD:** `3V3→3V3 · CS→G15 · MOSI→G13 · CLK→G14 · MISO→G17 · GND→GND`.

---

## 3. CC1101 (SubGHz) + colisión con la SD

Con la variante de SD equivocada, la SD y el CC1101 **se pelean por el mismo
sitio**. En ESPectro-0 el **CC1101 se relocalizó con 7 cables** (la SD se quedó
en su zócalo). Con el módulo SD correcto, revisa si el CC1101 enchufa directo
antes de cablear.

**Pinout CC1101 (pin módulo → ESP32):**

| Pin | Función | GPIO |
|----|----------|------|
| 1 | GND | GND |
| 2 | VCC | 3V3 |
| 3 | GDO0 | G4 |
| 4 | CSN | G5 |
| 5 | SCK | G18 |
| 6 | MOSI | G23 |
| 7 | MISO | G19 |
| 8 | GDO2 | *(sin conectar)* |

- La **antena tiene que salir de la carcasa** — monta el módulo en un borde.
- Cables SPI **cortos** y verifica continuidad por función antes de alimentar.
- Error **`0x001`** en pantalla = CC1101 no detectado (mal contacto / cableado).

---

## 4. Emisor y receptor IR

- **IR-TX (emisor, LED transparente)** → **G16** (+ VCC 3V3, GND)
- **IR-RX (receptor, domo negro)** → **G35** (+ VCC 3V3, GND)

> El orden de pines de los módulos IR **varía según la marca** — cablea **por
> nombre**, no por posición, y verifica continuidad (SIG↔G16, OUT↔G35). Para las
> siguientes unidades, busca módulos IR con pinout/tamaño que encajen para
> evitar cablear a mano.

**Pruebas:** TV-B-Gone → apunta el emisor a la **cámara frontal del móvil**,
debe verse parpadear (es invisible al ojo). IR Read → apunta un mando de la tele
al receptor, captura el código (necesita la SD funcionando).

---

## 5. Alimentación

- En ESPectro-0 **no hay batería** → se alimenta por el **USB-C** del ESP32
  (powerbank o USB). El conector **BAT** está arriba en la placa principal; el
  cargador **TP4056** está en la back plate.
- Algunas powerbanks se **auto-apagan** con poco consumo — usa una que se
  mantenga encendida.

---

## 6. Compilar y flashear (PlatformIO)

- Abre la carpeta `firmware/` en VS Code + PlatformIO. Entorno: **SH1106**.
- **Upload** (→) compila y flashea.
- Si el flasheo falla con **"chip stopped responding"**: reintenta, añade
  `upload_speed = 115200` al `platformio.ini`, y usa un buen cable USB de datos
  en un puerto **directo** (no un hub). Un *brown-out* con periféricos
  conectados también puede causarlo.

---

## 7. Consejos de cableado

- Encinta los módulos en **bloque** y agrupa los cables con **bridas** (no las
  aprietes a tope cerca de las soldaduras — deja holgura / strain relief).
- **Aísla** (Kapton/cinta) debajo de cualquier módulo apoyado sobre zonas de
  PCB con pistas expuestas (p. ej. la zona BAT) para evitar cortos.

---

## 8. Firmware

El firmware de ESPectro es un **fork de ESP-HACK (AGPL-3.0)** con marca
ESPectro: gráficos de fantasma sustituyendo a los delfines del Flipper, menú
Pages como estilo de fábrica, menú GPIO eliminado (no hay módulos GPIO), y las
pantallas de About / error SD / SubGHz / IR tematizadas. Ver `firmware/NOTICE.md`.
