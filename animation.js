const text= "Indonesia Menuju";
const text2= "Society Era 5.0";
let index = 0;
let index2 = 0;
let letter ="";
let letter2 ="";
let angka = 0;
(function type(){
    letter = text.slice(0,++index);
    document.querySelector(".typing").textContent = letter;
        setTimeout(type,200);
        if(letter.length === 15){
            (function type2(){
                letter2 = text2.slice(0,++index2);
                document.querySelector(".typing2").textContent = letter2;
                    setTimeout(type2,200);
            })();
        }     
})();


let swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    loopFillGroupWithBlank: false,
    navigation: {
      nextEl: '.swiper-button-next ',
      prevEl: '.swiper-button-prev',
    },
  });
  
  
  AOS.init({
    offset:400,
    duration:1000,
    once: false,
  });

  