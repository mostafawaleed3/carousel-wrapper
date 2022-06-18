const slider = document.querySelector(".slider");
const boxes = document.querySelectorAll(".slider > *");
const indicators = document.querySelectorAll(".indicators li button");
const wrapper = document.querySelector(".wrapper");

wrapper.classList.add("open");
const boxesLength = boxes.length;
slider.style.width = boxesLength * 100 + "%";

indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    const activeIndicator = document.querySelector(
      ".indicators li button[aria-current='true']"
    );
    activeIndicator.setAttribute("aria-current", false);
    indicator.setAttribute("aria-current", true);

    slider.style.transform =
      "translateX(" + i * (-(1 / boxesLength) * 100) + "%)";
    // console.log(i);
  });
});
