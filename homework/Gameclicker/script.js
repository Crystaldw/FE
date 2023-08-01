function startGame() {
  object.classList.add("start");
  // console.log("startGame() works");
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
}

let score = 0;
let object = document.querySelector("#object");
