const wiperTrack = document.querySelector(".wiper-track");
const wipes = Array.from(wiperTrack.children);
const wipePrevBtn = document.querySelector(".wiper-button__right");
const wipeNextBtn = document.querySelector(".wiper-button__left");
const wipeWidth = wipes[0].getBoundingClientRect().width;

const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const arrowsBehaviour = () => {
  const activeIndex = wipes.findIndex((slide) => slide.classList.contains("active-swipe"));
  if (activeIndex === 0) {
    wipePrevBtn.classList.add("is-hidden");
  } else {
    wipePrevBtn.classList.remove("is-hidden");
  }
  if (activeIndex === wipes.length - 1) {
    wipeNextBtn.classList.add("is-hidden");
  } else {
    wipeNextBtn.classList.remove("is-hidden");
  }
};

const wipeSlide = (nextIndex) => {
  const activeIndex = wipes.findIndex((slide) => slide.classList.contains("active-swipe"));
  wipes[activeIndex].classList.remove("active-swipe");
  wipes[nextIndex].classList.add("active-swipe");
  wiperTrack.style.transform = "translateX(-" + (wipeWidth * nextIndex) + "px)";
};

wipeNextBtn.addEventListener("click", (e) => {
  const activeIndex = wipes.findIndex((slide) => slide.classList.contains("active-swipe"));
  if (activeIndex < wipes.length - 1) {
    const nextIndex = isMobileDevice ? Math.min(activeIndex + 1, wipes.length - 1) : activeIndex + 1;
    wipeSlide(nextIndex);
    arrowsBehaviour();
  }
});

wipePrevBtn.addEventListener("click", (e) => {
  const activeIndex = wipes.findIndex((slide) => slide.classList.contains("active-swipe"));
  if (activeIndex > 0) {
    const nextIndex = isMobileDevice ? Math.max(activeIndex - 1, 0) : activeIndex - 1;
    wipeSlide(nextIndex);
    arrowsBehaviour();
  }
});

arrowsBehaviour();
