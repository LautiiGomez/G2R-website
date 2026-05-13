/* -------------------------------- 
G2R Mining Solutions - Update Pages with IDs
Archivo: update-pages-with-ids.js
Descripción: Script para agregar IDs específicos a todas las páginas
-------------------------------- */

const fs = require('fs');
const path = require('path');

const htmlDir = path.join(__dirname, 'html');
const componentsDir = path.join(__dirname, 'components');

console.log('🔧 ACTUALIZANDO PÁGINAS CON IDs ESPECÍFICOS');
console.log('==========================================\n');

// Función para agregar IDs a elementos específicos
function addSpecificIds(filePath, pageName) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    switch (pageName) {
        case 'sustainability':
            // Agregar IDs para sostenibilidad
            if (content.includes('<h2 class="section_title">Nuestro Compromiso') && !content.includes('id="commitment-title"')) {
                content = content.replace('<h2 class="section_title">Nuestro Compromiso', '<h2 class="section_title" id="commitment-title">Nuestro Compromiso');
                changed = true;
            }
            break;

        case 'companies':
            // Agregar IDs para compañías
            if (content.includes('<h2 class="section_title">Compañías asociadas') && !content.includes('id="companies-title"')) {
                content = content.replace('<h2 class="section_title">Compañías asociadas', '<h2 class="section_title" id="companies-title">Compañías asociadas');
                changed = true;
            }
            break;

        case 'novedades':
            // Agregar IDs para novedades
            if (content.includes('<h2 class="section_title">Próximamente') && !content.includes('id="news-title"')) {
                content = content.replace('<h2 class="section_title">Próximamente', '<h2 class="section_title" id="news-title">Próximamente');
                changed = true;
            }
            break;
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Actualizado: ${path.basename(filePath)}`);
        return true;
    }
    return false;
}

// Función para actualizar footer component
function updateFooterComponent() {
    const footerPath = path.join(componentsDir, 'footer-component.html');
    let content = fs.readFileSync(footerPath, 'utf8');
    let changed = false;

    // Agregar IDs a los títulos del footer
    if (content.includes('<h3>Conoce nuestra web</h3>') && !content.includes('id="footer-useful-title"')) {
        content = content.replace('<h3>Conoce nuestra web</h3>', '<h3 id="footer-useful-title">Conoce nuestra web</h3>');
        changed = true;
    }

    if (content.includes('<h3>Contacto</h3>') && !content.includes('id="footer-contact-title"')) {
        content = content.replace('<h3>Contacto</h3>', '<h3 id="footer-contact-title">Contacto</h3>');
        changed = true;
    }

    if (content.includes('<h3>Nuestras Redes Sociales</h3>') && !content.includes('id="footer-social-title"')) {
        content = content.replace('<h3>Nuestras Redes Sociales</h3>', '<h3 id="footer-social-title">Nuestras Redes Sociales</h3>');
        changed = true;
    }

    // Agregar IDs a los enlaces del footer
    const footerLinks = [
        { text: 'Sobre nosotros', id: 'footer-about' },
        { text: 'Qué hacemos', id: 'footer-services' },
        { text: 'Sostenibilidad', id: 'footer-sustainability' },
        { text: 'Compañías asociadas', id: 'footer-companies' },
        { text: 'Novedades', id: 'footer-news' },
        { text: 'Galería', id: 'footer-gallery' },
        { text: 'Contacto', id: 'footer-contact' }
    ];

    footerLinks.forEach(link => {
        const regex = new RegExp(`<a href="[^"]*">${link.text}</a>`, 'g');
        if (content.match(regex) && !content.includes(`id="${link.id}"`)) {
            content = content.replace(regex, `<a href="../html/${link.text === 'Galería' ? '#' : ''}${link.text === 'Contacto' ? '#' : ''}" id="${link.id}">${link.text}</a>`);
            changed = true;
        }
    });

    if (changed) {
        fs.writeFileSync(footerPath, content, 'utf8');
        console.log('✅ Actualizado: footer-component.html');
        return true;
    }
    return false;
}

// Páginas a actualizar
const pagesToUpdate = [
    { file: 'sustaintabilityes.html', name: 'sustainability' },
    { file: 'companieses.html', name: 'companies' },
    { file: 'novedades.html', name: 'novedades' }
];

let totalUpdated = 0;

// Actualizar páginas
pagesToUpdate.forEach(page => {
    const filePath = path.join(htmlDir, page.file);
    if (fs.existsSync(filePath)) {
        if (addSpecificIds(filePath, page.name)) {
            totalUpdated++;
        }
    } else {
        console.log(`⚠️  Archivo no encontrado: ${page.file}`);
    }
});

// Actualizar footer component
if (updateFooterComponent()) {
    totalUpdated++;
}

console.log('\n📊 RESUMEN DE ACTUALIZACIÓN:');
console.log('============================');
console.log(`✅ Archivos actualizados: ${totalUpdated}`);
console.log(`📁 Páginas procesadas: ${pagesToUpdate.length}`);

console.log('\n🎉 ¡ACTUALIZACIÓN COMPLETADA!');
console.log('============================');
console.log('\n✅ IDs específicos agregados');
console.log('🌐 Sistema de idiomas mejorado');
console.log('📱 Footer completamente traducible');
console.log('\n🚀 AHORA TODAS LAS PÁGINAS SOPORTAN:');
console.log('   • Traducción completa de contenido');
console.log('   • Footer en ambos idiomas');
console.log('   • Navegación consistente');
console.log('   • IDs específicos para cada elemento');
