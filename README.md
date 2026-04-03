# GameBoy Retro - Aventura Interactiva

Una web interactiva estilo GameBoy 100% funcional, optimizada para iPhone 13, con estética pixel art puro.

## Características

✅ **Diseño Mobile-First** - Optimizado específicamente para iPhone 13  
✅ **GameBoy Retro** - Estética pura pixel art con efecto de pantalla GameBoy  
✅ **Sistema de Mundos** - 5 mundos progresivos con desbloqueo dinámico  
✅ **Minijuego con Canvas** - Side-scroller con física y recolección de íconos  
✅ **Audio Completo** - Música de fondo + efectos de sonido  
✅ **Single Page Application** - Todo en una sola página sin recargas  
✅ **Controles Táctiles** - Optimizados para touch en dispositivos móviles  
✅ **Responsive** - Funciona en cualquier dispositivo sin scroll horizontal  

## Estructura del Proyecto

```
/
├── index.html              # Estructura HTML principal
├── styles.css              # Estilos pixel art responsive
├── main.js                 # Lógica completa del juego
├── README.md              # Este archivo
└── assets/
    ├── images/
    │   ├── intro/         # 2 imágenes de introducción
    │   ├── mundo1/        # 6 imágenes
    │   ├── mundo2/        # 7 imágenes
    │   ├── mundo3/        # 3 imágenes
    │   ├── mundo4/        # 2 imágenes intro + assets del minijuego
    │   ├── mundo5/        # 12 imágenes
    │   └── map.png        # Mapa del mundo
    └── audio/
        ├── bg.mp3         # Música de fondo (loop)
        ├── jump.mp3       # Sonido de salto
        ├── coin.mp3       # Sonido al recoger corazón
        └── click.mp3      # Sonido de botón presionado
```

## Instalación & Ejecución

### Local (Desktop)

1. **Clonar o descargar este repositorio**
   ```bash
   cd /ruta/del/proyecto
   ```

2. **Servir con Live Server** (Visual Studio Code)
   - Instalar extensión "Live Server"
   - Click derecho en `index.html` → "Open with Live Server"

3. **O con Python**
   ```bash
   python -m http.server 8000
   # Acceder a http://localhost:8000
   ```

### En iPhone 13

1. **Subir a un servidor web** o usar un servicio como:
   - GitHub Pages
   - Vercel
   - Netlify
   - AWS S3

2. **Abrir en Safari** (permite agregar como app)

3. **Agregar como app**
   - Presionar el botón compartir
   - Seleccionar "Añadir a pantalla de inicio"
   - Abrirá como app fullscreen

## Customización

### 📁 Cambiar Imágenes

Las imágenes deben estar en formato PNG y ser cuadradas (recomendado 256x256px mínimo):

1. **Intro** (2 imágenes)
   ```
   assets/images/intro/img1.png
   assets/images/intro/img2.png
   ```

2. **Mundo 1** (6 imágenes)
   ```
   assets/images/mundo1/img1.png
   assets/images/mundo1/img2.png
   ... hasta img6.png
   ```

3. **Mundo 2** (7 imágenes)
   ```
   assets/images/mundo2/img1.png
   ... hasta img7.png
   ```

4. **Mundo 3** (3 imágenes)
   ```
   assets/images/mundo3/img1.png
   ... hasta img3.png
   ```

5. **Mundo 4 Intro** (2 imágenes)
   ```
   assets/images/mundo4/intro1.png
   assets/images/mundo4/intro2.png
   ```

6. **Mundo 5** (12 imágenes)
   ```
   assets/images/mundo5/img1.png
   ... hasta img12.png
   ```

7. **Mapa**
   ```
   assets/images/map.png
   ```

### 🎵 Cambiar Audio

1. **Música de fondo** (debe ser MP3)
   ```
   assets/audio/bg.mp3
   ```

2. **Efectos de sonido**
   ```
   assets/audio/jump.mp3    # Sonido de salto (minijuego)
   assets/audio/coin.mp3    # Sonido al recoger corazón
   assets/audio/click.mp3   # Sonido de botón presionado
   ```

### 💌 Cambiar Texto Final

Editar el archivo `main.js`, buscar la función `showCard()` (alrededor de línea 480):

```javascript
function showCard() {
    const cardContent = `Tu texto aquí
puede ser
multilínea`;
    
    DOM.cardText.textContent = cardContent;
    DOM.cardModal.style.display = 'flex';
}
```

### 🎮 Cambiar URL de Spotify (Mundo 2)

