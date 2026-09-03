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

🚧 **En construcción** — el hardware y la documentación todavía se están desarrollando.

Un dispositivo DIY multifunción de pentesting basado en el firmware [ESP-HACK](https://github.com/Teapot174/ESP-HACK).

## Estado del proyecto

- [x] Componentes seleccionados y pedidos (BOM)
- [x] Diseño de cableado / pinout documentado
- [x] Montaje físico en breadboard — completado (dos breadboards de 830 puntos con raíles interiores plegados)
- [x] Flasheo del firmware (ESP-HACK) — exitoso, entorno SH1106, jammers deshabilitados en subghz.cpp
- [ ] Verificación del cableado por módulo — OLED confirmado funcionando (conexión H-H directa a pines G21/G22 del ESP32)
- [ ] Configuración tarjeta SD — pendiente (lector USB microSD en camino)
- [ ] Cableado restante (CC1101, botones, IR-TX, IR-RX)
- [ ] Carcasa / integración final
- [ ] Documentación completa (guía de cableado, fotos, disclaimer)

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

**Total: ≈ 62,32€**

> Algunas cantidades (breadboards, botones, displays OLED, packs de cables) superan lo que necesita una sola unidad — es intencional, para tener repuestos de cara a montar otro dispositivo.

## Guía de cableado

🚧 *Próximamente — esta sección se completará cuando termine el montaje físico. Consulta [Estado del proyecto](#estado-del-proyecto) para ver el bloqueante actual.*

## Instalación del firmware

ESP-HACK se compila con [PlatformIO](https://platformio.org/), usando el framework Arduino para la placa `esp32dev`. La configuración `platformio.ini` del repositorio original es:

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
3. **Conecta la placa ESP32** por USB y confirma que se detecta:
```bash
   pio device list
```
4. **Compila el firmware:**
```bash
   pio run
```
5. **Flashéalo.** El proyecto incluye un `esptool.exe` propio y una tabla de particiones `huge_app.csv` (necesaria porque el conjunto de funciones de ESP-HACK supera el tamaño de partición por defecto). Usar el target de subida de PlatformIO aplica automáticamente el esquema de particiones correcto:
```bash
   pio run --target upload
```
6. **Monitoriza la salida serie** para confirmar que arranca correctamente:
```bash
   pio device monitor -b 115200
```
7. **(Opcional) Contenido desde SD.** ESP-HACK puede cargar contenido adicional/actualizaciones desde una tarjeta microSD formateada en FAT32 — consulta la [wiki de ESP-HACK](https://teapot174.github.io) para ver la estructura de carpetas esperada.

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
