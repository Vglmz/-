# 📋 QUICK REFERENCE - CHEAT SHEET

Acceso rápido a los cambios más comunes. Usa Ctrl+F para buscar dentro de los archivos.

## 🎯 Búsquedas Rápidas en Archivos

### En `main.js`:

| Buscar | Línea aprox | Hacer |
|--------|------------|-------|
| `showCard()` | 480 | Cambiar texto final |
| `platforms: [` | 350 | Agregar/quitar plataformas |
| `hearts: [` | 380 | Mover/agregar corazones |
| `gravity = ` | 330 | Cambiar dificultad |
| `velocity = ` | 370 | Cambiar potencia de salto |
| `GAME_STATE` | 20 | Variables del juego |
| `handleButtonPress` | 150 | Qué pasa en cada botón |

### En `styles.css`:

| Buscar | Línea aprox | Hacer |
|--------|------------|-------|
| `.btn-start` | 200 | Color botón START |
| `.btn-a` | 220 | Color botón A |
| `.btn-b` | 230 | Color botón B |
| `width: 6vh` | 210 | Tamaño botones A/B |
| `.screen {` | 65 | Color fondo pantalla |
| `.gameboy-body` | 40 | Color GameBoy |

## 🔧 Cambios Express

### Cambiar Texto Final (2 líneas)

```javascript
// main.js - línea ~480
const cardContent = `Tu texto aquí\nPuede ocupar\nvarias líneas`;
```

### Cambiar Color Botón START (1 línea)

```css
/* styles.css - línea ~205 */
background: linear-gradient(135deg, #FF0000 0%, #CC0000 100%);
/* Cambiar #FF0000 y #CC0000 por colores */
```

### Cambiar Velocidad Minijuego (3 líneas)

```javascript
// main.js - línea ~330
gravity: 0.2,           /* Menor = más lento */
player.velocityY = -8;  /* Mayor = salta más */
this.player.x -= 3;     /* Mayor = se mueve más rápido */
```

### Cambiar Cantidad Imágenes Mundo (1 línea)

```javascript
// main.js - línea ~285
[GAME_CONFIG.states.MUNDO1]: 8,  /* Cambiar 6 → 8 */
```

## 🎨 Paleta de Colores Retro GameBoy

```css
/* Rojos */
#ee0000  #cc0000  #880000

/* Verdes */
#00dd00  #00aa00  #006600

/* Azules */
#0066ff  #0044cc  #003388

/* Amarillos */
#ffdd00  #ffaa00  #cc8800

/* Grises (GameBoy)*/
#8B8680  #A0938E  #5C5C5C
```

## 🎮 Atajo Teclado (Desktop Testing)

| Tecla | Acción |
|-------|--------|
| Enter | START |
| A | Botón A |
| B | Botón B |
| ← | Izquierda |
| → | Derecha |
| Espacio | Saltar |

## 📂 Rutas de Archivos

```
Intro 1ª imagen:      assets/images/intro/img1.png
Mundo 1 imagen 6:     assets/images/mundo1/img6.png
Mundo 4 intro 1:      assets/images/mundo4/intro1.png
Mundo 5 última:       assets/images/mundo5/img12.png
Mapa:                 assets/images/map.png
Música:               assets/audio/bg.mp3
```

## ⚡ Estados del Juego

```
INIT              Pantalla "presiona start..."
INTRO             2 imágenes introducción
MAP               Mapa mundo
MUNDO1-5          Secuencias de imágenes
MUNDO4_INTRO      2 imágenes antes minijuego
MUNDO4_JUEGO      Canvas minijuego
CARTA_FINAL       Pantalla final
```

## 🔊 Control de Audio

```javascript
// Volumen música (0 = silencio, 1 = max)
this.bgMusic.volume = 0.4;

// Volumen efectos
sound.volume = 0.5;

// Musicópause/play
this.bgMusic.play();
this.bgMusic.pause();
```

## 📱 Breakpoints Responsive

```css
/* iPhone 13 portrait - la optimización principal */
/* 390px ancho, 844px alto */

/* iPhone landscape */
@media (orientation: landscape)

/* iPad */
@media (min-width: 768px)
```

## 🎯 Puntos de Entrada Principales

| Función | Ubicación | Propósito |
|---------|-----------|----------|
| `setState()` | main.js:100 | Cambiar pantalla |
| `handleButtonPress()` | main.js:150 | Procesar botones |
| `loadImage()` | main.js:60 | Mostrar imagen |
| `showText()` | main.js:75 | Mostrar texto |
| `minigame.run()` | main.js:350 | Loop minijuego |

## 🐛 Debugging Rápido

```javascript
// Abre en consola (F12):
GAME_STATE              // Ver estado actual
GAME_STATE.currentState // Pantalla actual
DOM.screenImage.src     // Ruta imagen que se intenta cargar
AUDIO.bgMusic.volume    // Volumen música
minigame.player         // Posición del jugador
```

## 📊 Valores por Defecto

```javascript
// Minijuego
gravity: 0.3
velocityY salto: -6
velocidad movimiento: 2px por frame
plataformas: 5
corazones: 5 (requeridos para ganar)

// Audio
volumen música: 0.4
volumen efectos: 0.5

// UI
tamaño GameBoy: 90vw max
tamaño botones A/B: 6vh
tamaño botón START: 70% width
```

## 🔗 Links Útiles

| Recurso | URL |
|---------|-----|
| Crear imágenes | piskelapp.com |
| Música retro | bensound.com |
| Sonidos gratis | freesound.org |
| Colores | coolors.co |
| Convertir audio | ffmpeg.org |

## ✅ Testing Checklist Rápido

```
□ START inicia música
□ A avanza, B retrocede
□ Final mundo desbloquea siguiente
□ Minijuego aparece después mundo 4 intro
□ Se pueden recoger 5 corazones
□ Final muestra carta
□ REINICIAR comienza de nuevo
□ Without horizontal scroll
□ Botones responden al toque
```

## 🚨 Errores Comunes | Solución

| Error | Solución |
|-------|----------|
| Audio no suena | START desencadena audio (requiere interacción) |
| Imágenes no cargan | Verifica ruta y nombre exacto (case-sensitive) |
| Minijuego lagea | Reduce cantidad de plataformas |
| Botones sin respuesta | Abre consola (F12) y revisa GAME_STATE |
| Layout roto | Limpia caché, prueba modo incógnito |

## 💾 Save/Load (No implementado, pero posible)

```javascript
// Ejemplo para agregar (NO incluido actualmente):
localStorage.setItem('worldsUnlocked', JSON.stringify(GAME_STATE.worldsUnlocked));
GAME_STATE.worldsUnlocked = JSON.parse(localStorage.getItem('worldsUnlocked'));
```

---

**Imprime esta página o guárdala como referencia.** 📋
