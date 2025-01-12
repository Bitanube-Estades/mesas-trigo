
const avalaibleLanguages = ['es', 'en', 'ca', 'fr'];

const defaultLanguage = 'es';

const browserLanguage = (window.navigator.userLanguage || window.navigator.language).substring(0, 2);

let pageLanguage = defaultLanguage;

if (avalaibleLanguages.includes(browserLanguage)) pageLanguage = browserLanguage;

// inicialitzar l'idioma de la landing
langChange(pageLanguage);


async function importLanguage(lang) {
    try{
        const response = await fetch(`/translations/${lang}.json`)
        return response.json();
    } catch {
        alert('Error al cargar las traducciones');
    }

}

export async function langChange(choisedLang) {

    const select = await importLanguage(choisedLang);

    document.documentElement.lang = choisedLang;

    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach((element) => {
        const key = element.getAttribute('data-lang');
        element.innerHTML = select[key]
    })

}