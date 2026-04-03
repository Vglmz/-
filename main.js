/* ============================================
   GAMEBOY RETRO - LÓGICA DEL JUEGO
   Sistema completo de estados y mecánicas
   ============================================ */

// ============================================
// CONFIGURACIÓN Y ESTADO GLOBAL
// ============================================

const GAME_CONFIG = {
    states: {
        INIT: 'init',
        INTRO: 'intro',
        MAP: 'map',
        MUNDO1: 'mundo1',
        MUNDO2: 'mundo2',
        MUNDO3: 'mundo3',
        MUNDO4_INTRO: 'mundo4_intro',
        MUNDO4_JUEGO: 'mundo4_juego',
        MUNDO5: 'mundo5',
        CARTA_FINAL: 'carta_final',
    },
    worlds: {
        mundo1: { images: 6, unlocked: true },
        mundo2: { images: 7, unlocked: false },
        mundo3: { images: 3, unlocked: false },
        mundo4: { intro: 2, unlocked: false },
        mundo5: { images: 12, unlocked: false },
    }
};

const GAME_STATE = {
    currentState: GAME_CONFIG.states.INIT,
    currentImageIndex: 0,
    currentWorld: null,
    worldsUnlocked: { mundo1: true, mundo2: false, mundo3: false, mundo4: false, mundo5: false },
    musicStarted: false,
    audioContext: null,
    heartCount: 0,
    maxHearts: 5,
};

// ============================================
// AUDIO MANAGEMENT
// ============================================

const AUDIO = {
    bgMusic: null,
    initialized: false,

    init() {
        if (this.initialized) return;
        this.bgMusic = new Audio('./assets/audio/bg.mp3');
        this.bgMusic.loop = true;
        this.bgMusic.volume = 0.4;
        this.initialized = true;
    },

    play() {
        this.init();
        if (!GAME_STATE.musicStarted) {
            this.bgMusic.play().catch(e => console.log('Audio play failed:', e));
            GAME_STATE.musicStarted = true;
        }
    },

    stop() {
        if (this.bgMusic) {
            this.bgMusic.pause();
            this.bgMusic.currentTime = 0;
        }
        GAME_STATE.musicStarted = false;
    },

    playSound(soundName) {
        const soundMap = {
            'click': './assets/audio/click.mp3',
            'jump': './assets/audio/jump.mp3',
            'coin': './assets/audio/coin.mp3',
        };

        if (soundMap[soundName]) {
            const sound = new Audio(soundMap[soundName]);
            sound.volume = 0.5;
            sound.play().catch(e => console.log('Sound play failed:', e));
        }
    }
};

// ============================================
// DOM ELEMENTS
// ============================================

const DOM = {
    screenImage: document.getElementById('screenImage'),
    textOverlay: document.getElementById('textOverlay'),
    gameCanvas: document.getElementById('gameCanvas'),
    btnStart: document.getElementById('btnStart'),
    btnA: document.getElementById('btnA'),
    btnB: document.getElementById('btnB'),
    btnLeft: document.getElementById('btnLeft'),
    btnRight: document.getElementById('btnRight'),
    btnJump: document.getElementById('btnJump'),
    movementControls: document.getElementById('movementControls'),
    cardModal: document.getElementById('cardModal'),
    cardText: document.getElementById('cardText'),
    btnCloseCard: document.getElementById('btnCloseCard'),
    btnRestart: document.getElementById('btnRestart'),
    actionButtons: document.querySelector('.action-buttons'),
    mapSelector: document.getElementById('mapSelector'),
    mapWorldButtons: document.querySelectorAll('.map-world'),
};

// ============================================
// TRANSITION & EFFECTS
// ============================================

function flashScreen() {
    DOM.screenImage.style.animation = 'none';
    setTimeout(() => {
        DOM.screenImage.style.animation = 'flash 0.2s ease';
    }, 10);
}

function clearScreen() {
    DOM.screenImage.src = '';
    DOM.screenImage.style.display = 'none';
    DOM.textOverlay.textContent = '';
}

function showImage() {
    DOM.screenImage.style.display = 'block';
}

