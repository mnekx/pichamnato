let slideIndex = 1;
showSlide(slideIndex);

function leteNyingine(n) {
  slideIndex += n;
  console.log(slideIndex);
  showSlide(slideIndex);
}

function mpangusoHuu(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  let slides = document.getElementsByClassName("kipanguso");
  let dots = document.getElementsByClassName("dot");

  if (n < 1) slideIndex = slides.length;
  if (n > slides.length) slideIndex = 1;
  for (let index = 0; index < slides.length; index++) {
    slides[index].style.display = "none";
  }
  for (let index = 0; index < dots.length; index++) {
    dots[index].className = dots[index].className.replace(" active", "");
    // dots[index].className = ""; Kwa njia hii utaondoa na classes zilizopo
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].childNodes.forEach((item) => {
    if (item.className === "maelezo" || item.className === "maelezo") {
      item.style.opacity = 1;
    }
  });
  slides[slideIndex].classList.dots[slideIndex - 1].className += " active";
  // console.log("dot class name", dots[slideIndex - 1].className);

  // Automatiki picha mpanguso
  setTimeout(() => showSlide(++slideIndex), 3000);
}
