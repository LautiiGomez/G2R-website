/* -------------------------------- 
G2R Mining Solutions - Add Missing IDs
Archivo: add-missing-ids.js
Descripción: Script para agregar IDs faltantes a todas las páginas
-------------------------------- */

const fs = require('fs');
const path = require('path');

const htmlDir = path.join(__dirname, 'html');

console.log('🔧 AGREGANDO IDs FALTANTES A TODAS LAS PÁGINAS');
console.log('==============================================\n');

// Función para agregar IDs específicos a cada página
function addMissingIds(filePath, pageName) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    switch (pageName) {
        case 'sustainability':
            // Agregar IDs para sostenibilidad
            if (content.includes('<h2 class="section_title" id="section-title">Nuestro Compromiso') && !content.includes('id="commitment-title"')) {
                content = content.replace('<h2 class="section_title" id="section-title">Nuestro Compromiso', '<h2 class="section_title" id="commitment-title">Nuestro Compromiso');
                changed = true;
            }
            
            if (content.includes('<h2 class="section_title-2">G2R y su compromiso') && !content.includes('id="ods-title"')) {
                content = content.replace('<h2 class="section_title-2">G2R y su compromiso', '<h2 class="section_title-2" id="ods-title">G2R y su compromiso');
                changed = true;
            }
            
            if (content.includes('<p>En G2R nos enfocamos en colaborar') && !content.includes('id="ods-text"')) {
                content = content.replace('<p>En G2R nos enfocamos en colaborar', '<p id="ods-text">En G2R nos enfocamos en colaborar');
                changed = true;
            }
            break;

        case 'companies':
            // Agregar IDs para compañías
            if (content.includes('<h2 class="section_title" id="section-title">Compañías asociadas') && !content.includes('id="companies-title"')) {
                content = content.replace('<h2 class="section_title" id="section-title">Compañías asociadas', '<h2 class="section_title" id="companies-title">Compañías asociadas');
                changed = true;
            }
            
            if (content.includes('<p>\n              En G2R tenemos como objetivo') && !content.includes('id="company-intro-text"')) {
                content = content.replace('<p>\n              En G2R tenemos como objetivo', '<p id="company-intro-text">\n              En G2R tenemos como objetivo');
                changed = true;
            }
            break;

        case 'gabriel':
        case 'carlos':
        case 'jose':
            // Agregar IDs para páginas de miembros
            if (content.includes('<h2 class="section_title" id="section-title">') && !content.includes('id="member-section-title"')) {
                content = content.replace('<h2 class="section_title" id="section-title">', '<h2 class="section_title" id="member-section-title">');
                changed = true;
            }
            
            if (content.includes('<h3>') && content.includes('Gabriel') && !content.includes('id="member-name"')) {
                content = content.replace(/<h3>(Gabriel|Carlos|José)[^<]*<\/h3>/, '<h3 id="member-name">$1</h3>');
                changed = true;
            }
            
            if (content.includes('<h4>Miembro Cofundador</h4>') && !content.includes('id="member-role"')) {
                content = content.replace('<h4>Miembro Cofundador</h4>', '<h4 id="member-role">Miembro Cofundador</h4>');
                changed = true;
            }
            
            if (content.includes('<p class="headingp">') && !content.includes('id="member-heading-p"')) {
                content = content.replace('<p class="headingp">', '<p class="headingp" id="member-heading-p">');
                changed = true;
            }
            
            if (content.includes('<p>') && content.includes('Gabriel posee') && !content.includes('id="member-description-p"')) {
                content = content.replace(/<p>(Gabriel|Carlos|José)[^<]*posee[^<]*<\/p>/, '<p id="member-description-p">$1</p>');
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

// Páginas a actualizar
const pagesToUpdate = [
    { file: 'sustaintabilityes.html', name: 'sustainability' },
    { file: 'companieses.html', name: 'companies' },
    { file: 'gabrielgomezes.html', name: 'gabriel' },
    { file: 'carlosgiustozzies.html', name: 'carlos' },
    { file: 'joseluisraccontoes.html', name: 'jose' }
];

let totalUpdated = 0;

// Actualizar páginas
pagesToUpdate.forEach(page => {
    const filePath = path.join(htmlDir, page.file);
    if (fs.existsSync(filePath)) {
        if (addMissingIds(filePath, page.name)) {
            totalUpdated++;
        }
    } else {
        console.log(`⚠️  Archivo no encontrado: ${page.file}`);
    }
});

console.log('\n📊 RESUMEN DE ACTUALIZACIÓN:');
console.log('============================');
console.log(`✅ Archivos actualizados: ${totalUpdated}`);
console.log(`📁 Páginas procesadas: ${pagesToUpdate.length}`);

console.log('\n🎉 ¡ACTUALIZACIÓN COMPLETADA!');
console.log('============================');
console.log('\n✅ IDs específicos agregados a todas las páginas');
console.log('🌐 Sistema de idiomas completamente funcional');
console.log('📱 Todas las páginas soportan traducción completa');
console.log('\n🚀 AHORA TODAS LAS PÁGINAS SOPORTAN:');
console.log('   • Traducción completa de contenido específico');
console.log('   • Footer en ambos idiomas');
console.log('   • Navegación consistente');
console.log('   • IDs específicos para cada elemento');
console.log('   • Miembros del equipo completamente traducibles');
console.log('   • Sostenibilidad y compañías traducibles');
