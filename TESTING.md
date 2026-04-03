# 🧪 Checklist de Testing y Debugging

Usa este checklist para validar que todo funciona correctamente antes de lanzar.

## ✅ Testing Funcional Básico

### Inicio del Juego
- [ ] Pantalla muestra "presiona start..."
- [ ] START es el único botón visible
- [ ] Al presionar START:
  - [ ] Música comienza a reproducirse (revisar volumen)
  - [ ] Pantalla cambia a intro
  - [ ] El botón START desaparece
  - [ ] Aparecen botones A y B

### Navegación Intro
- [ ] Presionar A → avanza a siguiente imagen
- [ ] Presionar B → retrocede a imagen anterior
- [ ] Al final de intro (img2):
  - [ ] Presionar A → va al MAPA
  - [ ] El botón de ir atrás NO va más atrás

### Mapa del Mundo
- [ ] La imagen map.png se muestra correctamente
- [ ] Mundo 1 está desbloqueado
- [ ] Mundos 2-5 están bloqueados
- [ ] Seleccionar Mundo 1 → entra a Mundo 1

### Mundo 1 (6 imágenes)
- [ ] Muestra img1.png primero
- [ ] A → img2, img3, img4, img5, img6
- [ ] B → retrocede correctamente
- [ ] Después de img6 + presionar A → vuelve al MAPA
- [ ] **Mundo 2 debe estar desbloqueado ahora**

### Mundo 2 (7 imágenes)
- [ ] 7 imágenes diferentes
- [ ] Navegación correcta A/B
- [ ] Final → vuelve al MAPA
- [ ] **Mundo 3 debe estar desbloqueado**

### Mundo 3 (3 imágenes)
- [ ] 3 imágenes diferentes
- [ ] Navegación correcta
- [ ] Final → vuelve al MAPA
- [ ] **Mundo 4 debe estar desbloqueado**

### Mundo 4 - Intro (2 imágenes)
- [ ] 2 imágenes diferentes
- [ ] Navegación correcta A/B
- [ ] Final de la segunda imagen + A → entra al MINIJUEGO

### Minijuego (Canvas)
- [ ] Canvas aparece en la pantalla
- [ ] Se ven plataformas dibujadas
- [ ] Se ve personaje en pantalla
- [ ] Se ven 5 corazones
- [ ] Contador muestra "0/5" en esquina superior izquierda

#### Mecánicas del Minijuego
- [ ] Presionar ⬅️ → personaje se mueve a la izquierda
- [ ] Presionar ➡️ → personaje se mueve a la derecha
- [ ] Hold/mantener presionado → movimiento continuo
- [ ] Presionar A → personaje salta
- [ ] Gravedad es visible (personaje cae)
- [ ] Al caer al piso → reinicia
- [ ] Tocar corazón → se recolecta:
  - [ ] Sonido "coin"
  - [ ] Contador sube (1/5, 2/5, etc.)
  - [ ] El corazón desaparece
- [ ] Al recoger 5 corazones:
  - [ ] Se muestra mensaje "Nivel completado"
  - [ ] Vuelve al MAPA
  - [ ] **Mundo 5 está desbloqueado**

### Mundo 5 (12 imágenes)
- [ ] 12 imágenes diferentes
- [ ] Navegación correcta A/B
- [ ] Final + A → CARTA FINAL

### Carta Final
- [ ] Modal aparece centrado
- [ ] Muestra tu texto personalizado
- [ ] Botón "Cerrar" funciona
- [ ] Al cerrar → aparece botón REINICIAR

### Reinicio
- [ ] Presionar REINICIAR → vuelve a pantalla inicial
- [ ] Estado se resetea completamente
- [ ] Música para
- [ ] Mundos vuelven a estar bloqueados (excepto Mundo 1)

---

## 🔊 Testing de Audio

### Música de Fondo
- [ ] Se reproduce después de presionar START
- [ ] Es un loop infinito (no se detiene)
- [ ] Volumen es cómodo (ni muy bajo, ni muy alto)
- [ ] Se pause cuando presionas REINICIAR

### Efectos de Sonido
- [ ] **click.mp3**: Suena al presionar cualquier botón
- [ ] **jump.mp3**: Suena al saltar en minijuego
- [ ] **coin.mp3**: Suena al recoger corazón
- [ ] Todos tienen volumen apropiado
- [ ] No hay retrasos en la reproducción

