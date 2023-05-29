const myButton = document.querySelector(".navbar-toggler");
const sideList = document.querySelector(".sideList");

let touchStartX = 0;
let touchEndX = 0;
document.addEventListener("click", function (event) {
  if (sideList.style.display === "block") {
    if (!sideList.contains(event.target)) {
      sideList.style.display = "none";
    }
  }
});
myButton.addEventListener("click", function () {
  setTimeout(() => {
    sideList.style.display = "block";
  }, 200);
});

sideList.addEventListener("touchstart", function (event) {
  touchStartX = event.touches[0].clientX;
});

sideList.addEventListener("touchmove", function (event) {
  touchEndX = event.touches[0].clientX;
});

sideList.addEventListener("touchend", function (event) {
  if (touchEndX - touchStartX < -50) {
    sideList.style.display = "none";
  }
});