Editar el archivo `main.js`, buscar `handleBButtonPress()` en Mundo 2. Actualmente simplemente presiona B, pero puedes agregar:

```javascript
// En handleBButtonPress cuando state === MUNDO2
window.open("https://open.spotify.com/tu-playlist", "_blank");
```

### 🎮 Ajustar Minijuego

En `main.js`, objeto `minigame`:

```javascript
// Modificar plataformas
platforms: [
    { x: 0, y: 135, width: 160, height: 10 },  // x, y, width, height
    { x: 30, y: 110, width: 50, height: 8 },
    // ... agregar más plataformas
],

// Modificar posición de corazones
hearts: [
    { x: 45, y: 95, collected: false },  // x, y
    // ... más corazones
],

// Ajustar físicas
gravity: 0.3,                    // Mayor = cae más rápido
jump: () => { velocityY = -6; } // Mayor (negativo) = salta más alto
```

## Flujo del Juego

```
INICIO
  ↓
Presiona START
  ↓ (música comienza)
INTRO (2 imágenes)
  A→ avanzar, B→ retroceder
  ↓
MAPA
  (Selector de mundos)
  ↓
MUNDO 1 (6 imágenes) → Desbloquea Mundo 2
  ↓
MUNDO 2 (7 imágenes) → Desbloquea Mundo 3
  ↓
MUNDO 3 (3 imágenes) → Desbloquea Mundo 4
  ↓
MUNDO 4 INTRO (2 imágenes)
  ↓
MINIJUEGO (Canvas)
  - Recoger 5 corazones
  - Moverse: ⬅️➡️ (hold)
  - Saltar: A
  ↓ (Al completar)
Desbloquea Mundo 5
  ↓
MUNDO 5 (12 imágenes)
  ↓
CARTA FINAL
  ↓
Botón REINICIAR

```

## Controles

### En Inicio
- **START** - Iniciar juego y música

### En Mundos (Intro, 1-3, 5)
- **A** - Avanzar imagen
- **B** - Retroceder imagen

### En Minijuego (Mundo 4)
- **⬅️ Izquierda** - Moverse izquierda (hold)
- **➡️ Derecha** - Moverse derecha (hold)
- **A (rosa)** - Saltar
- **B (amarillo)** - No se usa en minijuego

## Compatibilidad

✅ **iOS Safari** - iPhone 13, iPad, etc.  
✅ **Chrome Android** - Dispositivos Android modernos  
✅ **Desktop** - Chrome, Firefox, Safari, Edge  
✅ **Resoluciones** - Diseño totalmente responsive  

## States del Sistema Interno

```javascript
INIT              // Pantalla inicial "presiona start..."
INTRO             // Secuencia introductoria (2 imágenes)
MAP               // Mapa con selector de mundos
MUNDO1 - MUNDO5   // Secuencias de imágenes
MUNDO4_INTRO      // Intro del minijuego (2 imágenes)
MUNDO4_JUEGO      // Minijuego canvas
CARTA_FINAL       // Pantalla final con carta
```

## Sonidos

| Sonido | Momento |
|--------|---------|
| `bg.mp3` | Música de fondo (loop infinito) |
| `click.mp3` | Al presionar cualquier botón |
| `jump.mp3` | Al saltar en minijuego |
| `coin.mp3` | Al recoger corazón |

## Tips para iPhone 13

1. **Agregar como app** da experiencia fullscreen completa
2. **Orientación portrait** es la recomendada (la app está optimizada)
3. **Safari** es el navegador más compatible
4. **Sin scroll** - la pantalla ocupa todo el viewport
5. **Botones grandes** - fáciles de tocar con un dedo

## Troubleshooting

### El audio no suena
- iPhone requiere interacción del usuario primero
- Presiona START para activar música
- Verifica que los archivos MP3 existan en `/assets/audio/`

### Las imágenes no cargan
- Verifica que estén en las rutas correctas
- Nombres: `img1.png`, `img2.png`, etc. (lowercase)
- Para intro: `intro1.png`, `intro2.png`
- Para mundo4: `intro1.png`, `intro2.png`

### El layout no se ve bien
- Limpia caché del navegador
- Prueba en modo incógnito
- En iPhone: Settings → Safari → Clear History and Website Data

### Minijuego lag
- Reduce la cantidad de plataformas
- Reduce efectos visuales
- Cierra otras pestañas/apps

## Créditos

Desarrollado como una aventura interactiva retro inspirada en GameBoy.

---

**¡Que disfrutes el juego!** 🎮
