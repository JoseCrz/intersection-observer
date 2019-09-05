const $specialBox = document.querySelector('.special.box')

function callback (entries, observer) {
    console.log('callback called')
}

const options = {
    //root,
    //rootMargin: ,
    threshold: 0,
}


const observer = new IntersectionObserver(callback, options)

observer.observe($specialBox)
