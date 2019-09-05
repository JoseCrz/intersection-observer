const $specialBox = document.querySelector('#special-box')

const options = {
    //root,
    //rootMargin: ,
    threshold: 1,
}

function callback (entries, observer) {
    console.log('callback called')
    if (entries[0].isIntersecting) {
        $specialBox.classList.add('teal')
    }
}

const observer = new IntersectionObserver(callback, options)

observer.observe($specialBox)