// ============================================
// IMAGE LOADING
// ============================================

function getImagePath(world, index) {
    if (world === 'intro') {
        return `assets/images/intro/img${index + 1}.png`;
    }
    if (world === 'map') {
        return 'assets/images/map.png';
    }
    if (world.startsWith('mundo') && !world.includes('_')) {
        return `assets/images/${world}/img${index + 1}.png`;
    }
    if (world === 'mundo4_intro') {
        return `assets/images/mundo4/intro${index + 1}.png`;
    }
    return '';
}

function loadImage(world, index) {
    const path = getImagePath(world, index);
    if (path) {
        DOM.screenImage.src = path;
        showImage();
        flashScreen();
    } else {
        DOM.screenImage.src = '';
        DOM.screenImage.style.display = 'none';
    }
}

function showText(text) {
    DOM.textOverlay.textContent = text;
}

// ============================================
// STATE TRANSITIONS
// ============================================

let mapSelectorTimerId = null;

function setState(newState) {
    GAME_STATE.currentState = newState;
    GAME_STATE.currentImageIndex = 0;
    updateUI();
    // No mostrar selector de mundo inmediatamente; lo controla handleMap con delay
    hideMapSelector();
    handleState(newState);
}

function updateUI() {
    const state = GAME_STATE.currentState;
    const isIngame = state === GAME_CONFIG.states.MUNDO4_JUEGO;

    // Show/Hide START button
    DOM.btnStart.style.display = (state === GAME_CONFIG.states.INIT) ? 'block' : 'none';

    // Show/Hide A & B buttons (normal controls)
    const hideNormalButtons = state === GAME_CONFIG.states.MUNDO4_JUEGO;
    DOM.actionButtons.style.display = hideNormalButtons ? 'none' : 'flex';

    // Show/Hide movement controls (only in minigame)
    DOM.movementControls.style.display = isIngame ? 'flex' : 'none';
}

// ============================================
// STATE HANDLERS
// ============================================

function handleState(state) {
    switch(state) {
        case GAME_CONFIG.states.INIT:
            handleInit();
            break;
        case GAME_CONFIG.states.INTRO:
            handleIntro();
            break;
        case GAME_CONFIG.states.MAP:
            handleMap();
            break;
        case GAME_CONFIG.states.MUNDO1:
        case GAME_CONFIG.states.MUNDO2:
        case GAME_CONFIG.states.MUNDO3:
        case GAME_CONFIG.states.MUNDO5:
            handleMundo(state);
            break;
        case GAME_CONFIG.states.MUNDO4_INTRO:
            handleMundo4Intro();
            break;
        case GAME_CONFIG.states.MUNDO4_JUEGO:
            handleMundo4Game();
            break;
        case GAME_CONFIG.states.CARTA_FINAL:
            handleCarta();
            break;
    }
}

function handleInit() {
    clearScreen();
    showText('Presiona\nstart bonita...');
}

function handleIntro() {
    loadImage('intro', GAME_STATE.currentImageIndex);
    showText('');
}

function handleMap() {
    DOM.gameCanvas.style.display = 'none';
    loadImage('map', 0);
    showText('');

    if (mapSelectorTimerId) {
        clearTimeout(mapSelectorTimerId);
    }
    mapSelectorTimerId = setTimeout(() => {
        showMapSelector();
    }, 3000);
}

function handleMundo(state) {
    DOM.gameCanvas.style.display = 'none';
    loadImage(state, GAME_STATE.currentImageIndex);
    showText('');
    loadImage(state, GAME_STATE.currentImageIndex);
    showText('');
}

function handleMundo4Intro() {
    DOM.gameCanvas.style.display = 'none';
    loadImage('mundo4_intro', GAME_STATE.currentImageIndex);
    showText('');
}

function handleMundo4Game() {
    DOM.screenImage.src = '';
    DOM.screenImage.style.display = 'none';
    DOM.textOverlay.textContent = '';
    DOM.gameCanvas.style.display = 'block';
    initMiniGame();
}

function handleCarta() {
    clearScreen();
    showText('');
}

