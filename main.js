let color = "black";
let click = false;

function createBoard(size) {
  let board = document.querySelector(".board");

  // creates a grid template for our divs
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  // creates divs and adds them to the container
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    // adds colors to the divs on hover
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}

// Gets size from the user
function getSize() {
  const input = prompt("What should be the size of the box ?");
  const message = document.querySelector("#message");

  if (!input) {
    message.innerHTML = "Please provide a number";
  } else if (input < 0 || input > 100) {
    message.innerHTML = "Please provide a number between 0 and 100";
  } else {
    message.innerHTML = `A board of ${input} x ${input} size is created!!`;
    return input;
  }
}

// Run the following only after HTML and CSS has been loaded
document.addEventListener("DOMContentLoaded", () => {
  createBoard(16);
  //   creates a board of the inputed size
  const size_btn = document.querySelector("#popup");
  size_btn.addEventListener("click", () => {
    resetBoard();
    createBoard(getSize());
  });

// Only start drawing when the user clicks somewhere
  document.querySelector('body').addEventListener("click", (e)=>{
    if(e.target.tagName != "BUTTON"){
        click = !click;
    }
    const drawInfo = document.querySelector('#draw');
    if(click){
        drawInfo.innerHTML = "You can Draw!!"
    } else{
        drawInfo.innerHTML  = "Click Somewhere to start Drawing!"
    }
  })
});

// Sets the color of the divs
function colorDiv() {
  if (click) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
    } else if (color == "black") {
      this.style.backgroundColor = "black";
    }
  }
}

// Sets color when the respective buttons are clicked
function setColor(colorChoice) {
  color = colorChoice;
}

// Resets the Board
function resetBoard() {
  const divs = document.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "White"));
}
