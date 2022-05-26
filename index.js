//    ===============================
//      Creating a responsive navbar component
//  ===================================  

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const header_elem = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {
  header_elem.classList.toggle('active');
})

//    ===============================
//      Creating a sticky responsive navbar component
//  ===================================  

const heroSec = document.querySelector('.section-hero');

const observer = new IntersectionObserver((entries) => {
  const ent = entries[0];
  // console.log(ent);
  !ent.isIntersecting? document.body.classList.add("sticky"): document.body.classList.remove("sticky");

}, {
  root: null, 
  threshold: 0,
});

observer.observe(heroSec);


//    ===============================
//      Creating a Portfolio tabbed component
//  ===================================  

const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.image-overlay');

p_btns.addEventListener('click', (e) => {
    const p_btn_clicked = e.target;
    // console.log(p_btn_clicked);

if(!p_btn_clicked.classList.contains("p-btn")) return ;

p_btn.forEach((currElem) => currElem.classList.remove('p-btn-active'));

p_btn_clicked.classList.add('p-btn-active');

// to find the number in data attr 
const btn_num = p_btn_clicked.dataset.btnNum;
// console.log(btn_num);

const  img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

p_img_elem.forEach((curElem) => curElem.classList.add('p-image-not-active'));

img_active.forEach((curElem) => curElem.classList.remove('p-image-not-active'));

});


//    ===============================
//      Testomonial Swiper js code
//  ===================================   

    new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }); 

  // for responsive swiper 
  const myJsmedia = (widthSize) =>{
    if(widthSize.matches){
      new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        }); 
    }else{
      new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
      }); 
    }
  }

  const widthSize = window.matchMedia('(max-width: 580px')
  // call listener funciton at run time 
  myJsmedia(widthSize);
  // Attach listener funciton on state changes 
  widthSize.addEventListener('change', myJsmedia)


//    ===============================
//      Scroll to Top Button
//  =================================== 

const heroSection = document.querySelector('.section-hero');
const footerElement = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scroll-top-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElement.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({behavior: "smooth"})
}

scrollElement.addEventListener('click', scrollTop)


//    ===============================
//      smooth scrolling effects on
//  ===================================

const porfolioSec = document.querySelector(".section-portfolio")
const contactSec = document.querySelector(".section-contact")

document.querySelector(".portfolio-link").addEventListener('click', () =>{
  porfolioSec.scrollIntoView({behavior: "smooth"});
});


document.querySelector(".hireme-btn").addEventListener('click', (e) =>{
  e.preventDefault();
  contactSec.scrollIntoView({behavior: "smooth"});
});


//    ===============================
//      animate number counter
//  =================================== 

const workSection = document.querySelector('.section-work-data');

const workObserver = new IntersectionObserver((entries, observer) => {
  const [entry] = entries;
  // console.log(entry);

  // if(entry.isIntersecting == false)
if (!entry.isIntersecting) return;

const counterNum = document.querySelectorAll('.counter-numbers');

let speed = 100;

counterNum.forEach((curElem) => {
const updateNumber = () => {
  const targetNumber = parseInt(curElem.dataset.number);
  // console.log(targetNumber);
  const initialNum = parseInt(curElem.innerText);  
  // console.log(initialNum);

  const incrementNumber = Math.trunc(targetNumber / speed);
  // console.log(incrementNumber);

  if(initialNum < targetNumber){
    curElem.innerText = `${initialNum + incrementNumber}+`;
    
    setTimeout(updateNumber,10);
  }
};

updateNumber();

});

observer.unobserve(workSection);

}, {
  root: null,
  threshold: 0,
});

workObserver.observe(workSection);


//    ===============================
//      lazy loading images
//  ===================================

const imgRef = document.querySelector("img[data-src]")

const lazyImg = (entries) => {
  const [entry] = entries;        //will use foreach to target more than one pic
  console.log(entry);
  if(!entry.isIntersecting) return;
  entry.target.src = imgRef.dataset.src;
}

const imgObserver = new IntersectionObserver(lazyImg, {
  root: null,
  threshold: 0,
});

imgObserver.observe(imgRef);




