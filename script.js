// ======================================
// İREM & SERTAN DİJİTAL DAVETİYE
// Version 3.3 (Tam Tamına Düzeltilmiş Sürüm)
// ======================================

document.addEventListener("DOMContentLoaded", () => {
    
    // -------------------------------
    // 1. LOADER (YÜKLEME EKRANI KALDIRMA)
    // -------------------------------
    const loader = document.getElementById("loader");
    
    const removeLoader = () => {
        if (loader && loader.style.display !== "none") {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 800);
        }
    };

    // Sayfa tamamen hazır olduğunda loader'ı kaldır
    if (document.readyState === "complete") {
        removeLoader();
    } else {
        window.addEventListener("load", removeLoader);
    }

    // Güvenlik önlemi: Eğer tarayıcı yükleme olayı takılırsa en geç 2 saniyede kapat
    setTimeout(removeLoader, 2000);

    // -------------------------------
    // 2. ZARF AÇMA AKSİYONU
    // -------------------------------
    const btn = document.getElementById("startInvitation");
    const envelope = document.querySelector(".envelope");

    if (btn && envelope) {
        btn.addEventListener("click", () => {
            btn.disabled = true;
            btn.innerHTML = "Açılıyor...";
            
            // Zarf açılma animasyonunu başlat
            envelope.classList.add("open");

            // Animasyon tamamlanınca (1.8s sonra) pürüzsüz sallanmayı başlat
            setTimeout(() => {
                envelope.classList.add("floating");
            }, 1800);

            // Zarf açıldıktan sonra sayfayı geri sayım alanına kaydır
            setTimeout(() => {
                const countdownSection = document.getElementById("countdown");
                if (countdownSection) {
                    countdownSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 2600);
        });

        // Buton parlamasını tetikleyen sürekli animasyon döngüsü
        setInterval(() => {
            btn.style.transition = "box-shadow 1s ease";
            btn.style.boxShadow = "0 0 30px rgba(202,162,77,0.7)";
            setTimeout(() => {
                btn.style.boxShadow = "0 20px 40px rgba(0,0,0,.25)";
            }, 1000);
        }, 2200);
    }

    // -------------------------------
    // 3. GERİ SAYIM SAYACI
    // -------------------------------
    const targetDate = new Date("2026-08-23T18:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

        if (distance <= 0) {
            daysEl.textContent = "00";
            hoursEl.textContent = "00";
            minutesEl.textContent = "00";
            secondsEl.textContent = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, "0");
        hoursEl.textContent = String(hours).padStart(2, "0");
        minutesEl.textContent = String(minutes).padStart(2, "0");
        secondsEl.textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // -------------------------------
    // 4. SCROLL ANİMASYONLARI (KAYDIRMA DETEKTÖRÜ)
    // -------------------------------
    const sections = document.querySelectorAll("section");
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, {
            threshold: 0.1
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    } else {
        sections.forEach(section => section.classList.add("show"));
    }

    // -------------------------------
    // 5. LIGHTBOX (GÖRSEL BÜYÜTME MODAL YAPISI)
    // -------------------------------
    const galleryImages = document.querySelectorAll(".photos img");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.innerHTML = `<img id="lightboxImage" alt="Büyütülmüş Görsel">`;
    document.body.appendChild(lightbox);

    const lightboxImage = document.getElementById("lightboxImage");

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            setTimeout(() => {
                lightbox.style.opacity = "1";
            }, 10);
            if (lightboxImage) lightboxImage.src = img.src;
        });
    });

    const closeLightbox = () => {
        lightbox.style.opacity = "0";
        setTimeout(() => {
            lightbox.style.display = "none";
        }, 300);
    };

    lightbox.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.style.display === "flex") {
            closeLightbox();
        }
    });

    // -------------------------------
    // 6. PARALLAX KAPAK ARKA PLAN EFEKTİ
    // -------------------------------
    const hero = document.querySelector(".hero");
    if (hero) {
        window.addEventListener("scroll", () => {
            const scrolled = window.scrollY;
            hero.style.backgroundPositionY = (scrolled * 0.35) + "px";
        }, { passive: true });
    }

    console.log("%cİrem ❤️ Sertan Dijital Davetiye Başarıyla Yüklendi.", "color:#caa24d;font-size:16px;font-weight:bold;");
});
