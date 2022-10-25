let order = []; //WORKING ON BOTTOM RIGHT
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topLeft2 = document.querySelector("#topleft2");
const topRight = document.querySelector("#topright");
const topRight2 = document.querySelector("#topright2");
const bottomLeft = document.querySelector("#bottomleft");
const bottomLeft2 = document.querySelector("#bottomleft2");
const bottomRight = document.querySelector("#bottomright");
const bottomRight2 = document.querySelector("#bottomright2");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");





strictButton.addEventListener("click", (event) => {
  if (strictButton.checked == true) {
    strict = true;
  } else {
    strict = false;
  }
});


onButton.addEventListener("click", (event) => {
  if (onButton.checked == true) {
    on = true;
    turnCounter.innerHTML = "-";
  } else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor();
    clearInterval(intervalId);
  }
});

startButton.addEventListener("click", (event) => {
  if (on  || win) {
    play();
  }
});

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (var i = 0; i < 50; i++){
    order.push(Math.floor(Math.random() * 8) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
} 

function gameTurn() {
  on = false;
  if (flash == turn) {
    clearInterval(intervalId);
      compTurn = false;
      clearColor();
      on = true;
  }
  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) one();
      if (order[flash] == 2) two();
      if (order[flash] == 3) three();
      if (order[flash] == 4) four();
      if (order[flash] == 5) five();
      if (order[flash] == 6) six();
      if (order[flash] == 7) seven();
      if (order[flash] == 8) eight();
      flash++;
    }, 200);
  }
}

function one() {
  if (noise) {
    let audio = document.getElementById("clip1");
    audio.play();
  }
  noise = true;
  topLeft.style.backgroundColor = "lightgreen";
}

function two() {
  if (noise) {
    let audio = document.getElementById("clip2");
    audio.play();
  }
  noise = true;
  topRight.style.backgroundColor = "tomato";
}

function three() {
  if (noise) {
    let audio = document.getElementById("clip3");
    audio.play();
  }
  noise = true;
  bottomLeft.style.backgroundColor = "yellow";
}

function four() {
  if (noise) {
    let audio = document.getElementById("clip4");
    audio.play();
  }
  noise = true;
  bottomRight.style.backgroundColor = "lightskyblue";
}

function five() {
  if (noise) {
    let audio = document.getElementById("clip1");
    audio.play();
  }
  noise = true;
  topLeft2.style.backgroundColor = "#c43bff";
}

function six() {
  if (noise) {
    let audio = document.getElementById("clip2");
    audio.play();
  }
  noise = true;
  topRight2.style.backgroundColor = "#00eeff";
}

function seven() {
  if (noise) {
    let audio = document.getElementById("clip3");
    audio.play();
  }
  noise = true;
  bottomLeft2.style.backgroundColor = "#ffffff";
}

function eight() {
  if (noise) {
    let audio = document.getElementById("clip4");
    audio.play();
  }
  noise = true;
  bottomRight2.style.backgroundColor = "#ff9a26";
}

function clearColor() {
  topLeft.style.backgroundColor = "darkgreen";
  topLeft2.style.backgroundColor = "#7900ad";
  topRight.style.backgroundColor = "darkred";
  topRight2.style.backgroundColor = "#007982";
  bottomLeft.style.backgroundColor = "goldenrod";
  bottomLeft2.style.backgroundColor = "#707070";
  bottomRight.style.backgroundColor = "darkblue";
  bottomRight2.style.backgroundColor = "#8f4d03";
}

function flashColor() {
  topLeft.style.backgroundColor = "lightgreen";
  topRight.style.backgroundColor = "tomato";
  bottomLeft.style.backgroundColor = "yellow";
  bottomRight.style.backgroundColor = "lightskyblue";
  topLeft2.style.backgroundColor = "#c43bff";
  topRight2.style.backgroundColor = "#00eeff";
  bottomRight2.style.backgroundColor = "#ff9a26";
  bottomLeft2.style.backgroundColor = "#ffffff";
}

topLeft.addEventListener("click", (event) =>{
  if (on) {
    playerOrder.push(1);
    check();
    one();
    if(!win){
      setTimeout(() => {
        clearColor();
      }, 300)
    }
  }
});

topLeft2.addEventListener("click", (event) =>{
  if (on) {
    playerOrder.push(5);
    check();
    five();
    if(!win){
      setTimeout(() => {
        clearColor();
      }, 300)
    }
  }
});

topRight.addEventListener("click", (event) =>{
  if (on) {
    playerOrder.push(2);
    check();
    two();
    if(!win){
      setTimeout(() => {
        clearColor();
      }, 300)
    }
  }
});

topRight2.addEventListener("click", (event) =>{
  if (on) {
    playerOrder.push(6);
    check();
    six();
    if(!win){
      setTimeout(() => {
        clearColor();
      }, 300)
    }
  }
});

bottomLeft.addEventListener("click", (event) =>{
  if (on) {
    playerOrder.push(3);
    check();
    three();
    if(!win){
      setTimeout(() => {
        clearColor();
      }, 300)
    }
  }
});

bottomLeft2.addEventListener("click", (event) =>{
  if (on) {
    playerOrder.push(7);
    check();
    seven();
    if(!win){
      setTimeout(() => {
        clearColor();
      }, 300)
    }
  }
});

bottomRight.addEventListener("click", (event) =>{
  if (on) {
    playerOrder.push(4);
    check();
    four();
    if(!win){
      setTimeout(() => {
        clearColor();
      }, 300)
    }
  }
});

bottomRight2.addEventListener("click", (event) =>{
  if (on) {
    playerOrder.push(8);
    check();
    eight();
    if(!win){
      setTimeout(() => {
        clearColor();
      }, 300)
    }
  }
});

function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]){ 
    good = false;
  }
  if (playerOrder.length == 50 && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    turnCounter.innerHTML = "NO!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor;
      if (strict) {
        play();
      } else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);
      }
    }, 800);

    noise = false;
  }

  if (turn == playerOrder.length && good && !win) {
    turn++
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    intervalId = setInterval(gameTurn, 800);
  }
}

function winGame() {
  flashColor();
  turnCounter.innerHTML = "WIN!";
  on = false;
  win = true;
}