async function importLanguage(lang) {
    try{
        const response = await fetch(`/translations/${lang}.json`)
        return response.json();
    } catch {
        alert('Error al cargar las traducciones');
    }

}

const avalaibleLanguages = ['es', 'en'];

const defaultLanguage = 'en';

const browserLanguage = (window.navigator.userLanguage || window.navigator.language).substring(0, 2);

let pageLanguage = defaultLanguage;

if (avalaibleLanguages.includes(browserLanguage)) pageLanguage = browserLanguage

langChange(pageLanguage);

const flags = document.querySelectorAll(".flag");

flags.forEach(flag=>{
    flag.addEventListener("click", (e) =>{
        e.preventDefault();
        langChange(e.currentTarget.id);
    })
})


async function langChange(choisedLang) {

    const select = await importLanguage(choisedLang);

    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach((element) => {
        const key = element.getAttribute('data-lang');
        element.innerHTML = select[key]
    })

}