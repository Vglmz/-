# 🎬 GUÍA DE ASSETS (Imágenes y Audio)

Documentación completa sobre cómo obtener y preparar assets para tu GameBoy Retro.

## 📷 IMÁGENES

### Requisitos Técnicos

| Propiedad | Especificación |
|-----------|----------------|
| Formato | PNG (recomendado), JPG |
| Resolución mínima | 256x256px |
| Resolución recomendada | 512x512px o 1024x1024px |
| Proporciones | Cuadradas (1:1) |
| Modo color | RGB o RGBA |
| Máx compresión | 5MB por imagen |
| Nombres | `img1.png`, `img2.png`, etc. |
| Ubicación | `assets/images/mundo{N}/` |

### Cantidad Requerida

```
Intro               2 imágenes
Mundo 1             6 imágenes
Mundo 2             7 imágenes
Mundo 3             3 imágenes
Mundo 4 (intro)     2 imágenes
Mundo 5            12 imágenes
Mapa                1 imagen
─────────────────────────────
Total              33 imágenes + 1 mapa
```

### Opciones para Obtener Imágenes

#### Opción 1: Crear con Software (Mejor - Auténtico)

**Aseprite** (Recomendado para pixel art)
- Sitio: aseprite.org
- Costo: $19.99
- Curva aprendizaje: Media
- Resultado: Profesional

Pasos:
```
1. Crear nuevo proyecto 512x512px
2. Dibujar con herramientas pixel
3. File → Export as PNG
4. Nombrar: img1.png
5. Guardar en assets/images/mundo1/
```

**GIMP** (Gratis, alternativa)
- Sitio: gimp.org
- Costo: Gratis
- Curva aprendizaje: Alta
- Resultado: Bueno

**Piskel** (Online, muy fácil)
- Sitio: piskelapp.com
- Costo: Gratis
- Curva aprendizaje: Baja
- Resultado: Bueno
- Ventaja: No instalar, funciona en navegador

#### Opción 2: Generador AI (Rápido - Fácil)

**Midjourney** (Premium)
```
Prompt: "pixel art retro gameboy style 512x512 adventure scene"
- Costo: ~$30 suscripción
- Velocidad: 30 segundos
- Calidad: Muy bien
- Comando: /imagine prompt:[tu descripción]
```

**DALL-E 3** (Chat GPT Plus)
```
Prompt: "pixel art retro game boy 512x512 forest adventure"
- Costo: $20/mes ChatGPT Plus
- Velocidad: 60 segundos
- Calidad: Muy bien
- Acceso: Via chat.openai.com
```

**Stable Diffusion Local** (Gratis, requiere GPU)
```bash
# Instalar StableDiffusion local
# Prompt: "pixel art retro gameboy 512x512"
# Ventaja: Gratis, sin límites
# Desventaja: Necesita GPU, complejidad
```

**Perplexity/Copilot Creator** (Gratis)
- Sitio: copilot.microsoft.com (Designer tool)
- Costo: Gratis
- Velocidad: Rápido
- Prompt: "pixel art retro game boy 512x512"

#### Opción 3: Descargar (Fácil - Legal)

**OpenGameArt.org**\
- Juegos retro pixel art
- Licencia: Creative Commons / GPL
- Búsqueda: "game boy" o "pixel art"
- Verificar permiso de uso

**itch.io**
- Filtro: "pixel art", "gameboy"
- Muchos assets gratuitos
- Verificar licencia del creador

**Sprite Database**
- spriters-resource.com
- Sprites de juegos retros
- Verificar derechos de autor

**Pixabay / Pexels** (Fotos, no pixel art)
- pixabay.com / pexels.com
- Fotos gratuitas bajo licencia
- Convertir a pixel art después

### Paso a Paso: Crear con Piskel

```
1. Abre piskelapp.com
2. "Create a new sprite"
3. Ancho & Alto: 512 (cuadrado)
4. Color palette: selecciona retro
5. Dibuja tu imagen
6. File → Export → PNG
7. Descarga y renombra (img1.png)
8. Coloca en assets/images/intro/
```

### Paso a Paso: Usar AI (Midjourney)

```
1. Abre Discord con Midjourney
2. Escribe en canal #general:
   /imagine prompt: pixel art retro gameboy style 512x512 
   [tu descripción, ej: "forest adventure scene with trees"]
3. Espera 30 segundos
4. Elige la mejor (U1, U2, U3, U4)
5. Click derecha → Save image
6. Renombra y coloca en carpeta correcta
```