// ============================================
// WORLD SELECTOR
// ============================================

function showMapSelector() {
    if (!DOM.mapSelector) return;

    // Mostrar el mapa y los botones de mundo
    DOM.mapSelector.style.display = 'flex';

    DOM.mapWorldButtons.forEach(button => {
        const worldNum = parseInt(button.getAttribute('data-world'), 10);
        const worldKey = `mundo${worldNum}`;

        if (GAME_STATE.worldsUnlocked[worldKey]) {
            button.classList.add('unlocked');
            button.classList.remove('locked');
            button.disabled = false;
        } else {
            button.classList.add('locked');
            button.classList.remove('unlocked');
            button.disabled = true;
        }

        button.onclick = () => {
            if (GAME_STATE.worldsUnlocked[worldKey]) {
                selectWorld(worldNum);
            }
        };
    });
}

function hideMapSelector() {
    if (!DOM.mapSelector) return;
    DOM.mapSelector.style.display = 'none';
    if (mapSelectorTimerId) {
        clearTimeout(mapSelectorTimerId);
        mapSelectorTimerId = null;
    }
}

function selectWorld(worldNum) {
    const worldKey = `mundo${worldNum}`;

    if (!GAME_STATE.worldsUnlocked[worldKey]) {
        AUDIO.playSound('click');
        return;
    }

    AUDIO.playSound('click');
    
    if (worldNum === 1) {
        setState(GAME_CONFIG.states.MUNDO1);
    } else if (worldNum === 2) {
        setState(GAME_CONFIG.states.MUNDO2);
    } else if (worldNum === 3) {
        setState(GAME_CONFIG.states.MUNDO3);
    } else if (worldNum === 4) {
        setState(GAME_CONFIG.states.MUNDO4_INTRO);
    } else if (worldNum === 5) {
        setState(GAME_CONFIG.states.MUNDO5);
    }
}

function unlockWorld(worldNum) {
    const worldKey = `mundo${worldNum}`;
    GAME_STATE.worldsUnlocked[worldKey] = true;
    showText(`Mundo ${worldNum}\ndesbloqueado!`);
}

// ============================================
// BUTTON HANDLERS
// ============================================

function handleButtonPress(action) {
    const state = GAME_STATE.currentState;

    AUDIO.playSound('click');

    switch(action) {
        case 'start':
            if (state === GAME_CONFIG.states.INIT) {
                AUDIO.play();
                setState(GAME_CONFIG.states.INTRO);
            }
            break;

        case 'a':
            handleAButtonPress(state);
            break;

        case 'b':
            handleBButtonPress(state);
            break;

        case 'left':
            if (state === GAME_CONFIG.states.MUNDO4_JUEGO) {
                minigame.manualMove(-6);
            }
            break;

        case 'right':
            if (state === GAME_CONFIG.states.MUNDO4_JUEGO) {
                minigame.manualMove(6);
            }
            break;

        case 'jump':
            if (state === GAME_CONFIG.states.MUNDO4_JUEGO) {
                minigame.jump();
            }
            break;
    }
}

function handleButtonRelease(action) {
    if (action === 'left' && minigame) {
        minigame.moveLeft = false;
    }
    if (action === 'right' && minigame) {
        minigame.moveRight = false;
    }
}

function handleAButtonPress(state) {
    if ([GAME_CONFIG.states.INTRO, GAME_CONFIG.states.MUNDO1, GAME_CONFIG.states.MUNDO2,
         GAME_CONFIG.states.MUNDO3, GAME_CONFIG.states.MUNDO5, GAME_CONFIG.states.MUNDO4_INTRO].includes(state)) {
        
        const imageCount = getWorldImageCount(state);
        
        if (GAME_STATE.currentImageIndex < imageCount - 1) {
            GAME_STATE.currentImageIndex++;
            handleState(state);
        } else {
            handleWorldEnd(state);
        }
    }
}

