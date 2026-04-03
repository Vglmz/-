# 🔧 REFERENCIA DE MODIFICACIONES RÁPIDAS

Encuentra y modifica estas secciones fácilmente sin entender todo el código.

## 1️⃣ Cambiar Texto en Pantalla

**Ubicación:** `main.js` - Busca `showText()` y `showCard()`

### Texto inicial ("presiona start...")
No se recomienda cambiar esto - es estándar GameBoy.

### Texto al desbloquear mundo
Busca en `main.js`:
```javascript
function unlockWorld(worldNum) {
    const worldKey = `mundo${worldNum}`;
    GAME_STATE.worldsUnlocked[worldKey] = true;
    showText(`Mundo ${worldNum}\ndesbloqueado!`);  // ← CAMBIAR AQUÍ
}
```

Cambiar a:
```javascript
showText(`¡Avanzaste!\nMundo ${worldNum} abierto`);
```

### Texto final de la carta
Busca en `main.js`:
```javascript
function showCard() {
    const cardContent = `Gracias por\njugar esta\nhistoria`;  // ← CAMBIAR AQUÍ
    
    DOM.cardText.textContent = cardContent;
    DOM.cardModal.style.display = 'flex';
}
```

Puedes usar `\n` para saltos de línea:
```javascript
const cardContent = `Línea 1\nLínea 2\nLínea 3`;
// Resultado:
// Línea 1
// Línea 2
// Línea 3
```

---

## 2️⃣ Cambiar Colores de Botones

**Ubicación:** `styles.css` - Busca cada botón

### Botón START (rojo)
```css
.btn-start {
    background: linear-gradient(135deg, #ee0000 0%, #cc0000 100%);  /* ← CAMBIAR */
    border-color: #880000;  /* ← CAMBIAR */
}
```

Colores recomendados:
- Rojo: `#ee0000` → `#cc0000`
- Verde: `#00dd00` → `#00aa00`
- Azul: `#0066ff` → `#0044cc`
- Amarillo: `#ffdd00` → `#ffaa00`

### Botón A (verde)
```css
.btn-a {
    background: linear-gradient(135deg, #00dd00 0%, #00aa00 100%);  /* ← CAMBIAR */
    border-color: #006600;  /* ← CAMBIAR */
}
```

### Botón B (amarillo)
```css
.btn-b {
    background: linear-gradient(135deg, #ffdd00 0%, #ffaa00 100%);  /* ← CAMBIAR */
    border-color: #cc8800;  /* ← CAMBIAR */
}
```

---

## 3️⃣ Ajustar Tamaño de Botones

**Ubicación:** `styles.css`

### Botones A y B (ahora 6vh)
```css
.btn-a, .btn-b {
    width: 6vh;      /* ← CAMBIAR (aumentar/disminuir) */
    height: 6vh;     /* ← CAMBIAR */
}
```

Valores sugeridos: `5vh`, `6vh`, `7vh`, `8vh`

### Botón START
```css
.btn-start {
    width: 70%;      /* ← CAMBIAR (% del ancho) */
    padding: 1.2vh 2vh;  /* ← CAMBIAR (añadir padding) */
}
```

---

## 4️⃣ Cambiar Velocidad de Minijuego

**Ubicación:** `main.js` - Objeto `minigame`

### Gravedad (qué tan rápido cae)
```javascript
minigame.gravity = 0.3;  /* ← CAMBIAR */
// Menor (0.1) = cae lentamente
// Mayor (0.5) = cae rápidamente
```

### Salto (qué tan alto salta)
```javascript
jump() {
    if (!this.player.jumping && this.isOnGround()) {
        this.player.velocityY = -6;  /* ← CAMBIAR */
        this.player.jumping = true;
    }
}
// Mayor número negativo (-8) = salta más alto
// Menor número negativo (-4) = salta más bajo
```

### Velocidad de movimiento
```javascript
run() {
    if (this.moveLeft && this.player.x > 0) {
        this.player.x -= 2;  /* ← CAMBIAR */
    }
    if (this.moveRight && this.player.x < this.width - this.player.width) {
        this.player.x += 2;  /* ← CAMBIAR */
    }
}
// Menor = más lento
// Mayor = más rápido
```

---

## 5️⃣ Agregar o Quitar Plataformas

**Ubicación:** `main.js` - Array `platforms`

```javascript
platforms: [
    { x: 0, y: 135, width: 160, height: 10 },    // Piso
    { x: 30, y: 110, width: 50, height: 8 },     // Plataforma 1
    { x: 90, y: 95, width: 50, height: 8 },      // Plataforma 2
    // { x: 30, y: 70, width: 40, height: 8 },   // COMENTADA = no existe
    // AGREGAR NUEVA AQUÍ
],
```

Parámetros:
- `x`: posición horizontal (0 = izquierda, 160 = derecha)
- `y`: posición vertical (0 = tope, 144 = piso)
- `width`: ancho de la plataforma
- `height`: alto (típicamente 8)

Ejemplo de nueva plataforma:
```javascript
{ x: 60, y: 50, width: 35, height: 8 },  // Nueva plataforma en el medio
```

---

## 6️⃣ Mover o Agregar Corazones

**Ubicación:** `main.js` - Array `hearts`

```javascript
hearts: [
    { x: 45, y: 95, collected: false },   // Corazón 1
    { x: 120, y: 80, collected: false },  // Corazón 2
    // AGREGAR MÁS CORAZONES AQUÍ
],
```

