const images = document.querySelectorAll('.full-img')
const texts = document.querySelectorAll('.text-wrapper')

function handler(entries, observer) {
  const [entry] = entries
  if (entry.isIntersecting) {
    images.forEach((image) => (image.style.opacity = 0))
    images[entry.target.dataset.img].style.opacity = 1
  }
}

const config = {
  root: null,
  threshold: 0.9,
}

const observer = new IntersectionObserver(handler, config)

texts.forEach((text) => {
  observer.observe(text)
})

/*-------------nabar--------------*/
var prevScrollpos = window.pageYOffset
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0'
  } else {
    document.getElementById('navbar').style.top = '-50px'
  }
  prevScrollpos = currentScrollPos
}
/*-----------menuclick-------------------*/
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show')
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content')
    var i
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}
/*-----*/
function isInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

const el = document.querySelector('#background_audio')

document.addEventListener('scroll', function () {
  console.log(isInViewport(el))
  if (isInViewport(el)) {
    el.play()
  } else {
    el.pause()
  }
})

const el_vd = document.querySelector('.video-wrapper')
let playState = null
document.addEventListener('scroll', function () {
  if (isInViewport(el_vd)) {
    el_vd.play()
    playState = true
  } else {
    el_vd.pause()
  }
})
