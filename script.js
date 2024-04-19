"use strict";

//slider
const dataSlider = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "title 1",
  },
  {
    id: 2,
    imageUrl:
      "https://www.ripemedia.com/wp-content/uploads/2022/01/Website-Design-Trends.jpeg",
    title: "title 2",
  },
  {
    id: 3,
    imageUrl: "https://cdn.wallpapersafari.com/48/11/uRFcp7.jpeg",
    title: "title 3",
  },
  {
    id: 4,
    imageUrl:
      "https://www.zeeclick.com/wp-content/uploads/2021/09/Web-Development.jpeg",
    title: "title 4",
  },
];

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const sliderContent = document.getElementById("slider-content");
let sliderIndex = 0;

function createDivtag() {
  let divEl = document.createElement("div");
  return divEl;
}

function createImgtag(item) {
  const tagImage = document.createElement("img");
  tagImage.src = item.imageUrl;
  tagImage.classList.add("image-el");
  return tagImage;
}

function createTitletag(item) {
  const h2Title = document.createElement("h2");
  h2Title.innerText = item.title;

  return h2Title;
}

function createDots() {
  const dotParent = document.createElement("div");
  dotParent.classList.add("dots-parent");

  dataSlider.forEach((Element) => {
    const dotChild = document.createElement("div");
    dotChild.classList.add("dot-child");
    dotChild.setAttribute("data-id", Element.id - 1);
    dotParent.appendChild(dotChild);

    dotChild.addEventListener("click", function () {
      let idDot = this.getAttribute("data-id");
      sliderIndex =idDot
      setSlide()
    });
  });

  return dotParent;
}

function setSlide() {
  sliderContent.innerHTML = "";
  // console.log(dataSlider[sliderIndex]);
  const slideItem = createDivtag(); //div
  const imgItem = createImgtag(dataSlider[sliderIndex]); //img
  const titleTag = createTitletag(dataSlider[sliderIndex]); //h2
  const dots = createDots();

  slideItem.appendChild(imgItem);
  slideItem.appendChild(titleTag);
  slideItem.appendChild(dots);

  sliderContent.appendChild(slideItem);
}

setSlide();

function arrowClickRight() {
  if (sliderIndex === dataSlider.length - 1) {
    sliderIndex = 0;
    setSlide();
    return;
  }
  sliderIndex++;
  setSlide();
}

function arrowClickLeft() {
  if (sliderIndex == 0) {
    sliderIndex = dataSlider.length - 1;
    setSlide();
    return;
  }
  sliderIndex--;
  setSlide();
}

arrowRight.addEventListener("click", arrowClickRight);

arrowLeft.addEventListener("click", arrowClickLeft);

// setInterval( ()=>{
//     arrowClickRight()
// }, 3000 )
