const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const divEl = document.createElement("div");
  bodyEl.appendChild(divEl);
  divEl.style.left = event.offsetX + "px";
  divEl.style.top = event.offsetY + "px";
  const size = Math.random() * 100 + "px";
  divEl.style.width = size;
  divEl.style.height = size;
  setTimeout(() => {
    divEl.remove();
  }, 3000);
});
