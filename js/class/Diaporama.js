export class Diaporama {
    constructor(diapo) {
        this.diapo = document.querySelector("#diapo") || diapo;
        this.prevBtn = document.querySelector("#left");
        this.nextBtn = document.querySelector("#right");
        this.active = document.querySelector(".active") || this.diapo?.firstElementChild;
        if(!this.active) {
            this.active.classList.add("active");
        }
        this.interval();
        this.addEventListener();
    }

    interval() {
        this.intervalTime = setInterval(() => this.nextSlide(), 5000);
    }

    addEventListener() {
        this.nextBtn.addEventListener("click", () => this.nextSlide());
        this.prevBtn.addEventListener("click", () => this.prevSlide());
        this.diapo.addEventListener("mouseenter", () => clearInterval(this.intervalTime));
        this.diapo.addEventListener("mouseleave", () => {
            this.intervalTime = setInterval(() => this.nextSlide(), 5000);
        });
    }

    nextSlide() {
        this.active.classList.remove("active");

        if (this.active.nextElementSibling) {
            this.active = this.active.nextElementSibling;
        } else {
            this.active = this.active.parentElement.firstElementChild;
        }

        this.active.classList.add("active");
    }

    prevSlide() {
        this.active.classList.remove("active");

        if (this.active.previousElementSibling) {
            this.active = this.active.previousElementSibling;
        } else {
            this.active = this.active.parentElement.lastElementChild;
        }

        this.active.classList.add("active");
    }

}
