

let activeIndex = 0;
const slides = document.getElementsByTagName("article");

function handleLeftClick() {

    var element = document.getElementById("work-body");
    element.scrollIntoView({behavior: "smooth"});
    element.style.overflowY = "hidden";

    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1, 
          currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
          nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
          
    currentSlide.dataset.status = "after";
    nextSlide.dataset.status = "becoming-active-from-before";  
    
    //document.getElementById(`rest-${findArticleIndex()}`).style.display = "hidden";

    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
}

function handleRightClick() {

  var element = document.getElementById("work-body");
  element.scrollIntoView({behavior: "smooth"});
  element.style.overflowY = "hidden";

  document.getElementById("work-body").style.overflowY = "hidden";
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
  nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "before";
  nextSlide.dataset.status = "becoming-active-from-after";

  //document.getElementById(`rest-${findArticleIndex()}`).style.display = "hidden";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft")
      handleLeftClick();
    if (event.key === "ArrowRight")
    handleRightClick();
});