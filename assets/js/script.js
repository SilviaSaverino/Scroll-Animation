const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  console.log((window.innerHeight / 5) * 4);
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top; //we are checking where the top of the box is, using getBoundingClientRect

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
// The Element.getBoundingClientRect() method returns a DOMRect object providing information about
// the size of an element and its position relative to the viewport.
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
