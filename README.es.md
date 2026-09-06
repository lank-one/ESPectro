# ESPectro

<p align="center">
  <a href="README.md">🇬🇧 English</a> · <a href="README.es.md">🇪🇸 Español</a>
</p>

<p align="center">
  <img src="docs/branding/logo-banner.jpg" width="480" alt="Logo de ESPectro">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-WIP-orange" alt="Status: Work in Progress">
  <img src="https://img.shields.io/badge/platform-ESP32-blue" alt="Platform: ESP32">
  <img src="https://img.shields.io/badge/firmware-ESP--HACK-critical" alt="Firmware: ESP-HACK">
  <img src="https://img.shields.io/github/license/lank-one/ESPectro" alt="License">
</p>

🚧 **En construcción** — el hardware y la documentación todavía se están desarrollando.

Un dispositivo DIY multifunción de pentesting basado en el firmware [ESP-HACK](https://github.com/Teapot174/ESP-HACK).

## Índice

- [Estado del proyecto](#estado-del-proyecto)
- [Lista de materiales](#lista-de-materiales)
- [Guía de cableado](#guía-de-cableado)
- [Problemas conocidos y decisiones de diseño](#problemas-conocidos-y-decisiones-de-diseño)
- [Instalación del firmware](#instalación-del-firmware)
- [Aviso legal](#aviso-legal)
- [Créditos](#créditos)

## Estado del proyecto

- [x] Componentes seleccionados y pedidos (BOM)
- [x] Firmware compilado y flasheado — ESP-HACK v1.2, entorno de display `SH1106`, funcionalidad de jammer deshabilitada (ver [Instalación del firmware](#instalación-del-firmware))
- [x] Display OLED cableado y verificado (SDA→G21, SCL→G22)
- [x] PCB personalizada pedida — diseño de referencia oficial de ESP-HACK (Gerbers de Teapot174 / Dripside, publicados en la carpeta `/others` del repositorio original), fabricada por JLCPCB — llegada estimada de 7 a 10 días hábiles
- [x] Prototipado en breadboard descartado definitivamente — problemas persistentes de contacto en los pines del header del ESP32 (ver [Problemas conocidos y decisiones de diseño](#problemas-conocidos-y-decisiones-de-diseño))
- [ ] Montaje final en la PCB (bloqueado hasta que llegue)
- [ ] Verificación funcional del módulo microSD
- [ ] Cableado y pruebas del módulo CC1101
- [ ] Cableado y pruebas de los botones
- [ ] Cableado y pruebas del emisor/receptor IR
- [ ] Carcasa impresa en 3D
- [ ] Documentación completa del montaje con fotos

## Lista de materiales

| Unidades | Componente | Enlace de compra | Precio |
|----------|-----------|-------------------|--------|
| 2 | Protoboard 830 puntos | [Amazon.es](https://www.amazon.es/dp/B0BDYWKC9H) | 5,40€ |
| 1 | AZDelivery ESP32 Dev Kit (WROOM-32) | [Amazon.es](https://www.amazon.es/dp/B0DHY22H5B) | 15,04€ |
| 1 | ICQUANZX CC1101 433MHz | [Amazon.es](https://www.amazon.es/dp/B07YX92NMP) | 8,99€ |
| 1 | Display OLED 1.3" I2C (SH1106) — pack de 2 | [Amazon.es](https://www.amazon.es/dp/B0DFCKSWH9) | 11,99€ |
| 1 | Botones de colores — pack de 15 | [Bricogeek](https://tienda.bricogeek.com/home/508-pack-pulsadores-de-colores-15-unidades.html) | 6,40€ |
| 1 | Módulo lector microSD | [Bricogeek](https://tienda.bricogeek.com/interfaz-de-almacenamiento/2042-m%C3%B3dulo-lector-memoria-micro-sd-para-arduino.html) | 1,50€ |
| 1 | Kit emisor/receptor IR 38KHz (940nm) | [Bricogeek](https://tienda.bricogeek.com/sensores-luz-infrarrojos/2122-kit-emisor-y-receptor-ir-38khz-940nm.html) | 2,80€ |
| 1 | Cables DuPont Macho-Macho, 20cm (pack de 40) | [Bricogeek](https://tienda.bricogeek.com/cables/1361-cables-dupont-macho-macho-20-cm-40-unidades.html) | 1,60€ |
| 1 | Cables DuPont Macho-Hembra, 20cm (pack de 40) | [Bricogeek](https://tienda.bricogeek.com/cables/1362-cables-dupont-macho-hembra-20-cm-40-unidades.html) | 1,60€ |
| 1 | Cables DuPont Hembra-Hembra, 20cm (pack de 40) | [Bricogeek](https://tienda.bricogeek.com/cables/1363-cables-dupont-hembra-hembra-20-cm-40-unidades.html) | 1,60€ |
| 4 | PCB personalizada (diseño de referencia oficial de ESP-HACK) | [JLCPCB](https://jlcpcb.com/) | 4,31€/ud (≈17,22€ total del lote de 4) |

**Total gastado en el prototipo: ≈ 79,54€**

> **Esta tabla refleja el gasto total del prototipo**, incluyendo repuestos y herramientas de prototipado (breadboards, packs de cables) que un dispositivo de producción no necesita. No es el coste por unidad.

## Guía de cableado

El pinout siguiente procede directamente de la configuración del firmware ESP-HACK (`src/CONFIG.h`) — el mismo mapa de GPIO que usa la PCB de referencia oficial en la que se basa este montaje, así que aplica tanto si construyes sobre la PCB, sobre perfboard, o sobre breadboard para pruebas.

### Display OLED (SH1106, I²C) — ✅ Cableado y verificado

| Pin del display | GPIO del ESP32 |
|---|---|
| VCC | 3V3 |
| GND | GND |
| SDA | G21 |
| SCL | G22 |

### Pulsadores de navegación — ⏳ Pendiente de montaje (PCB)

Cada pulsador conecta una pata al GPIO indicado y la otra a GND (el firmware usa pull-ups internas).

| Función | GPIO del ESP32 |
|---|---|
| UP | G27 |
| DOWN | G26 |
| OK | G33 |
| BACK | G32 |

### Módulo CC1101 433MHz (SPI) — ⏳ Pendiente de montaje (PCB)

| Pin del CC1101 | GPIO del ESP32 |
|---|---|
| VCC | 3V3 |
| GND | GND |
| SCK | G18 |
| MOSI | G23 |
| MISO | G19 |
| CSN (CS) | G5 |
| GDO0 | G4 |

### Módulo microSD (bus SPI dedicado) — ⏳ Cableado, verificación funcional pendiente

| Pin del módulo SD | GPIO del ESP32 |
|---|---|
| VCC | 3V3 |
| GND | GND |
| CS | G15 |
| MOSI | G13 |
| SCK (CLK) | G14 |
| MISO | G17 |

> La tarjeta SD funciona con su propia instancia SPI dedicada en firmware (`sdSPI`), independiente del bus SPI hardware del CC1101 de arriba — no comparten pines.

### Emisor / receptor IR — ⏳ Pendiente de montaje (PCB)

| Señal | GPIO del ESP32 |
|---|---|
| IR TX (emisor) | G16 |
| IR RX (receptor) | G35 |

### Header GPIO de expansión (opcional)

Reservado para módulos adicionales (iButton, NRF24, ST25R3916/RFID):

| Etiqueta | GPIO del ESP32 | Compartido con |
|---|---|---|
| GPIO_A | G16 | IR TX |
| GPIO_B | G2 | — |
| GPIO_C | G18 | CC1101 SCK |
| GPIO_D | G23 | CC1101 MOSI |
| GPIO_E | G19 | CC1101 MISO |
| GPIO_F | G25 | — |

Estos pines están multiplexados con otros periféricos de forma intencional — solo cablea un módulo adicional a un pin compartido si el periférico correspondiente no está montado en tu build.

## Problemas conocidos y decisiones de diseño

**Prototipado en breadboard — descartado.** El prototipado inicial usaba dos breadboards de 830 puntos con jumpers DuPont Hembra-Hembra directos al header del ESP32. Se abandonó tras fallos de contacto repetidos en los pines del header — el ajuste por fricción se degradaba rápido con el uso normal, haciendo la placa poco fiable más allá de pruebas cortas de banco.

**Resuelto: PCB de referencia oficial en lugar de diseño propio o perfboard.** En vez de diseñar una PCB desde cero o pasar a perfboard con soldadura manual, este montaje usa la **PCB de referencia oficial de ESP-HACK**, cuyos archivos Gerber publica el propio autor del firmware en la carpeta `/others` del repositorio original (diseño acreditado a **Teapot174** y **Dripside**). Reutilizar el diseño de referencia ya probado:

- garantiza que el pinout físico coincide exactamente con el mapa de GPIO del firmware (`src/CONFIG.h`), sin riesgo de descuadre entre cableado y firmware,
- ahorra por completo el tiempo de diseño y revisión de la PCB,
- se beneficia del uso previo de ese mismo diseño por la comunidad.

Las placas se pidieron a través de **JLCPCB**, con una llegada estimada de **7 a 10 días hábiles**.

> **Nota sobre la reutilización:** los archivos Gerber no son un diseño propio de este repositorio — pertenecen al proyecto original ESP-HACK. Si los incorporas a tu propio repo en lugar de solo enlazar a la fuente, mantén la atribución original y revisa la licencia del repositorio original antes de redistribuirlos.

## Instalación del firmware

ESP-HACK se compila con [PlatformIO](https://platformio.org/), usando el framework Arduino para la placa `esp32dev`, con dos entornos de compilación seleccionables según tu controlador de OLED:

```ini
[platformio]
default_envs =
    SH1106
    SSD1306

[env]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200
board_build.partitions = partitions_ota.csv

lib_deps =
    adafruit/Adafruit SH110X@^2.1.14
    adafruit/Adafruit SSD1306@^2.5.17
    gyverlibs/GyverButton@^3.8
    crankyoldgit/IRremoteESP8266@^2.9.0
    lsatan/SmartRC-CC1101-Driver-Lib@^3.0.2
    sui77/rc-switch@^2.6.4
    h2zero/NimBLE-Arduino@^2.5.0
    nrf24/RF24@^1.6.1
    paulstoffregen/OneWire@^2.3.8
    olikraus/U8g2_for_Adafruit_GFX@^1.8.0

extra_scripts =
    post:build.py

[env:SH1106]
build_flags =
    -Wl,-z,muldefs
    -D DISPLAY_TYPE=DISPLAY_SH1106

[env:SSD1306]
build_flags =
    -Wl,-z,muldefs
    -D DISPLAY_TYPE=DISPLAY_SSD1306
```

Este montaje usa el entorno **`SH1106`**, que coincide con el módulo OLED de la [Lista de materiales](#lista-de-materiales). El mapeo de pines y la constante de versión del firmware viven ambos en `src/CONFIG.h` — consulta la [Guía de cableado](#guía-de-cableado) para el mapa GPIO completo usado en este montaje.

### Requisitos previos

- [Visual Studio Code](https://code.visualstudio.com/) con la extensión [PlatformIO IDE](https://platformio.org/platformio-ide), **o** el [PlatformIO Core CLI](https://docs.platformio.org/en/latest/core/installation/index.html)
- Un cable USB de datos que conecte la placa ESP32-WROOM-32 a tu ordenador
- El driver USB-to-UART correcto para tu placa (normalmente CP2102 o CH340) instalado en tu sistema operativo

### Pasos

1. **Clona el firmware original.** El repositorio está archivado (solo lectura), así que si vas a hacer cambios haz un fork primero en GitHub y luego clona tu fork (o el original, si solo quieres compilar tal cual):
```bash
   git clone https://github.com/Teapot174/ESP-HACK.git
   cd ESP-HACK
```
2. **Abre el proyecto en PlatformIO.** En VS Code: `File → Open Folder` → selecciona la carpeta `ESP-HACK` clonada. PlatformIO detecta `platformio.ini` automáticamente y resuelve las dependencias (`lib_deps`) en la primera compilación.
3. **(Recomendado) Deshabilita la funcionalidad de jammer.** ESP-HACK incluye un jammer Sub-GHz (`startJamming()` / `stopJamming()` en `src/subghz.cpp`) que pone al CC1101 en transmisión de portadora continua. En este montaje se ha deshabilitado sustituyendo el cuerpo de `startJamming()` por un no-op, de forma que la entrada del menú sigue existiendo pero nunca activa la radio:
```cpp
   void startJamming() {
     Serial.println(F("Jammer disabled in this build"));
     return;
   }
```
   Sustituye el cuerpo original de la función (el bloque que llama a `ELECHOUSE_cc1101.SetTx()` y escribe los registros `0x3E`/`0x35`) por el fragmento anterior. Consulta el [Aviso legal](#aviso-legal) para entender por qué este montaje excluye el jamming activo.
4. **Conecta la placa ESP32** por USB y confirma que se detecta:
```bash
   pio device list
```
5. **Compila el firmware**, indicando el entorno que corresponde a tu display:
```bash
   pio run -e SH1106
```
6. **Flashéalo**, usando el mismo flag de entorno para que PlatformIO aplique automáticamente el esquema de particiones `partitions_ota.csv` correcto:
```bash
   pio run -e SH1106 --target upload
```
7. **Monitoriza la salida serie** para confirmar que arranca correctamente:
```bash
   pio device monitor -b 115200
```
8. **(Opcional) Contenido desde SD.** ESP-HACK puede cargar contenido adicional/actualizaciones desde una tarjeta microSD formateada en FAT32 — consulta la [wiki de ESP-HACK](https://teapot174.github.io) para ver la estructura de carpetas esperada.

> ⚠️ Flashea esto primero en un ESP32 sin montar, antes del ensamblaje final — así confirmas que la placa arranca bien sin mezclar problemas de firmware con problemas de cableado.

Para resolución de problemas y uso de funciones más allá de esta guía de montaje, consulta la documentación original:
- Repositorio: https://github.com/Teapot174/ESP-HACK
- Wiki: https://teapot174.github.io

## Aviso legal

Este proyecto es una guía de construcción de hardware para un dispositivo que ejecuta el firmware de terceros y de código abierto **ESP-HACK**. Se publica estrictamente con fines educativos y de investigación de seguridad autorizada.

Al construir y/o usar este dispositivo, aceptas lo siguiente, que refleja el propio disclaimer del proyecto original:

> "Este firmware está diseñado exclusivamente para fines de investigación y pruebas de hardware. Al usar el firmware, debes cumplir con las leyes de tu región. El creador del firmware no se hace responsable de tus acciones."

Además:

- **Eres el único responsable del uso que le des a este dispositivo.** Utilízalo únicamente contra sistemas, redes y dispositivos RF que sean de tu propiedad o para los que tengas autorización explícita y por escrito.
- **El jamming (interferencia de señal) es ilegal en la mayoría de jurisdicciones**, y el propio autor del firmware original lo señala explícitamente como tal. Cualquier funcionalidad de ESP-HACK en Sub-GHz o NRF24 que constituya jamming está presente en el firmware únicamente con fines de documentación/investigación en laboratorio y **no debe usarse** para interrumpir servicios de radio con licencia, comunicaciones de emergencia, ni ningún equipo de terceros.
- **Las funciones disruptivas de Wi-Fi y Bluetooth** (deautenticación, beacon spam, BLE spam, evil portal, etc.) pueden vulnerar leyes de telecomunicaciones y de uso indebido informático en muchos países, incluso en redes que creas "abandonadas" o "públicas". Confirma que tienes autorización antes de usarlas.
- **Las funciones de emulación/clonado de RFID, iButton o NFC** pueden estar reguladas según tu jurisdicción y el tipo de credencial. No clones ni emules credenciales de acceso para las que no tengas autorización.
- El autor de este repositorio (la documentación de construcción del hardware) **no es el desarrollador de ESP-HACK** y no asume ninguna responsabilidad sobre el uso que terceros hagan del firmware o del dispositivo montado.
- Este proyecto se publica únicamente con fines de investigación y educativos. **El autor no se hace responsable de un mal uso, daños o consecuencias legales derivadas de la construcción o el funcionamiento de este dispositivo.**

Si tienes dudas sobre si un caso de uso concreto es legal en tu país, consulta la normativa local de telecomunicaciones y de uso indebido informático, o a un profesional legal cualificado, antes de proceder.

## Créditos

- **Firmware:** [ESP-HACK](https://github.com/Teapot174/ESP-HACK) de Teapot174, licenciado bajo AGPL-3.0
- **Diseño de la PCB de referencia:** Teapot174 y Dripside — archivos Gerber publicados en la carpeta `/others` del repositorio original
- **Montaje de hardware, documentación de cableado y este repositorio:** [lank-one](https://github.com/lank-one)

