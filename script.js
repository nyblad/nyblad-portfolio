//FUNCTION FOR SWAPPING WORDS
const words = ['tech support', 'project management', 'web editing', 'intern controlling'];

let index = 0;

const swapWords = () => {
  document.getElementById("swap-words").innerHTML = words[index++ % words.length]
}

//Set interval of the swapping
setInterval(swapWords, 1000)


//FNCTION FOR SLIDE IN ON SCROLL
const sliderSections = document.querySelectorAll('.slide-in')

const checkSlide = () => {
  sliderSections.forEach(sliderSection => {
    //Half way through the section to slide in
    const slideInAt = (window.scrollY + window.innerHeight) - sliderSection.offsetHeight / 2
    const isHalfShown = slideInAt > sliderSection.offsetTop
    if (isHalfShown) {
      sliderSection.classList.add('active')
    }
  })

}

window.addEventListener('scroll', checkSlide);
