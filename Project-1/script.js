const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey";
      body.style.color = "white";
    } else if (e.target.id === "white") {
      body.style.backgroundColor = "white";
      body.style.color = "black";
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
      body.style.color = "white";
    } else if (e.target.id === "black") {
      body.style.backgroundColor = "#191919";
      body.style.color = "white";
    }
  });
});
