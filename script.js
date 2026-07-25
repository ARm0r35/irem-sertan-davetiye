// ======================================
// İREM & SERTAN DİJİTAL DAVETİYE
// ======================================

// -------------------------------
// LOADER
// -------------------------------

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

// -------------------------------
// HERO ANİMASYONU
// -------------------------------

window.addEventListener("load", () => {

    const hero = document.querySelector(".heroContent");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(60px)";

    setTimeout(() => {

        hero.style.transition = "1.2s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0px)";

    }, 1300);

});

// -------------------------------
// ZARF
// -------------------------------

const button = document.getElementById("openInvitation");

const envelope = document.querySelector(".envelope");

const letter = document.querySelector(".letter");

button.addEventListener("click", () => {

    document.getElementById("envelopeSection").scrollIntoView({

        behavior: "smooth"

    });

    setTimeout(() => {

        envelope.classList.add("open");

    }, 700);

});

// -------------------------------
// GERİ SAYIM
// -------------------------------

const weddingDate = new Date("2026-08-23T18:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown, 1000);

// -------------------------------
// FOTOĞRAF ANİMASYONU
// -------------------------------

const photos = document.querySelectorAll(".photos img");

const photoObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.2

});

photos.forEach(photo => {

    photo.style.opacity = "0";

    photo.style.transform = "translateY(80px)";

    photo.style.transition = "1s";

    photoObserver.observe(photo);

});

// -------------------------------
// SECTION ANİMASYONU
// -------------------------------

const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.animate(

                [

                    {

                        opacity: 0,

                        transform: "translateY(60px)"

                    },

                    {

                        opacity: 1,

                        transform: "translateY(0)"

                    }

                ],

                {

                    duration: 900,

                    fill: "forwards",

                    easing: "ease"

                }

            );

            sectionObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

sections.forEach(section => {

    section.style.opacity = "0";

    sectionObserver.observe(section);

});

// -------------------------------
// BUTON EFEKTİ
// -------------------------------

button.addEventListener("mousedown", () => {

    button.style.transform = "scale(.96)";

});

button.addEventListener("mouseup", () => {

    button.style.transform = "";

});

button.addEventListener("mouseleave", () => {

    button.style.transform = "";

});

// -------------------------------
// HAFİF DAVETİYE HAREKETİ
// -------------------------------

setTimeout(() => {

    if (envelope.classList.contains("open")) {

        letter.animate(

            [

                {

                    transform: "translateX(-50%) translateY(-270px)"

                },

                {

                    transform: "translateX(-50%) translateY(-280px)"

                },

                {

                    transform: "translateX(-50%) translateY(-270px)"

                }

            ],

            {

                duration: 3000,

                iterations: Infinity

            }

        );

    }

}, 2500);
