function setRectangleStyle() {
    const blocks = document.querySelectorAll(".block-style");
    blocks.forEach((block) => {
      block.classList.remove("square-style");
      block.classList.add("rectangle-style");
    });
  }
  
  function setSquareStyle() {
    const blocks = document.querySelectorAll(".block-style");
    blocks.forEach((block) => {
      block.classList.remove("rectangle-style");
  
      block.classList.add("square-style");
    });
}