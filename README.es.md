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

🚧 **En construcción** — el hardware y la documentación todavía se están desarrollando.

Un dispositivo DIY multifunción de pentesting basado en el firmware [ESP-HACK](https://github.com/Teapot174/ESP-HACK).

## Estado del proyecto

- [x] Componentes seleccionados y pedidos (BOM)
- [x] Diseño de cableado / pinout documentado
- [ ] Montaje físico en breadboard — en curso, actualmente bloqueado: esperando una segunda breadboard de 830 puntos (la primera se quedó sin pines libres para todo el cableado)
- [ ] Flasheo del firmware (ESP-HACK)
- [ ] Verificación del cableado por módulo (display, CC1101, IR, SD)
- [ ] Carcasa / integración final
- [ ] Documentación completa (BOM, guía de cableado, instalación, disclaimer legal)

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
