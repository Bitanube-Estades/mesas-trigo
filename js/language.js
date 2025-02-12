


const avalaibleLanguages = ['es', 'en', 'ca', 'fr'];

const defaultLanguage = 'es';

const browserLanguage = (window.navigator.userLanguage || window.navigator.language).substring(0, 2);

let pageLanguage = defaultLanguage;

if (avalaibleLanguages.includes(browserLanguage)) pageLanguage = browserLanguage;

// Guardar el idioma por si refresca o navega
pageLanguage = localStorage.getItem('chosed_lang') ?? pageLanguage;

// inicialitzar l'idioma de la landing
langChange(pageLanguage);


async function importLanguage(lang) {
    try{
        // const response = await fetch(`/translations/${lang}.json`)
        const response = await fetch(`https://raw.githubusercontent.com/Bitanube-Estades/mesas-trigo/refs/heads/main/translations/${lang}.json`)
        return response.json();
    } catch {
        alert('Error al cargar las traducciones');
    }

}

export async function langChange(choisedLang) {
    if (choisedLang === undefined) {
        choisedLang = 'es';
    }
    // Si cambia de idioma, guardarlo para siguientes accesos / refrescar
    if (choisedLang && choisedLang != localStorage.getItem('chosed_lang')) {
        localStorage.setItem('chosed_lang',choisedLang);
    }

    const select = await importLanguage(choisedLang);

    document.documentElement.lang = choisedLang;

    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach((element) => {
        try {
            const key = element.getAttribute('data-lang');
            element.innerHTML = select[key]
        } catch(e) {
            console.warn(e);
        }
    })

}

// ---------------- mostrar opcions idiomes footer -------------------------
export const globe = $(".globe");
export const languagesOptions = $(".languages-options");

export function showLanguagesOptions() {
    languagesOptions.toggleClass("show");
}

export async function onClickLanguagesOptions(e) {
    e.preventDefault();
    await langChange(e.target.id);
    showLanguagesOptions();
}

export function onClickGlobe(e) {
    e.stopPropagation();
    showLanguagesOptions();
}