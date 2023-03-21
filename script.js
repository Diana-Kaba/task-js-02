// Ex.1
window.onload = function () {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
  }
};

function showAnswer(event) {
  let image = event.target;
  let name = image.id;
  name = name + ".jpg";
  image.src = "images/ex1/" + name;
  let dataName = image.getAttribute("data-name");
  alert("Name: " + dataName + ". Url: " + image.src);
}

// Ex.2
function addText(text) {
  let elem = document.getElementById("block");
  let timer;
  let pos = 0;

  function addLetter() {
    pos++;
    elem.innerHTML = text.substring(0, pos);
    if (pos == text.length) {
      clearInterval(timer);
    }
  }
  timer = setInterval(addLetter, 1000);
}

// Ex.3
// let arrNumb = ["1", "2", "3", "4", "5"];
// let number = arrNumb[Math.floor(Math.random() * arrNumb.length)];
// let numbers = number.split(" ");

// gen(random(numbers));

// let dropField = document.getElementById("field");

// function random(arr) {
//   let randomNumbers = [];
//   let n;

//   for (let i = 0; randomNumbers.length < arr.length; i++) {
//     n = Math.floor(Math.random() * arr.length);
//     let exist = false;
//     for (let j = 0; j < randomNumbers.length; j++) {
//       if (arr[n] == randomNumbers[j]) {
//         exist = true;
//       }
//     }
//     if (!exist) {
//       randomNumbers.push(arr[n]);
//     }
//   }
//   return randomNumbers;
// }

// function allowDrop(event) {
//   event.preventDefault();
// }

// function drag(event) {
//   event.dataTransfer.setData("text", event.target.innerHTML);
// }

// function drop(event) {
//   event.preventDefault();

//   let data = event.dataTransfer.getData("text");
//   dropField.innerHTML += `${data} `;
// }

// function check(event) {
//   let str = dropField.innerText.trim();
//   console.log(str);
//   alert(str == number ? "Correct!" : "Error!");
// }

// function gen(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     document.write(
//       `<div id="drag${
//         i + 1
//       }" class="rect" draggable="true" ondragstart="drag(event)">${
//         arr[i]
//       }</div>`
//     );
//   }
// }

// Ex.4
let btnFruit = document.getElementById("btn-fruit");
btnFruit.addEventListener("click", selectFruit);

function selectFruit() {
  let x = document.getElementById("mySelect").value;
  let text = document.getElementById("demo");
  text.innerHTML = x;
  if (x == "apple") {
    text.style.background = "green";
  } else if (x == "banana" || x == "pineapple") {
    text.style.background = "yellow";
  } else {
    text.style.background = x;
  }
}

//Ex.5
let products = document.querySelectorAll(".item_box");

products.forEach((product) => {
  product.addEventListener("click", () => {
    let name = product.querySelector(".item_title").textContent;
    let price = product.querySelector(".item_price").textContent;

    localStorage.setItem("Product", JSON.stringify({ name, price }));
  });
});

//Ex.6
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(15, 15, 5, 200);
ctx.moveTo(15, 240);
ctx.lineTo(30, 240);
ctx.stroke();
ctx.font = "13px Arial";
ctx.fillStyle = "#000000";
ctx.fillText("50", 30, 25);
ctx.fillText("40", 30, 45);
ctx.fillText("30", 30, 65);
ctx.fillText("20", 30, 85);
ctx.fillText("10", 30, 105);
ctx.fillText("0", 30, 125);
ctx.fillText("10", 30, 145);
ctx.fillText("20", 30, 165);
ctx.fillText("30", 30, 185);
ctx.moveTo(10, 20);
ctx.lineTo(26, 20);
ctx.stroke();
ctx.moveTo(10, 40);
ctx.lineTo(26, 40);
ctx.stroke();
ctx.moveTo(10, 60);
ctx.lineTo(26, 60);
ctx.stroke();
ctx.moveTo(10, 80);
ctx.lineTo(26, 80);
ctx.stroke();
ctx.moveTo(10, 100);
ctx.lineTo(26, 100);
ctx.stroke();
ctx.moveTo(10, 120);
ctx.lineTo(26, 120);
ctx.stroke();
ctx.moveTo(10, 140);
ctx.lineTo(26, 140);
ctx.stroke();
ctx.moveTo(10, 160);
ctx.lineTo(26, 160);
ctx.stroke();
ctx.moveTo(10, 180);
ctx.lineTo(26, 180);
ctx.stroke();
ctx.stroke();
ctx.stroke();