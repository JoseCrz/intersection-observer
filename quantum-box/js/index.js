const $quantumBox = document.querySelector('#quantum-box')

const options = {
    //root,
    rootMargin: '600px 0px 600px 0px',
    threshold: 0,
}

function callback (entries, observer) {
    console.log('callback called')
    if (entries[0].isIntersecting) {
        $quantumBox.classList.add('red')
    } else {
        $quantumBox.classList.remove('red')
    }
}

const observer = new IntersectionObserver(callback, options)

observer.observe($quantumBox)
