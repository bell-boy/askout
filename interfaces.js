class Slide {
    constructor(html_path) {
        fetch(html_path).then(res => res.text()).then(text => {
            this.html_object = new DOMParser().parseFromString(text, "text/html").body.firstChild
            this.html_object.id = "slide"
            this.hidden_images = Array.from(this.html_object.children).filter(e => e.tagName == "IMG")

            this.hidden_images.forEach(e => {
                e.style.opacity = "0.0"
                e.style.transition = "all 0.5s"
            })

            this.slide_count = 0
        });

    }

    next() {
        if(this.slide_count < this.hidden_images.length) {
            this.increment();
            return true
        } else {
            return false
        }
    }

    increment() {
        this.hidden_images[this.slide_count].style.opacity = "1.0"
        this.slide_count++;
    }
}

export {Slide}