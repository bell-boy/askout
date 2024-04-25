import { Slide } from "./interfaces.js";

let slide_1 = new Slide('slide1.html')
let slide_2 = new Slide('slide2.html')
let slide_3 = new Slide('slide3.html')
let slide_4 = new Slide('slide4.html')
let slide_5 = new Slide('slide5.html')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let start = async () => {
    let hlb = new Audio('./Hotline Bling - Drake low quality.mp3')
    hlb.play()

    document.getElementById("slide").remove()
    document.body.appendChild(slide_1.html_object)
    await sleep(1000)
    slide_1.next()
    await sleep(2000)
    slide_1.next()
    await sleep(2000)
    slide_1.next()
    await sleep(2000)

    document.getElementById("slide").remove()
    document.body.appendChild(slide_2.html_object)
    await sleep(2000)
    slide_2.next()
    await sleep(2000)
    slide_2.next()
    await sleep(2000)
    slide_2.next()
    await sleep(2000)
    
    document.getElementById("slide").remove()
    document.body.appendChild(slide_3.html_object)
    await sleep(2000)
    slide_3.next()
    await sleep(2000)
    slide_3.next()
    await sleep(2000)
    slide_3.next()
    await sleep(2000)

    document.getElementById("slide").remove()
    document.body.appendChild(slide_4.html_object)
    await sleep(2000)
    slide_4.next()
    await sleep(2000)
    slide_4.next()
    await sleep(2000)
    slide_4.next()
    await sleep(2000)
    slide_4.next()
    await sleep(2000)

    document.location.href = "./question.html"


}

document.getElementById("start").onclick = start