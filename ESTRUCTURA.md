<!-- ESTRUCTURA VISUAL DEL PROYECTO -->

# 📦 ESTRUCTURA DEL PROYECTO GAMEBOY RETRO

Aquí está la estructura completa del proyecto que hemos creado para ti.

## 🗂️ Árbol de Carpetas

```
gameboy-retro/
│
├── 📄 index.html                    # Página principal (estructura HTML)
├── 🎨 styles.css                   # Todos los estilos pixel art
├── 🎮 main.js                      # Lógica completa del juego
│
├── 📖 README.md                     # Documentación completa
├── 🚀 SETUP.md                      # Guía de configuración paso a paso
├── 🧪 TESTING.md                    # Checklist de testing
├── 🔧 MODIFICACIONES.md             # Referencia de cambios rápidos
├── 🎨 placeholder-generator.html    # Generador de placeholders (testing)
│
├── 🔒 .gitignore                    # Archivos a ignorar en git
│
└── 📁 assets/
    │
    ├── 🖼️ images/
    │   ├── intro/
    │   │   ├── img1.png
    │   │   └── img2.png
    │   ├── mundo1/
    │   │   ├── img1.png
    │   │   ├── img2.png
    │   │   ├── img3.png
    │   │   ├── img4.png
    │   │   ├── img5.png
    │   │   └── img6.png
    │   ├── mundo2/
    │   │   ├── img1.png
    │   │   ├── img2.png
    │   │   ├── img3.png
    │   │   ├── img4.png
    │   │   ├── img5.png
    │   │   ├── img6.png
    │   │   └── img7.png
    │   ├── mundo3/
    │   │   ├── img1.png
    │   │   ├── img2.png
    │   │   └── img3.png
    │   ├── mundo4/
    │   │   ├── intro1.png
    │   │   └── intro2.png
    │   ├── mundo5/
    │   │   ├── img1.png
    │   │   ├── img2.png
    │   │   ├── img3.png
    │   │   ├── img4.png
    │   │   ├── img5.png
    │   │   ├── img6.png
    │   │   ├── img7.png
    │   │   ├── img8.png
    │   │   ├── img9.png
    │   │   ├── img10.png
    │   │   ├── img11.png
    │   │   └── img12.png
    │   └── map.png                  # Mapa interactivo
    │
    └── 🔊 audio/
        ├── bg.mp3                   # Música de fondo (loop)
        ├── jump.mp3                 # Sonido de salto
        ├── coin.mp3                 # Sonido de recoger corazón
        └── click.mp3                # Sonido de botón presionado
```

## 📊 Resumen de Archivos

| Archivo | Tipo | Tamaño | Descripción |
|---------|------|--------|-------------|
| index.html | HTML | ~4 KB | Estructura de la página |
| styles.css | CSS | ~12 KB | Estilos pixel art responsive |
| main.js | JavaScript | ~25 KB | Lógica completa del juego |
| README.md | Markdown | ~8 KB | Documentación principal |
| SETUP.md | Markdown | ~6 KB | Guía de configuración |
| TESTING.md | Markdown | ~8 KB | Checklist de testing |
| MODIFICACIONES.md | Markdown | ~10 KB | Referencia rápida |
| placeholder-generator.html | HTML | ~5 KB | Herramienta de testing |

**Total código:** ~68 KB (sin contar assets)

## 🎮 Información del Juego

### Estados del Sistema
```
INIT ───→ INTRO ───→ MAP ──→ MUNDO 1
                      │
                      ├─→ MUNDO 2
                      ├─→ MUNDO 3
                      ├─→ MUNDO 4 INTRO ───→ MUNDO 4 JUEGO
                      └─→ MUNDO 5 ───→ CARTA FINAL ───→ REINICIO
```

### Imágenes Requeridas
- **Intro:** 2 imágenes
- **Mundo 1:** 6 imágenes
- **Mundo 2:** 7 imágenes
- **Mundo 3:** 3 imágenes
- **Mundo 4:** 2 imágenes intro
- **Mundo 5:** 12 imágenes
- **Mapa:** 1 imagen
- **Total:** 33 imágenes + 1 mapa

### Audio Requerido
- **Música de fondo:** 30-60 segundos, MP3 comprimido
- **Efectos:** 4 sonidos cortos (0.1-0.5 segundos cada uno)

## 🔑 Características Implementadas

✅ **HTML Limpio**
- Estructura semántica
- Compatible con Safari iOS
- Viewport configurado para mobile
- Soporte para notch de iPhone

✅ **CSS Responsive**
- Mobile-first design
- Unidades viewport relativas (vh, vw)
- Sin scroll horizontal
- Efectos pixel art
- Transiciones fluidas

✅ **JavaScript Funcional**
- Sistema completo de estados
- Gestión de audio compatible con iPhone
- Canvas para minijuego
- Física simple (gravedad, saltos)
- Touch events optimizados

