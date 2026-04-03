# Guía Rápida de Configuración

Sigue estos pasos para que el proyecto esté listo funcionalmente.

## 1. Obtener Imágenes Pixel Art

Crea imágenes PNG cuadradas (256x256px o 512x512px) para cada sección:

### Opción A: Crear tu propias imágenes
- Adobe Photoshop
- GIMP (gratis)
- Aseprite
- Piskel (en línea y gratis: piskelapp.com)

### Opción B: Usar generadas con IA
- Midjourney: "pixel art retro gameboy style 256x256"
- DALL-E: mismo prompt
- Stable Diffusion local

### Opción C: Encontrar online
- OpenGameArt.org
- itch.io (filtrar pixel art)
- Sprite databases retro

## 2. Colocar Imágenes

Una vez tengas las imágenes PNG, colócalas aquí:

```
assets/images/
├── intro/
│   ├── img1.png
│   └── img2.png
├── mundo1/
│   ├── img1.png
│   ├── img2.png
│   ├── img3.png
│   ├── img4.png
│   ├── img5.png
│   └── img6.png
├── mundo2/
│   ├── img1.png through img7.png
├── mundo3/
│   ├── img1.png through img3.png
├── mundo4/
│   ├── intro1.png
│   └── intro2.png
├── mundo5/
│   ├── img1.png through img12.png
└── map.png
```

## 3. Obtener Audios

### Música de fondo (45-60 segundos recomendado)
- Royalty-free: bensound.com, pixabay.com
- Buscar: "chiptune loop", "gameboy music", "pixel art background"
- Formato: MP3
- Volumen: normalizar a -3dB

### Efectos de sonido
- sfxr.wav (generador online)
- freesound.org
- zapsplat.com
- Formato: MP3, muy cortos (0.1-0.5 segundos)

### Para iPhone, preferiblemente:
- MP3 comprimido a 128kbps
- Duración total < 2MB

## 4. Colocar Audios

```
assets/audio/
├── bg.mp3          # 30-60 segundos, loopeable
├── jump.mp3        # ~0.2 segundos
├── coin.mp3        # ~0.3 segundos
└── click.mp3       # ~0.1 segundos
```

## 5. Personalizar Texto Final

Editar `main.js`, línea ~480:

```javascript
function showCard() {
    const cardContent = `
Gracias por jugar
esta aventura retro

Espero te haya
gustado el viaje`;
    
    DOM.cardText.textContent = cardContent;
    DOM.cardModal.style.display = 'flex';
}
```

## 6. Agregar URL de Spotify (Mundo 2)

Editar `main.js`, en la función `handleBButtonPress()`:

```javascript
// Buscar donde dice MUNDO2
// Descomentar o agregar:
// window.open("https://open.spotify.com/playlist/tuPlaylist", "_blank");
```

## 7. Probar Localmente

### Opción 1: Live Server (VS Code)
1. Instalar extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"
3. Se abre automáticamente en http://localhost:5500

### Opción 2: Python
```bash
cd /ruta/del/proyecto
python -m http.server 8000
# Abrir http://localhost:8000
```

### Opción 3: Node
```bash
npm install -g http-server
http-server
```

## 8. Probar en iPhone 13

### Método 1: Local Network (recomendado)
1. Compartir Wi-Fi con iPhone
2. En la computadora, obtener IP: `ipconfig` (Windows) o `ifconfig` (Mac/Linux)
3. En iPhone Safari: `http://192.168.x.x:5500` (o tu puerto)

### Método 2: Servicio web
1. Subir a GitHub Pages, Vercel, o Netlify (gratis)
2. Acceder por URL pública en Safari del iPhone

### Método 3: Tunnel
```bash
# Usar ngrok para exponer localhost
ngrok http 5500
# Usar URL generada en iPhone
```

## 9. Agregar como App en iPhone

Una vez en Safari:
1. Presionar botón compartir (cuadrado con flecha)
2. Seleccionar "Añadir a pantalla de inicio"
3. Nombrar la app: "GameBoy Retro"
4. Presionar "Añadir"

Ahora aparece como app nativa con icono en pantalla de inicio.

## 10. Validar Todo Funciona

Checklist final:

- [ ] Imágenes cargan en cada pantalla
- [ ] Audio de fondo comienza al presionar START
- [ ] Botones A y B avanzan/retroceden
- [ ] Cada mundo desbloquea el siguiente
- [ ] Minijuego aparece después de Mundo 4
- [ ] Se pueden recoger los 5 corazones en minijuego
- [ ] Pantalla final muestra tu texto personalizado
- [ ] Botón REINICIAR vuelve al inicio
- [ ] Todo sin scroll horizontal
- [ ] Botones táctiles responden bien

## Troubleshooting rápido

**El audio no suena en iPhone:**
- Los archivos MP3 deben ser válidos (no WAV, no OGG)
- Convertir con ffmpeg: `ffmpeg -i archivo.wav -q:a 5 archivo.mp3`

**Las imágenes se ven pixeladas:**
- ¡Eso es correcto! Es el efecto pixel art
- Asegurarse de usar `image-rendering: pixelated` en CSS

**El minijuego lag:**
- Reducir cantidad de plataformas en `main.js`
- Simplificar efectos visuales

**Mapa no aparece:**
- Asegurarse que `map.png` existe en `assets/images/`
- Con exactamente ese nombre

---

¡Listo! Ahora ejecuta el proyecto y diviértete. 🎮
