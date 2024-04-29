let main =  document.querySelector('#main')

let cursor = document.querySelector('.cursor')

let image = document.querySelector('.image')

main.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y
    })
})

image.addEventListener('mouseenter', () => {
    cursor.textContent = "View More";
    gsap.to(cursor, {
        scale: 4,
        duration: .3,
    })
})
image.addEventListener('mouseleave', () => {
    cursor.textContent = "";
    gsap.to(cursor, {
        scale: 1,
        duration: .3,
    })
})