function handleBButtonPress(state) {
    if (state === GAME_CONFIG.states.MUNDO2) {
        window.open('https://open.spotify.com/playlist/3HIhGPTpZTVfEY0u7FZ7vJ?si=ea325c4e66aa4398', '_blank');
    }

    if ([GAME_CONFIG.states.INTRO, GAME_CONFIG.states.MUNDO1, GAME_CONFIG.states.MUNDO2,
         GAME_CONFIG.states.MUNDO3, GAME_CONFIG.states.MUNDO5, GAME_CONFIG.states.MUNDO4_INTRO].includes(state)) {
        
        if (GAME_STATE.currentImageIndex > 0) {
            GAME_STATE.currentImageIndex--;
            handleState(state);
        }
    } else if (state === GAME_CONFIG.states.MAP) {
        // Special case: B from map goes back (could go to intro)
    }
}

function getWorldImageCount(state) {
    const counts = {
        [GAME_CONFIG.states.INTRO]: 4,
        [GAME_CONFIG.states.MUNDO1]: 6,
        [GAME_CONFIG.states.MUNDO2]: 5,
        [GAME_CONFIG.states.MUNDO3]: 3,
        [GAME_CONFIG.states.MUNDO5]: 12,
        [GAME_CONFIG.states.MUNDO4_INTRO]: 2,
    };
    return counts[state] || 1;
}

function handleWorldEnd(state) {
    if (state === GAME_CONFIG.states.INTRO) {
        setState(GAME_CONFIG.states.MAP);
    } else if (state === GAME_CONFIG.states.MUNDO1) {
        unlockWorld(2);
        setTimeout(() => setState(GAME_CONFIG.states.MAP), 1500);
    } else if (state === GAME_CONFIG.states.MUNDO2) {
        unlockWorld(3);
        setTimeout(() => setState(GAME_CONFIG.states.MAP), 1500);
    } else if (state === GAME_CONFIG.states.MUNDO3) {
        unlockWorld(4);
        setTimeout(() => setState(GAME_CONFIG.states.MAP), 1500);
    } else if (state === GAME_CONFIG.states.MUNDO4_INTRO) {
        setState(GAME_CONFIG.states.MUNDO4_JUEGO);
    } else if (state === GAME_CONFIG.states.MUNDO5) {
        setState(GAME_CONFIG.states.CARTA_FINAL);
    }
}

// ============================================
// MINIGAME (CANVAS)
// ============================================

