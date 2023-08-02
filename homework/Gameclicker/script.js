function startGame() {
  object.classList.add("start");
  console.log("startGame() works");
}

function miss(event) {
  //event.target.id
  if (event.target.id == "area") {
    score--;
    document.title = `Score ${score}`;
  }
}

function hit() {
  score++;
  document.title = `Score: ${score}`;

  object.classList.remove("start");
  void object.offsetWidth; //магия
  object.classList.add("start");
  object.style.background = getRandomColor();
}
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


let score = 0;
let object = document.querySelector("#object");
