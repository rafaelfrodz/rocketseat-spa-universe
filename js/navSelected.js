export default function (
    sectionHome,
    sectionUniverse,
    sectionExploration
) {

    sectionHome.addEventListener('click', () => {
        sectionHome.classList.add('nav-selected')
        sectionUniverse.classList.remove('nav-selected')
        sectionExploration.classList.remove('nav-selected')
        console.log('test')
        
    })

    sectionUniverse.addEventListener('click', () => {
        sectionUniverse.classList.add('nav-selected')
        sectionHome.classList.remove('nav-selected')
        sectionExploration.classList.remove('nav-selected')
        console.log('test')
    })

    sectionExploration.addEventListener('click', () => {
        sectionExploration.classList.add('nav-selected')
        sectionHome.classList.remove('nav-selected')
        sectionUniverse.classList.remove('nav-selected')
    })

}