### Paso a Paso: Descargar de OpenGameArt

```
1. Abre opengameart.org
2. Búsqueda: "pixel art game boy"
3. Filtra por licencia: CC-BY-SA o CC0
4. Descarga ZIP
5. Extrae archivos PNG
6. Renombra si es necesario
7. Coloca en carpetas correctas
```

### Optimizar Imágenes

**Reducir tamaño sin perder calidad:**

```bash
# Usar ImageMagick (instalado en Linux/Mac)
convert img1.png -quality 85 img1_optimized.png

# O usar online: tinypng.com
# - Sube PNG
# - Descarga comprimido
# - Típicamente 30-50% más pequeño
```

**Redimensionar si es muy grande:**

```bash
# ImageMagick
convert img1.png -resize 512x512 img1_resized.png

# Online: image.online-convert.com
```

---

## 🔊 AUDIO

### Requisitos Técnicos

| Propiedad | Especificación |
|-----------|----------------|
| Formato | MP3 (requerido para iPhone) |
| Bitrate | 128 kbps (suficiente) |
| Duración | Var. (ver más abajo) |
| Muestreo | 44.1kHz mínimo |
| Canales | Estéreo o Mono |
| Máx tamaño | 20MB individual |

### Archivos Necesarios

```
bg.mp3       música de fondo, 30-60 segundos, loopeable
jump.mp3     sonido salto, ~200ms
coin.mp3     sonido recoger, ~300ms
click.mp3    sonido botón, ~100ms
```

### Características por Tipo

| Archivo | Duración | Loop | Estilo | Volumen |
|---------|----------|------|--------|---------|
| `bg.mp3` | 30-60s | ✅ Sí | Chiptune/GameBoy | -6dB |
| `jump.mp3` | 100-200ms | ❌ No | Bip/Beep | Normal |
| `coin.mp3` | 200-400ms | ❌ No | Chime | Normal |
| `click.mp3` | 50-150ms | ❌ No | Click | Bajo |

### Opciones para Obtener Audio

#### Opción 1: Descarga Royalty-Free

**Bensound** (Recomendado para música)
```
Sitio: bensound.com
Buscar: "chiptune", "retro", "gameboy"
Licencia: CC-BY (requiere mención)
Formato: MP3 disponible
Ejemplo: "Sunny Days", "Ukulele"
```

**Pixabay / Pexels** (Efectos de sonido)
```
Sitio: pixabay.com/music o pexels.com/sound
Buscar: "click", "jump", "coin", "beep"
Licencia: Libre
Formato: MP3 disponible
```

**Freesound.org** (Comunidad)
```
Sitio: freesound.org
Buscar: "pixel jump", "button click", "coin"
Licencia: Verificar (hay gratis y de pago)
Download: MP3 directo
Usuarios: Creadores independientes
```

**ZapSplat** (Efectos especializados)
```
Sitio: zapsplat.com
Buscar: "retro", "8-bit", "game"
Licencia: Libre para uso personal
Formato: MP3, WAV
Calidad: Alta
```

#### Opción 2: Generador Online

**sfxr** (Generador retro)
```
Sitio: https://sfxr.me/
Como usar:
1. Click "Coin"
2. Ajusta perillas
3. "Export Wav"
4. Convertir a MP3
Ventaja: Sonidos auténticamente retro
```

**Jsfxr** (Similar, web)
```
Sitio: en.wikipedia.org/wiki/File:Sfxr_demo.ogg
O: chiptone.io (generador visual)
```

#### Opción 3: Crear Propios

**Audacity** (Gratis, potente)
```
1. Descarga: audacityteam.org
2. Genera tonos con oscilador
3. O grabate dando palmadas
4. Export → MP3
```

**GarageBand** (Mac/iOS)
```
1. Abre GarageBand
2. Crea proyecto vacío
3. Usa instrumentos retro
4. Export → MP3
```

**FL Studio / Ableton** (Profesional, pago)
```
Para usuarios experimentados
Costo: $100-200+
Resultado: Máxima calidad
```

### Paso a Paso: Descargar de Bensound

```
1. Abre bensound.com
2. Búsqueda: "chiptune" o "retro"
3. Escucha previa en web
4. Click "Download"
5. Selecciona "Free MP3"
6. Descarga automática
7. Renombra (ej: bg.mp3)
8. Coloca en assets/audio/
```

### Paso a Paso: Descargar de Pixabay

