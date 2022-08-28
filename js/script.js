document.addEventListener("DOMContentLoaded", function (event) {
  const MainVideo = document.querySelector(".mein-video");
  const menu = document.querySelectorAll(".menu");
  const burgerBtn = document.querySelectorAll(".burger");
  const secondVideo = document.querySelector(".second-video");
  const openLink = document.querySelectorAll(".menu .menu--open .main-nav__link")

  // MainVideo.play();
  // secondVideo.play();
  document.querySelector(".second-video").play();
  document.querySelector(".mein-video").play();

  // burgerBtn.addEventListener('click', ()=>{
  //   menu.classList.toggle('menu--open');
  // });

  burgerBtn.forEach((item) => {
    item.addEventListener("click", function () {
      this.parentNode.classList.toggle("menu--open")
      // document.body.style.overflow = 'hidden';
      // if (this.parentNode.contains != "menu--open") {
      //   console.log(this.parentNode.contains)
      //   document.body.style.overflow = 'inherit';
      // }
    });

  });
  openLink.forEach((item) => {
    console.log("тут вообеще что-то происходит 1")
    item.addEventListener("click", function () {
      console.log("тут вообеще что-то происходит 2")
      for (var i = 0; i < menu.length; i++) {
          menu[i].classList.remove('menu--open');
          menu[i].onclick = function (event) {
              console.log("ONCLICK");
              //remove all active class
              removeClass();
          }
      }
      
      function removeClass(){
        for (var i = 0; i < menu.length; i++) {
          menu[i].classList.remove('menu--open');
        }
      }
    });
  });

});