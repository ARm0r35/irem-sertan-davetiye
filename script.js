// ======================================
// İREM & SERTAN DAVETİYE
// script.js
// ======================================

// -------------------------------
// LOADER
// -------------------------------

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

const hero=document.querySelector(".hero-content");

hero.style.opacity="0";
hero.style.transform="translateY(50px)";

setTimeout(()=>{

loader.style.opacity="0";

hero.style.transition="1.2s ease";
hero.style.opacity="1";
hero.style.transform="translateY(0)";

setTimeout(()=>{

loader.style.display="none";

},900);

},1200);

});

// -------------------------------
// ZARFI AÇ
// -------------------------------

const button=document.getElementById("openInvitation");

const envelope=document.querySelector(".envelope");

button.addEventListener("click",()=>{

button.disabled=true;

button.innerHTML="Açılıyor...";

document.getElementById("envelopeSection").scrollIntoView({

behavior:"smooth"

});

setTimeout(()=>{

envelope.classList.add("open");

},700);

setTimeout(()=>{

envelope.classList.add("float");

},1800);

setTimeout(()=>{

document.getElementById("countdown").scrollIntoView({

behavior:"smooth"

});

},3200);

});

// -------------------------------
// GERİ SAYIM
// -------------------------------

const wedding=new Date("2026-08-23T18:00:00").getTime();

function countdown(){

const now=new Date().getTime();

const distance=wedding-now;

if(distance<=0){

days.textContent="00";
hours.textContent="00";
minutes.textContent="00";
seconds.textContent="00";

return;

}

const d=Math.floor(distance/(1000*60*60*24));

const h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const m=Math.floor((distance%(1000*60*60))/(1000*60));

const s=Math.floor((distance%(1000*60))/1000);

days.textContent=String(d).padStart(2,"0");
hours.textContent=String(h).padStart(2,"0");
minutes.textContent=String(m).padStart(2,"0");
seconds.textContent=String(s).padStart(2,"0");

}

const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");

countdown();

setInterval(countdown,1000);
// -------------------------------
// SCROLL ANİMASYONLARI
// -------------------------------

const sections=document.querySelectorAll("section");

const sectionObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

sections.forEach(section=>{

sectionObserver.observe(section);

});

// -------------------------------
// GALERİ ANİMASYONU
// -------------------------------

const photos=document.querySelectorAll(".photos img");

const photoObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0) scale(1)";

}

});

},{
threshold:0.2
});

photos.forEach(photo=>{

photo.style.opacity="0";
photo.style.transform="translateY(60px) scale(.95)";
photo.style.transition="1s";

photoObserver.observe(photo);

});

// -------------------------------
// LIGHTBOX
// -------------------------------

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML=`
<img id="lightboxImage">
`;

document.body.appendChild(lightbox);

const lightboxImage=document.getElementById("lightboxImage");

photos.forEach(photo=>{

photo.addEventListener("click",()=>{

lightbox.style.display="flex";

setTimeout(()=>{

lightbox.style.opacity="1";

},20);

lightboxImage.src=photo.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.opacity="0";

setTimeout(()=>{

lightbox.style.display="none";

},300);

});

// -------------------------------
// BUTON HOVER EFEKTİ
// -------------------------------

button.addEventListener("mouseenter",()=>{

button.style.boxShadow="0 25px 45px rgba(202,162,77,.45)";

});

button.addEventListener("mouseleave",()=>{

button.style.boxShadow="0 20px 40px rgba(0,0,0,.25)";

});

// -------------------------------
// PARALLAX
// -------------------------------

window.addEventListener("scroll",()=>{

const scroll=window.scrollY;

document.querySelector(".hero").style.backgroundPositionY=(scroll*0.4)+"px";

});

// -------------------------------
// KONSOL
// -------------------------------

console.log("İrem & Sertan Dijital Davetiye Yüklendi ❤️");