```
1. Abre pixabay.com/sound
2. Búsqueda: "button click" o "coin"
3. Escucha preview
4. Click descarga
5. Selecciona MP3
6. Descarga
7. Coloca en assets/audio/
```

### Paso a Paso: Usar sfxr

```
1. Abre https://sfxr.me/
2. Elige tipo: "Coin", "Jump", "Select", etc.
3. Modifica con perillas (pitch, duration)
4. Click "Download WAV"
5. Abre descarga en Audacity
6. File → Export → MP3
7. Coloca en assets/audio/
```

### Convertir Audio a MP3

**Opción 1: Audacity (Gratis)**
```
1. Abre el archivo en Audacity
2. File → Export → Export as MP3
3. Selecciona calidad pregset: "Insane" (320kbps)
4. Exporta
```

**Opción 2: ffmpeg (CLI)**
```bash
# Mac/Linux
ffmpeg -i archivo.wav -q:a 5 archivo.mp3

# Windows (con ffmpeg instalado)
ffmpeg.exe -i archivo.wav -q:a 5 archivo.mp3
```

**Opción 3: Online (sin instalar)**
```
Sitio: media.io o online-convert.com
1. Sube archivo
2. Selecciona formato MP3
3. Descarga resultado
```

### Normalizar Volumen

**Audacity (visual)**
```
1. Abre archivo
2. Select → All (Ctrl+A)
3. Analyze → Loudness Normalization
4. Target: -3dB to -6dB
5. Exporta
```

**SoX CLI (preciso)**
```bash
sox archivo.mp3 -n stat

# Luego normaliza si es necesario
sox archivo.mp3 archivo_norm.mp3 norm
```

---

## 📦 ESTRUCTURA FINAL

Después de obtener todos los assets, debería verse así:

```
assets/
├── images/
│   ├── intro/
│   │   ├── img1.png   ✅ (256-512px)
│   │   └── img2.png   ✅
│   ├── mundo1/
│   │   ├── img1.png   ✅
│   │   ├── img2.png   ✅
│   │   ├── img3.png   ✅
│   │   ├── img4.png   ✅
│   │   ├── img5.png   ✅
│   │   └── img6.png   ✅
│   ├── mundo2/        (7 imágenes)
│   ├── mundo3/        (3 imágenes)
│   ├── mundo4/
│   │   ├── intro1.png ✅
│   │   └── intro2.png ✅
│   ├── mundo5/        (12 imágenes)
│   └── map.png        ✅
└── audio/
    ├── bg.mp3         ✅ (30-60s, MP3)
    ├── jump.mp3       ✅ (100-200ms, MP3)
    ├── coin.mp3       ✅ (200-400ms, MP3)
    └── click.mp3      ✅ (50-150ms, MP3)
```

---

## ✅ Checklist Final

### Imágenes
- [ ] 33 imágenes + mapa descargadas/creadas
- [ ] Todas en formato PNG
- [ ] Resolucion mínimo 256x256px
- [ ] Nombres exactos (img1.png, img2.png, etc.)
- [ ] Colocadas en carpetas correctas
- [ ] Sin espacios en nombres de archivos

### Audio
- [ ] 4 archivos de audio obtenidos
- [ ] Todos en formato MP3
- [ ] Música de 30-60 segundos
- [ ] Efectos son cortos (100-400ms)
- [ ] Volúmenes normalizados
- [ ] Archivos funcionan en navegador
- [ ] Colocados en assets/audio/

### Testing
- [ ] Prueba en navegador desktop
- [ ] Prueba en mobile (iPhone/Android)
- [ ] Verifica que carguen todas las imágenes
- [ ] Verifica que suene la música
- [ ] Verifica que funcionen los efectos

---

## 🎓 Recursos Recomendados

| Recurso | URL | Tipo |
|---------|-----|------|
| Piskel (dibujar) | piskelapp.com | Herramienta |
| Bensound (música) | bensound.com | Audio |
| Pixabay (efectos) | pixabay.com/sound | Audio |
| Freesound (efectos) | freesound.org | Audio |
| sfxr (generar) | sfxr.me | Generador |
| tinypng (optimizar) | tinypng.com | Herramienta |
| OnlineConvert | online-convert.com | Convertidor |
| Aseprite | aseprite.org | Herramienta (pago) |
| GIMP | gimp.org | Herramienta (gratis) |

---

**Última actualización:** 2026-04-03  
**Duración estimada:** 2-6 horas según opciones elegidas
