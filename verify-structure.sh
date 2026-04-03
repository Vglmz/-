#!/bin/bash
# 🎮 VERIFICADOR DE ESTRUCTURA DEL PROYECTO
# Ejecuta este script para verificar que todo esté en su lugar

echo "═════════════════════════════════════════════════════════════"
echo "🎮 GAMEBOY RETRO - VERIFICADOR DE ESTRUCTURA"
echo "═════════════════════════════════════════════════════════════"
echo ""

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para verificar archivo
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✅${NC} $1"
    else
        echo -e "${RED}❌${NC} $1"
    fi
}

# Función para verificar carpeta
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✅${NC} $1/"
    else
        echo -e "${RED}❌${NC} $1/"
    fi
}

echo "📄 ARCHIVOS PRINCIPALES:"
check_file "index.html"
check_file "styles.css"
check_file "main.js"
echo ""

echo "📖 DOCUMENTACIÓN:"
check_file "START_HERE.md"
check_file "PROJECT_SUMMARY.md"
check_file "SETUP.md"
check_file "README.md"
check_file "ASSETS_GUIDE.md"
check_file "MODIFICACIONES.md"
check_file "QUICK_REFERENCE.md"
check_file "TESTING.md"
check_file "ESTRUCTURA.md"
echo ""

echo "🎨 HERRAMIENTAS:"
check_file "placeholder-generator.html"
echo ""

echo "📁 CARPETAS DE ASSETS:"
check_dir "assets"
check_dir "assets/images"
check_dir "assets/images/intro"
check_dir "assets/images/mundo1"
check_dir "assets/images/mundo2"
check_dir "assets/images/mundo3"
check_dir "assets/images/mundo4"
check_dir "assets/images/mundo5"
check_dir "assets/audio"
echo ""

echo "🔊 ARCHIVOS DE AUDIO (aún no añadidos):"
echo -e "${YELLOW}⏳${NC} assets/audio/bg.mp3"
echo -e "${YELLOW}⏳${NC} assets/audio/jump.mp3"
echo -e "${YELLOW}⏳${NC} assets/audio/coin.mp3"
echo -e "${YELLOW}⏳${NC} assets/audio/click.mp3"
echo ""

echo "📷 ARCHIVOS DE IMÁGENES (aún no añadidos):"
echo -e "${YELLOW}⏳${NC} assets/images/intro/img1.png"
echo -e "${YELLOW}⏳${NC} assets/images/intro/img2.png"
echo -e "${YELLOW}⏳${NC} assets/images/mundo1/img{1-6}.png"
echo -e "${YELLOW}⏳${NC} assets/images/mundo2/img{1-7}.png"
echo -e "${YELLOW}⏳${NC} assets/images/mundo3/img{1-3}.png"
echo -e "${YELLOW}⏳${NC} assets/images/mundo4/intro{1-2}.png"
echo -e "${YELLOW}⏳${NC} assets/images/mundo5/img{1-12}.png"
echo -e "${YELLOW}⏳${NC} assets/images/map.png"
echo ""

echo "═════════════════════════════════════════════════════════════"
echo -e "${GREEN}✨ CÓDIGO COMPLETADO - ESPERANDO ASSETS${NC}"
echo "═════════════════════════════════════════════════════════════"
echo ""
echo "Próximos pasos:"
echo "1. Lee START_HERE.md"
echo "2. Obtén imágenes (ASSETS_GUIDE.md)"
echo "3. Obtén audio (ASSETS_GUIDE.md)"
echo "4. Coloca en carpetas correctas"
echo "5. Abre index.html en navegador"
echo "6. ¡Diviértete!"
