/* -------------------------------- 
G2R Mining Solutions - Test Language System
Archivo: test-language-system.js
Descripción: Script para probar el sistema de idiomas
-------------------------------- */

console.log('🧪 PROBANDO SISTEMA DE IDIOMAS');
console.log('==============================');

// Simular diferentes escenarios
const testScenarios = [
    {
        name: 'Primera visita (sin preferencia)',
        localStorage: null,
        urlParams: null,
        browserLang: 'es',
        expected: 'es'
    },
    {
        name: 'Primera visita con navegador en inglés',
        localStorage: null,
        urlParams: null,
        browserLang: 'en',
        expected: 'en'
    },
    {
        name: 'Usuario con preferencia guardada en inglés',
        localStorage: 'en',
        urlParams: null,
        browserLang: 'es',
        expected: 'en'
    },
    {
        name: 'URL con parámetro de idioma',
        localStorage: 'es',
        urlParams: 'en',
        browserLang: 'es',
        expected: 'en'
    }
];

// Función para simular detectLanguage
function simulateDetectLanguage(scenario) {
    // Simular localStorage
    if (scenario.localStorage) {
        localStorage.setItem('g2r-language', scenario.localStorage);
    } else {
        localStorage.removeItem('g2r-language');
    }
    
    // Simular URL params
    if (scenario.urlParams) {
        const url = new URL(window.location);
        url.searchParams.set('lang', scenario.urlParams);
        window.history.replaceState({}, '', url);
    }
    
    // Simular navigator.language
    Object.defineProperty(navigator, 'language', {
        value: scenario.browserLang,
        configurable: true
    });
    
    // Ejecutar detectLanguage
    const detectedLang = window.detectLanguage();
    
    console.log(`✅ ${scenario.name}:`);
    console.log(`   Esperado: ${scenario.expected}`);
    console.log(`   Detectado: ${detectedLang}`);
    console.log(`   Resultado: ${detectedLang === scenario.expected ? '✅ CORRECTO' : '❌ ERROR'}`);
    console.log('');
    
    return detectedLang === scenario.expected;
}

// Ejecutar pruebas
let passedTests = 0;
testScenarios.forEach(scenario => {
    if (simulateDetectLanguage(scenario)) {
        passedTests++;
    }
});

console.log('📊 RESULTADOS:');
console.log('==============');
console.log(`✅ Pruebas pasadas: ${passedTests}/${testScenarios.length}`);
console.log(`❌ Pruebas fallidas: ${testScenarios.length - passedTests}/${testScenarios.length}`);

if (passedTests === testScenarios.length) {
    console.log('🎉 ¡TODAS LAS PRUEBAS PASARON!');
} else {
    console.log('⚠️  Algunas pruebas fallaron');
}

console.log('');
console.log('🔧 FUNCIONES DISPONIBLES:');
console.log('=========================');
console.log('• window.detectLanguage() - Detecta idioma preferido');
console.log('• window.switchLanguage(lang) - Cambia idioma');
console.log('• window.applyLanguageImmediately() - Aplica idioma inmediatamente');
console.log('• window.initializeLanguageSystem() - Inicializa sistema completo');
