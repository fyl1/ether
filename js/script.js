document.addEventListener("DOMContentLoaded", function (event) {
  const MainVideo = document.querySelector(".mein-video");
  const menu = document.querySelectorAll(".menu");
  const burgerBtn = document.querySelectorAll(".burger");

  MainVideo.play();

  // burgerBtn.addEventListener('click', ()=>{
  //   menu.classList.toggle('menu--open');
  // });
  burgerBtn.forEach((item) => {
    item.addEventListener("click", function () {
      this.parentNode.classList.toggle("menu--open")
      document.body.style.overflow = 'hidden';
      if (this.parentNode.contains != "menu--open") {
        console.log(this.parentNode.contains)
        document.body.style.overflow = 'inherit';
      }
    });

  });
});
