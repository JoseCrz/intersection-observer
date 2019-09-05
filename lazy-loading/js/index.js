const $gallery = document.querySelector('#gallery')
const $images = document.querySelectorAll('.image')
console.log($gallery, $images)

const options = {
    rootMargin: '0px 0px 1000px 0px',
    threshold: 0,
}

function lazyLoading (entries, observer) {
    console.log('gallery observed')

    if (entries[0].isIntersecting) {
        $images.forEach( $image => {
            const src = $image.getAttribute('data-lazy')
            $image.setAttribute('src', src)

        })

        console.log('observer disconnected!')
        observer.disconnect()

    } else {
        console.log('Not intersecting')

    }
    
    
}
const observer = new IntersectionObserver(lazyLoading, options)

observer.observe($gallery)