---

## 📱 iPhone 13 Specifics

### Responsive
- [ ] Pantalla ocupa todo el viewport (sin scroll)
- [ ] GameBoy centrado perfectamente
- [ ] En orientación portrait → perfecto
- [ ] En orientación landscape → rechaza o ajusta bien
- [ ] Mantiene safe areas del notch/home indicator

### Touch
- [ ] Botones táctiles responden rápido
- [ ] Botones suficientemente grandes (no difíciles de tocar)
- [ ] Hold en movimiento funciona
- [ ] Sin delay de 300ms en clicks
- [ ] No hay zoom involuntario

### Performance
- [ ] No lag al presionar botones
- [ ] Minijuego corre smooth (no stuttering)
- [ ] Transiciones son fluidas
- [ ] No hay bloqueos (freezes)

### Compatibilidad
- [ ] Funciona en Safari
- [ ] Funciona en Chrome mobile
- [ ] Se puede agregar como app (Add to Home Screen)
- [ ] Funciona fullscreen como app

---

## 🎨 Visual Quality

### Pixel Art
- [ ] Todas las imágenes se ven pixeladas (no suavizadas)
- [ ] Texto está legible
- [ ] Colores GameBoy clásicos se respetan
- [ ] Canvas del minijuego es crisp (no borroso)

### Transiciones
- [ ] Cambio de pantalla está rápido (flash visible)
- [ ] Modal aparece suavemente
- [ ] Animaciones no son lentas

### UI
- [ ] Botones tienen efectos visuales (cambio de color al presionar)
- [ ] Feedback visual clara (el usuario ve que presionó)
- [ ] Luz verde del GameBoy está activada

---

## 🐛 Debugging Común

### Si el audio no suena:
```javascript
// Abre la consola (F12) y verifica:
// 1. Que AUDIO.initialized sea true
// 2. Que el archivo exista: assets/audio/bg.mp3
// 3. Que no haya error CORS en consola
```

### Si las imágenes no cargan:
```javascript
// Verifica en consola:
// 1. DOM.screenImage.src debería ser "assets/images/intro/img1.png"
// 2. Comprueba que el archivo existe
// 3. Revisa nombre exacto (case-sensitive)
// 4. Verifica que sean PNG, no JPG
```

### Si el minijuego lagea:
```javascript
// En main.js, reduce:
// - Cantidad de plataformas
// - requestAnimationFrame frecuencia
// - Complejidad visual
```

### Si los botones no responden:
```javascript
// Verifica en consola:
console.log(GAME_STATE.currentState);
// Debería mostrar el estado actual
// Luego click un botón y mira el cambio
```

---

## 📊 Performance Baselines (iPhone 13)

| Métrica | Target | Rojo |
|---------|--------|------|
| FPS en minijuego | 30-60 | < 24 |
| Tiempo de respuesta botón | < 50ms | > 100ms |
| Tiempo carga imagen | < 100ms | > 500ms |
| Tamaño total (sin audios) | < 2MB | > 5MB |

---

## 🚀 Deployment Checklist

Antes de lanzar a producción:

- [ ] Todas las imágenes están en el lugar correcto
- [ ] Todos los audios están en el lugar correcto
- [ ] El texto final es el correcto y personalizado
- [ ] No hay console.log() spam (limpia la consola)
- [ ] No hay rutas hardcodeadas a paths locales
- [ ] El .gitignore está configurado
- [ ] README.md es claramente legible
- [ ] SETUP.md tiene instrucciones completas
- [ ] Probado en al menos 2 dispositivos
- [ ] Probado tanto en desktop como mobile

---

## 📝 Notas de Testing

### Desktop
- Chrome: ✅ Recomendado
- Firefox: ✅ Compatible
- Safari: ✅ Compatible
- Edge: ✅ Compatible

### iPhone
- Safari: ✅ Recomendado
- Chrome: ✅ Compatible
- Edge: ✅ Compatible
- En-app browsers: ⚠️ Revisar

### Android
- Chrome: ✅ Recomendado
- Firefox: ✅ Compatible
- Samsung Internet: ✅ Compatible

---

**Última actualización:** 2026-04-03  
**Versión:** 1.0 Final