Parámetros:
- `x`: posición horizontal
- `y`: posición vertical
- `collected`: siempre `false` al inicio

Ejemplo: agregar 6to corazón
```javascript
{ x: 75, y: 120, collected: false },
```

También actualizar:
```javascript
GAME_STATE.maxHearts = 5;  // ← CAMBIAR A 6 si agregas un corazón
```

---

## 7️⃣ Cambiar Cantidad de Imágenes por Mundo

**Ubicación:** `main.js` - Función `getWorldImageCount()`

```javascript
function getWorldImageCount(state) {
    const counts = {
        [GAME_CONFIG.states.INTRO]: 2,
        [GAME_CONFIG.states.MUNDO1]: 6,      // ← CAMBIAR
        [GAME_CONFIG.states.MUNDO2]: 7,      // ← CAMBIAR
        [GAME_CONFIG.states.MUNDO3]: 3,      // ← CAMBIAR
        [GAME_CONFIG.states.MUNDO5]: 12,     // ← CAMBIAR
        [GAME_CONFIG.states.MUNDO4_INTRO]: 2,
    };
    return counts[state] || 1;
}
```

Si cambias a 8 imágenes en Mundo 1, crea 8 archivos:
```
assets/images/mundo1/img1.png
assets/images/mundo1/img2.png
...
assets/images/mundo1/img8.png
```

Y actualiza el objeto:
```javascript
[GAME_CONFIG.states.MUNDO1]: 8,  // ← Cambiar 6 → 8
```

---

## 8️⃣ Cambiar Volumen de Audio

**Ubicación:** `main.js` - Objeto `AUDIO`

```javascript
const AUDIO = {
    bgMusic: null,
    
    init() {
        this.bgMusic = new Audio('assets/audio/bg.mp3');
        this.bgMusic.loop = true;
        this.bgMusic.volume = 0.4;  // ← CAMBIAR (0.0 = mute, 1.0 = max)
    },
    
    playSound(soundName) {
        // ...
        const sound = new Audio(soundName);
        sound.volume = 0.5;  // ← CAMBIAR (para efectos)
    }
};
```

Valores: 0 (silencio) a 1 (100% volumen)
- `0.2` = muy bajo
- `0.5` = normal
- `0.8` = fuerte
- `1.0` = muy fuerte

---

## 9️⃣ Desbloquear Mundos Inicialmente

**Ubicación:** `main.js` - Objeto `GAME_STATE`

```javascript
const GAME_STATE = {
    // ...
    worldsUnlocked: { 
        mundo1: true,   // Siempre desbloqueado
        mundo2: false,  // ← CAMBIAR false → true (para desbloquear)
        mundo3: false,
        mundo4: false,
        mundo5: false,
    },
};
```

Para desbloquear Mundo 2 desde el inicio:
```javascript
mundo2: true,
```

---

## 🔟 Abrir Spotify en Mundo 2

**Ubicación:** `main.js` - Función `handleBButtonPress()`

Busca donde dice:
```javascript
} else if (state === GAME_CONFIG.states.MUNDO2) {
    // aquí está el mundo 2
```

Dentro de `handleBButtonPress()`, agregar después de recoger todas las imágenes:

```javascript
} else if (state === GAME_CONFIG.states.MUNDO2) {
    if (GAME_STATE.currentImageIndex > 0) {
        GAME_STATE.currentImageIndex--;
        handleState(state);
    }
    
    // AGREGAR AQUÍ (en el siguiente botón que presiones después del último A):
    // window.open("https://open.spotify.com/playlist/tuPlaylistId", "_blank");
}
```

O mejor aún, úsalo cuando se complete Mundo 2:

```javascript
} else if (state === GAME_CONFIG.states.MUNDO2) {
    unlockWorld(3);
    // AGREGAR:
    window.open("https://open.spotify.com/playlist/6rPTm9QwYs85z7g56matches", "_blank");
    setTimeout(() => setState(GAME_CONFIG.states.MAP), 1500);
}
```

---

## Finder Rápido

Usa estas búsquedas en tu editor (Ctrl+F) para encontrar:

| Buscar | Para encontrar |
|--------|---------------|
| `showText(` | Todos los textos que se muestran |
| `#btn-` | Todos los estilos de botones |
| `platforms: [` | Las plataformas del minijuego |
| `hearts: [` | Los corazones del minijuego |
| `getWorldImageCount` | Cantidad de imágenes por mundo |
| `GAME_STATE` | Variables globales del juego |
| `handleButtonPress` | Qué pasa cuando presionas un botón |

---

## 💡 Ejemplos Comunes

### Cambiar color de tema GameBoy
```css
.screen {
    background: #1a2f1a;  /* ← Verde clásico */
    /* Probar otros colores: */
    /* #001a33 = azul */
    /* #2a1a00 = café */
    /* #1a001a = púrpura */
}
```

### Agregar pausa al minijuego
En `initMiniGame()`:
```javascript
function initMiniGame() {
    setTimeout(() => {
        minigame.init();
    }, 2000);  // Espera 2 segundos antes de empezar
}
```

### Cambiar duración de mensaje de desbloqueo
En `unlockWorld()`:
```javascript
setTimeout(() => setState(GAME_CONFIG.states.MAP), 1500);  // ms ← CAMBIAR
// 1500 = 1.5 segundos
```

---

**¡Listo para personalizar!** 🚀