const minigame = {
    canvas: DOM.gameCanvas,
    ctx: DOM.gameCanvas.getContext('2d'),
    width: 160,
    height: 144,

    player: {
        x: 20,
        y: 80,
        width: 16,
        height: 16,
        velocityY: 0,
        jumping: false,
        velocityX: 0,
    },

    playerSprite: (() => { const img = new Image(); img.src = 'assets/images/mundo4/kirby.png'; return img; })(),
    heartSprite: (() => { const img = new Image(); img.src = 'assets/images/mundo4/heart.png'; return img; })(),

    gravity: 0.3,
    moveLeft: false,
    moveRight: false,

    manualMove(dx) {
        this.player.x += dx;
        this.player.x = Math.max(0, Math.min(this.width - this.player.width, this.player.x));
    },
    
    platforms: [
        { x: 0, y: 135, width: 160, height: 10 }, // Floor
        { x: 30, y: 110, width: 50, height: 8 },
        { x: 90, y: 95, width: 50, height: 8 },
        { x: 30, y: 70, width: 40, height: 8 },
        { x: 100, y: 55, width: 50, height: 8 },
    ],
    
    hearts: [
        { x: 45, y: 95, collected: false },
        { x: 120, y: 80, collected: false },
        { x: 50, y: 55, collected: false },
        { x: 120, y: 40, collected: false },
        { x: 75, y: 25, collected: false },
    ],
    
    gameRunning: true,
    animationId: null,

    init() {
        GAME_STATE.heartCount = 0;
        this.player = { x: 20, y: 80, width: 12, height: 16, velocityY: 0, jumping: false };
        this.moveLeft = false;
        this.moveRight = false;
        this.hearts.forEach(h => h.collected = false);
        this.gameRunning = true;
        this.run();
    },

    jump() {
        if (!this.player.jumping && this.isOnGround()) {
            this.player.velocityY = -6;
            this.player.jumping = true;
            AUDIO.playSound('jump');
        }
    },

    isOnGround() {
        return this.platforms.some(platform => {
            const bottom = this.player.y + this.player.height;
            return this.player.x + this.player.width > platform.x &&
                this.player.x < platform.x + platform.width &&
                bottom >= platform.y &&
                bottom <= platform.y + platform.height + 2 &&
                this.player.velocityY >= 0;
        });
    },

    checkHeartCollision() {
        for (let heart of this.hearts) {
            if (!heart.collected &&
                this.player.x + this.player.width > heart.x - 4 &&
                this.player.x < heart.x + 12 &&
                this.player.y + this.player.height > heart.y - 4 &&
                this.player.y < heart.y + 12) {
                heart.collected = true;
                GAME_STATE.heartCount++;
                AUDIO.playSound('coin');
                
                if (GAME_STATE.heartCount >= GAME_STATE.maxHearts) {
                    this.completeLevel();
                }
            }
        }
    },

    completeLevel() {
        this.gameRunning = false;
        cancelAnimationFrame(this.animationId);
        
        DOM.gameCanvas.style.display = 'none';
        setTimeout(() => {
            unlockWorld(5);
            setTimeout(() => {
                setState(GAME_CONFIG.states.MAP);
            }, 1500);
        }, 500);
    },

    run() {
        if (!this.gameRunning) return;

        // Horizontal movement is controlled directamente con manualMove() en cada click/tap.
        // Mantener interruptor para compatibilidad, pero no correr impulso.
        if (!this.moveLeft && !this.moveRight) {
            this.player.velocityX = 0;
        }

        // Clamping horizontal position
        this.player.x = Math.max(0, Math.min(this.width - this.player.width, this.player.x));

        // Apply gravity
        this.player.velocityY += this.gravity;
        this.player.y += this.player.velocityY;

        // Plate collision & ground detection
        let standing = false;
        for (let platform of this.platforms) {
            const bottom = this.player.y + this.player.height;
            if (this.player.x + this.player.width > platform.x &&
                this.player.x < platform.x + platform.width &&
                bottom >= platform.y &&
                bottom <= platform.y + platform.height + 5 &&
                this.player.velocityY >= 0) {
                this.player.y = platform.y - this.player.height;
                this.player.velocityY = 0;
                this.player.jumping = false;
                standing = true;
                break;
            }
        }

        if (!standing && this.player.y + this.player.height >= this.height) {
            // fell below screen
            this.init();
            return;
        }

        if (standing) {
            this.player.jumping = false;
        }

        // Enforce vertical bounds
        this.player.y = Math.max(0, Math.min(this.height - this.player.height, this.player.y));

        // Check if fell off bottom (redundante por clamp, pero seguro)
        if (this.player.y >= this.height - this.player.height) {
            // Si se ha salido por abajo (por error de física), reinicia
            if (!standing) {
                this.init();
                return;
            }
        }

        // Check heart collision
        this.checkHeartCollision();

        // Render
        this.render();
        this.animationId = requestAnimationFrame(() => this.run());
    },

    render() {
        // Clear canvas
        this.ctx.fillStyle = '#87CEEB';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw platforms
        this.ctx.fillStyle = '#8B4513';
        for (let platform of this.platforms) {
            this.ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        }

        // Draw player (sprite kirby in mundo4)
        if (this.playerSprite.complete && this.playerSprite.naturalWidth !== 0) {
            this.ctx.drawImage(this.playerSprite, this.player.x, this.player.y, this.player.width, this.player.height);
        } else {
            this.ctx.fillStyle = '#ff0000';
            this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
        }

        // Draw hearts (sprite heart)
        for (let heart of this.hearts) {
            if (!heart.collected) {
                if (this.heartSprite.complete && this.heartSprite.naturalWidth !== 0) {
                    this.ctx.drawImage(this.heartSprite, heart.x, heart.y, 10, 10);
                } else {
                    this.ctx.fillStyle = '#ffff00';
                    this.ctx.fillRect(heart.x, heart.y, 8, 8);
                }
            }
        }

        // Draw UI
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = 'bold 8px Arial';
        this.ctx.fillText(`${GAME_STATE.heartCount}/5`, 5, 10);
    }
};

