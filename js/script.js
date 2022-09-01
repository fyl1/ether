document.addEventListener("DOMContentLoaded", function (event) {
  const MainVideo = document.querySelector(".mein-video");
  const menu = document.querySelectorAll(".menu");
  const burgerBtn = document.querySelectorAll(".burger");
  const secondVideo = document.querySelector(".second-video");
  const openLink = document.querySelector(".menu--open")

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
  if (menu.contains == "menu--open") {
    console.log("тут что-то есть")
  }
  console.log(openLink)
  menu.forEach((item) => {
    item.addEventListener("click", function (e) {
      console.log(event.target)
      if (event.target == "main-nav__link") {
        console.log("тут что-то есть")
      }
      // this.parentNode.classList.toggle("menu--open")
      // // document.body.style.overflow = 'hidden';
      // // if (this.parentNode.contains != "menu--open") {
      // //   console.log(this.parentNode.contains)
      // //   document.body.style.overflow = 'inherit';
      // // }
    });
  });
  document.querySelector(".sub-video-1").play();
  document.querySelector(".sub-video-2").play();
  setTimeout(() => {
    document.querySelector(".sub-video-1").play();
    document.querySelector(".sub-video-2").play();
    console.log("dddaa")
  }, 5000);

});