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
  // document.querySelector(".mein-video-1").play();
  // document.querySelector(".mein-video-2").play();
  // document.querySelector(".sub-video-1").play();
  // document.querySelector(".sub-video-2").play();

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
  // if (menu.contains == "menu--open") {
  //   console.log("тут что-то есть")
  // }
  // console.log(openLink)
  // menu.forEach((item) => {
  //   item.addEventListener("click", function (e) {
  //     console.log(event.target)
  //     if (event.target == "main-nav__link") {
  //       console.log("тут что-то есть")
  //     }
  //     // this.parentNode.classList.toggle("menu--open")
  //     // // document.body.style.overflow = 'hidden';
  //     // // if (this.parentNode.contains != "menu--open") {
  //     // //   console.log(this.parentNode.contains)
  //     // //   document.body.style.overflow = 'inherit';
  //     // // }
  //   });
  // });

  // setTimeout(() => {
  //   document.querySelector(".sub-video-1").play();
  //   document.querySelector(".sub-video-2").play();
  //   console.log("dddaa")
  // }, 5000);

  //  setTimeout(() => {
  //   let parentEl_1 = document.querySelector(".price__img--1");
  //   let parentEl_2 = document.querySelector(".price__img--2");
  //        img_1 = document.createElement("IMG");
  //        img_1.src = "video/Фото_(front)_1.gif";
  //        img_2 = document.createElement("IMG");
  //        img_2.src = "video/Фото_(back)_1.gif";
  //   parentEl_1.appendChild(img_1);
  //   parentEl_2.appendChild(img_2);
  //   console.log("dddaa")
  //  }, 5000);
});