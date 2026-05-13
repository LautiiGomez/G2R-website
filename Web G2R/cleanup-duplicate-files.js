/* -------------------------------- 
G2R Mining Solutions - Cleanup Duplicate Files
Archivo: cleanup-duplicate-files.js
Descripción: Script para identificar y eliminar archivos duplicados
-------------------------------- */

const fs = require('fs');
const path = require('path');

// Archivos que pueden ser eliminados de forma segura
const filesToDelete = [
    // Páginas principales
    'html/indexen.html',        // Reemplazado por index-unified.html
    'html/indexcn.html',        // Si no se usa, se puede eliminar
    
    // Páginas About
    'html/aboutusen.html',      // Se puede crear versión unificada
    
    // Páginas Services  
    'html/servicesen.html',     // Se puede crear versión unificada
    
    // Páginas Sustainability
    'html/sustaintabilityen.html', // Se puede crear versión unificada
    
    // Páginas Companies
    'html/companiesen.html',    // Se puede crear versión unificada
    
    // Páginas de perfiles
    'html/gabrielgomezen.html', // Se puede crear versión unificada
    'html/carlosgiustozzien.html', // Se puede crear versión unificada
    'html/joseluisraccontoen.html', // Se puede crear versión unificada
    
    // Páginas de contacto
    'html/contactes.html',      // Si existe versión en inglés, se puede unificar
];

// Archivos que NO se deben eliminar (versiones en español)
const filesToKeep = [
    'html/index.html',          // Versión original en español
    'html/aboutuses.html',      // Versión en español
    'html/serviceses.html',     // Versión en español
    'html/sustaintabilityes.html', // Versión en español
    'html/companieses.html',    // Versión en español
    'html/gabrielgomezes.html', // Versión en español
    'html/carlosgiustozzies.html', // Versión en español
    'html/joseluisraccontoes.html', // Versión en español
    'html/novedades.html',      // Nueva página unificada
    'html/index-unified.html',  // Nueva página unificada
];

console.log('🔍 ANÁLISIS DE ARCHIVOS DUPLICADOS');
console.log('=====================================\n');

console.log('📁 ARCHIVOS QUE SE PUEDEN ELIMINAR:');
console.log('-----------------------------------');
filesToDelete.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        const stats = fs.statSync(fullPath);
        console.log(`✅ ${file} (${(stats.size / 1024).toFixed(1)} KB)`);
    } else {
        console.log(`❌ ${file} (No encontrado)`);
    }
});

console.log('\n📁 ARCHIVOS QUE SE MANTIENEN:');
console.log('-----------------------------');
filesToKeep.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        const stats = fs.statSync(fullPath);
        console.log(`✅ ${file} (${(stats.size / 1024).toFixed(1)} KB)`);
    } else {
        console.log(`❌ ${file} (No encontrado)`);
    }
});

console.log('\n💾 ESPACIO LIBERADO:');
console.log('--------------------');
let totalSize = 0;
filesToDelete.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        const stats = fs.statSync(fullPath);
        totalSize += stats.size;
    }
});
console.log(`📊 Total: ${(totalSize / 1024).toFixed(1)} KB (${(totalSize / (1024 * 1024)).toFixed(2)} MB)`);

console.log('\n🚀 PRÓXIMOS PASOS:');
console.log('------------------');
console.log('1. ✅ Crear versiones unificadas de todas las páginas');
console.log('2. ✅ Actualizar header/footer para usar sistema de idiomas');
console.log('3. ✅ Probar que todo funciona correctamente');
console.log('4. ✅ Eliminar archivos duplicados');
console.log('5. ✅ Actualizar enlaces internos');

console.log('\n⚠️  IMPORTANTE:');
console.log('---------------');
console.log('• Hacer backup antes de eliminar archivos');
console.log('• Probar todas las funcionalidades antes de eliminar');
console.log('• Verificar que todos los enlaces funcionen correctamente');

// Función para eliminar archivos (comentada por seguridad)
function deleteFiles() {
    console.log('\n🗑️  ELIMINANDO ARCHIVOS...');
    console.log('-------------------------');
    
    filesToDelete.forEach(file => {
        const fullPath = path.join(__dirname, file);
        if (fs.existsSync(fullPath)) {
            try {
                fs.unlinkSync(fullPath);
                console.log(`✅ Eliminado: ${file}`);
            } catch (error) {
                console.log(`❌ Error eliminando ${file}: ${error.message}`);
            }
        }
    });
    
    console.log('\n🎉 ¡LIMPIEZA COMPLETADA!');
}

// Descomentar la siguiente línea para ejecutar la eliminación
// deleteFiles();
