let main = document.getElementById("main");
let size = 16;
let submit = document.getElementById("submit");
let input = document.getElementById("input");

function createContainer(size) {
  if (document.getElementsByClassName("container")[0])
    document.getElementsByClassName("container")[0].remove();

  let container = document.createElement("div");
  container.classList.add("container");

  var style = document.createElement("style");
  style.innerHTML = `
    .container {
        border: 1px solid black;
        width: 600px;
        display: grid;
        height: 600px;
        gap: 0;
        grid-template-rows: repeat(${size}, 1fr);
        grid-template-columns: repeat(${size}, 1fr);
        background-color: white;
    }
    
    `;
  document.head.appendChild(style);
  main.appendChild(container);
  return container;
}

function addingSquare(size, container) {
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    let R = Math.floor(Math.random() * (255 + 1));
    let G = Math.floor(Math.random() * (255 + 1));
    let B = Math.floor(Math.random() * (255 + 1));
    square.addEventListener("mouseover", () => {
      square.style["backgroundColor"] = `rgb(${R}, ${G}, ${B})`;
    });

  
    container.appendChild(square);
  }
}

submit.addEventListener("click", () => {
  if (input.value > 100) return alert("The size must below 100");
  else if (input.value === "") return alert("You have to input size value!!");
  size = input.value;
  let container = createContainer(size);
  addingSquare(size, container);
});

addingSquare(size, createContainer(size));