✅ **Interactividad**
- Botones táctiles funcionales
- Hold para movimiento continuo
- Retroalimentación visual
- Efectos de sonido
- Transiciones de pantalla

✅ **Minijuego**
- Gráficos con canvas
- Físicas simples
- Colisión con plataformas
- Recolección de objetos
- Reinicio al caer

## 🚀 Pasos Siguientes (Checklist)

### Paso 1: Obtener Imágenes
- [ ] Crear o descargar 33 imágenes pixel art
- [ ] Guardar como PNG en rutas correctas
- [ ] Nombres exactos: img1.png, img2.png, etc.

### Paso 2: Obtener Audio
- [ ] Obtener archivo de música de fondo
- [ ] Convertir a MP3 si falta
- [ ] Reducir volumen a normalizado
- [ ] Obtener 4 efectos de sonido
- [ ] Guardar en assets/audio/

### Paso 3: Personalizar
- [ ] Cambiar texto de carta final
- [ ] Agregar URL de Spotify (opcional)
- [ ] Ajustar colores si se desea
- [ ] Probar en iPhone

### Paso 4: Desplegar
- [ ] Subirlo a GitHub Pages o Vercel
- [ ] Probar en múltiples dispositivos
- [ ] Optimizar performance si es necesario
- [ ] ¡Compartir con amigos!

## 💡 Tips de Desarrollo

### Para Testing Rápido
1. Usa `placeholder-generator.html` para crear placeholders
2. Prueba la mecánica del juego sin imágenes reales
3. Valida que todo funcione antes de agregar assets finales

### Para Personalización
1. Usa `MODIFICACIONES.md` como referencia rápida
2. No necesitas entender todo el código
3. Hay comentarios claros en cada sección importante

### Para Debugging
1. Abre la consola (F12 en desktop, Inspector de Safari en iPhone)
2. Verifica los estados con `console.log(GAME_STATE)`
3. Busca errores de carga de archivos
4. Prueba audio manualmente en inspección

## 🌐 Compatibilidad

| Dispositivo | Navegador | Estado |
|------------|-----------|--------|
| iPhone 13 | Safari | ✅ Recomendado |
| iPhone 12+ | Safari | ✅ Compatible |
| iPad | Safari | ✅ Compatible |
| Android | Chrome | ✅ Compatible |
| Desktop | Chrome | ✅ Compatible |
| Desktop | Firefox | ✅ Compatible |
| Desktop | Safari | ✅ Compatible |

## 📈 Tamaño Final (Estimado)

```
Código HTML/CSS/JS:        ~70 KB
Imágenes (33x):            ~20-50 MB (depende resolución)
Audio (4 archivos):        ~5-15 MB (depende calidad)
─────────────────────────────────
Total:                      ~25-65 MB
```

*Nota: Las imágenes y audio son los archivos más pesados. Optimiza su compresión.*

## 🎓 Recursos Útiles

### Para Crear Imágenes Pixel Art
- Aseprite: aseprite.org (pago)
- GIMP: gimp.org (gratis)
- Piskel: piskelapp.com (online, gratis)
- Krita: krita.org (gratis)

### Para Audio
- Bensound.com: royalty-free music
- Pixabay.com: sounds gratuitos
- Freesound.org: comunidad de soundscapes
- sfxr: generador retro de sonidos

### Para Conversión de Formatos
- ffmpeg: potente herramienta CLI
- Audacity: editor de audio (gratis)
- Online-convert.com: conversión web

### Para Generar Colores
- Coolors.co: paletas de colores
- Lospec.com: paletas retro pixeladas

## 🔗 Estructura de URLs de Archivos

Los archivos se referencian automáticamente usando estas rutas:

```
Imágenes:
- Intro:       assets/images/intro/img1.png
- Mundo 1-5:   assets/images/mundo{N}/img{X}.png
- Mundo 4:     assets/images/mundo4/intro{X}.png
- Mapa:        assets/images/map.png

Audio:
- Fondo:       assets/audio/bg.mp3
- Salto:       assets/audio/jump.mp3
- Moneda:      assets/audio/coin.mp3
- Click:       assets/audio/click.mp3
```

No necesitas cambiar estas rutas si sigues la estructura exacta.

---

## ✨ ¿Todo Listo?

1. **Revisa la estructura:** Verifica que todos los archivos existan
2. **Lee README.md:** Entiende cómo funciona todo
3. **Sigue SETUP.md:** Configuración paso a paso
4. **Usa TESTING.md:** Valida antes de lanzar
5. **Consulta MODIFICACIONES.md:** Para cambios personalizados

## 🎉 ¡Tu proyecto GameBoy Retro está listo!

Próximo paso: Obtén las imágenes y sonidos, ¡y empieza a jugar! 🎮

---

**Última actualización:** 2026-04-03  
**Versión:** 1.0 Complete