function initMiniGame() {
    minigame.init();
}

// ============================================
// FINAL CARD
// ============================================

function handleCarta() {
    clearScreen();
    setTimeout(() => {
        showCard();
    }, 500);
}

function showCard() {
    const cardContent = `Si te gusto mi pagina me tienes que dejar enviarte algo eeeeee. Entonces si no me dejas enviarte ni una galleta siginifica que no te gusto y pipipi voy a llorar y muy triste y tu no quieres eso no? yo creo que no entonces dejame enviarte una galleta aaaaaaaaaaa. Ya por ultimo, solo quiero decirte que te amo. Creo que eso ya lo sabes perfectamente y te lo he dicho muchas veces, pero en verdad te amo y no miro a nadie como te miro a ti ela. Para mi solo has sido tu y quiero que sigas siendo tu siempre. No tengo interes en nadie ni nada más, y quiero que siempre sea así. Para mi siempre vas a ser tu y siempre hare todo por hacertelo saber. Te quiero mucho amor. Se que el momento ahora es dificil y todo esta muy complejo, pero si de algo ayuda en lo más minimo. Siempre estoy para ti linda. Siempre. Pancito te ama mucho :3 `;
    
    DOM.cardText.textContent = cardContent;
    DOM.cardModal.style.display = 'flex';
}

function closeCard() {
    DOM.cardModal.style.display = 'none';
    showRestartButton();
}

function showRestartButton() {
    DOM.btnRestart.style.display = 'block';
}

function restartGame() {
    AUDIO.stop();
    GAME_STATE.currentState = GAME_CONFIG.states.INIT;
    GAME_STATE.currentImageIndex = 0;
    GAME_STATE.musicStarted = false;
    GAME_STATE.heartCount = 0;
    GAME_STATE.worldsUnlocked = { mundo1: true, mundo2: false, mundo3: false, mundo4: false, mundo5: false };
    
    DOM.btnRestart.style.display = 'none';
    DOM.gameCanvas.style.display = 'none';
    
    setState(GAME_CONFIG.states.INIT);
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize
    AUDIO.init();
    setState(GAME_CONFIG.states.INIT);

    // Button listeners
    const buttonHandlers = {
        'btnStart': () => handleButtonPress('start'),
        'btnA': () => handleButtonPress('a'),
        'btnB': () => handleButtonPress('b'),
        'btnLeft': () => handleButtonPress('left'),
        'btnRight': () => handleButtonPress('right'),
        'btnJump': () => handleButtonPress('jump'),
        'btnCloseCard': closeCard,
        'btnRestart': restartGame,
    };

    // Mouse/Touch events for buttons
    Object.entries(buttonHandlers).forEach(([id, handler]) => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', handler);
            
            // Touch support for holding
            if (['btnLeft', 'btnRight', 'btnJump'].includes(id)) {
                btn.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    handler();
                });
                
                btn.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    const action = id === 'btnLeft' ? 'left' : (id === 'btnRight' ? 'right' : 'jump');
                    handleButtonRelease(action);
                });
            }
        }
    });

    // Prevent default touch behavior
    document.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });
});

// ============================================
// KEY CONTROLS (for testing on desktop)
// ============================================

document.addEventListener('keydown', (e) => {
    const keyMap = {
        'Enter': 'start',
        'a': 'a',
        'b': 'b',
        'ArrowLeft': 'left',
        'ArrowRight': 'right',
        ' ': 'jump',
    };

    if (keyMap[e.key]) {
        handleButtonPress(keyMap[e.key]);
    }
});

document.addEventListener('keyup', (e) => {
    const keyMap = {
        'ArrowLeft': 'left',
        'ArrowRight': 'right',
    };

    if (keyMap[e.key]) {
        handleButtonRelease(keyMap[e.key]);
    }
});
