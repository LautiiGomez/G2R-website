// Script para implementar componentes reutilizables en todas las páginas
// G2R Mining Solutions

const fs = require('fs');
const path = require('path');

// Lista de páginas a actualizar
const pages = [
    'index.html',
    'aboutusen.html',
    'carlosgiustozzien.html',
    'carlosgiustozzies.html',
    'companiesen.html',
    'companieses.html',
    'contactes.html',
    'gabrielgomezen.html',
    'gabrielgomezes.html',
    'indexcn.html',
    'indexen.html',
    'joseluisraccontoen.html',
    'joseluisraccontoes.html',
    'privacypolicees.html',
    'servicesen.html',
    'serviceses.html',
    'sustaintabilityen.html',
    'sustaintabilityes.html'
];

// Función para extraer el contenido principal (sin header y footer)
function extractMainContent(htmlContent) {
    // Remover header completo
    let content = htmlContent.replace(/<header[\s\S]*?<\/header>/gi, '');
    
    // Remover footer completo
    content = content.replace(/<footer[\s\S]*?<\/footer>/gi, '');
    
    // Remover nav suelto si existe
    content = content.replace(/<nav[\s\S]*?<\/nav>/gi, '');
    
    // Remover top-menu suelto si existe
    content = content.replace(/<div class="top-menu"[\s\S]*?<\/div>/gi, '');
    
    // Extraer solo el contenido entre <body> y </body>
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
        content = bodyMatch[1];
    }
    
    return content.trim();
}

// Función para obtener el título de la página
function getPageTitle(filename) {
    const titles = {
        'index.html': 'Inicio',
        'aboutusen.html': 'About Us',
        'aboutuses.html': 'Sobre nosotros',
        'carlosgiustozzien.html': 'Carlos Giustozzi',
        'carlosgiustozzies.html': 'Carlos Giustozzi',
        'companiesen.html': 'Associated Companies',
        'companieses.html': 'Compañías Asociadas',
        'contactes.html': 'Contacto',
        'gabrielgomezen.html': 'Gabriel Gomez',
        'gabrielgomezes.html': 'Gabriel Gomez',
        'indexcn.html': '首页',
        'indexen.html': 'Home',
        'joseluisraccontoen.html': 'Jose Luis Racconto',
        'joseluisraccontoes.html': 'Jose Luis Racconto',
        'privacypolicees.html': 'Política de Privacidad',
        'servicesen.html': 'Services',
        'serviceses.html': 'Servicios',
        'sustaintabilityen.html': 'Sustainability',
        'sustaintabilityes.html': 'Sostenibilidad'
    };
    
    return titles[filename] || filename.replace('.html', '');
}

// Función para obtener el CSS específico de la página
function getPageCSS(filename) {
    const cssMap = {
        'index.html': '../css/inicio.css',
        'aboutusen.html': '../css/aboutus.css',
        'aboutuses.html': '../css/aboutus.css',
        'carlosgiustozzien.html': '../css/carlosgiustozzi.css',
        'carlosgiustozzies.html': '../css/carlosgiustozzi.css',
        'companiesen.html': '../css/companies.css',
        'companieses.html': '../css/companies.css',
        'contactes.html': '../css/contact.css',
        'gabrielgomezen.html': '../css/gabrielgomez.css',
        'gabrielgomezes.html': '../css/gabrielgomez.css',
        'indexcn.html': '../css/inicio.css',
        'indexen.html': '../css/inicio.css',
        'joseluisraccontoen.html': '../css/joseluisracconto.css',
        'joseluisraccontoes.html': '../css/joseluisracconto.css',
        'privacypolicees.html': '../css/privacypolice.css',
        'servicesen.html': '../css/services.css',
        'serviceses.html': '../css/services.css',
        'sustaintabilityen.html': '../css/sustaintability.css',
        'sustaintabilityes.html': '../css/sustaintability.css'
    };
    
    return cssMap[filename] || '../css/inicio.css';
}

// Template para páginas actualizadas
const pageTemplate = (title, content, cssFile) => `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | G2R Mining Solutions</title>
    <link rel="stylesheet" href="../css/inicio.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="${cssFile}">
    <link rel="website icon" href="../imagenes/Diseño_sin_título__6_-removebg-preview.png">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet"/>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Righteous&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header placeholder - se carga automáticamente -->
    <div id="header-placeholder"></div>

    <!-- Contenido específico de la página -->
    ${content}

    <!-- Footer placeholder - se carga automáticamente -->
    <div id="footer-placeholder"></div>

    <!-- JavaScript para cargar componentes -->
    <script src="../js/components.js"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
    <script src="../js/contact.js"></script>
</body>
</html>`;

// Función principal
function implementComponents() {
    const htmlDir = path.join(__dirname, 'html');
    
    console.log('🚀 Iniciando implementación de componentes reutilizables...\n');
    
    pages.forEach(pageName => {
        const filePath = path.join(htmlDir, pageName);
        
        if (fs.existsSync(filePath)) {
            try {
                const originalContent = fs.readFileSync(filePath, 'utf8');
                const mainContent = extractMainContent(originalContent);
                const title = getPageTitle(pageName);
                const cssFile = getPageCSS(pageName);
                const newContent = pageTemplate(title, mainContent, cssFile);
                
                // Crear backup
                const backupPath = path.join(htmlDir, `${pageName}.backup-components`);
                fs.writeFileSync(backupPath, originalContent);
                
                // Escribir nueva versión
                fs.writeFileSync(filePath, newContent);
                
                console.log(`✅ Actualizada: ${pageName}`);
            } catch (error) {
                console.error(`❌ Error actualizando ${pageName}:`, error.message);
            }
        } else {
            console.log(`⚠️  Archivo no encontrado: ${pageName}`);
        }
    });
    
    console.log('\n🎉 ¡Implementación completada!');
    console.log('📁 Backups creados con extensión .backup-components');
    console.log('🔄 Todas las páginas ahora usan header y footer reutilizables');
    console.log('\n📝 Próximos pasos:');
    console.log('1. Prueba las páginas en el navegador');
    console.log('2. Verifica que el header y footer funcionen correctamente');
    console.log('3. Si hay problemas, puedes restaurar desde los backups');
}

// Ejecutar si se llama directamente
if (require.main === module) {
    implementComponents();
}

module.exports = { implementComponents, pageTemplate, extractMainContent, getPageTitle, getPageCSS };
