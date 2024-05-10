

function slidesPlugin(activeSlide = 0) { // общая функция
    const slides = document.querySelectorAll('.slide') // по css селектору берем slider

    slides[activeSlide].classList.add('active')
    
    // с помощью цикла берем массив slides и вешаем на него событие 
    for (const slide of slides){
        slide.addEventListener('click', () => { // повесили событие клик
            clearActiveClasses() // при клике с других слайдов удаляется класс active
    
            slide.classList.add('active') // добавляем active из css
            
        })
    }
    
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active') // удаляем active из css
        
        })
    }
}

slidesPlugin()