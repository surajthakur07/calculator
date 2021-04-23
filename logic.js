let screen = document.getElementById("input");
console.log(screen);

let screenValue = "";
buttons = document.querySelectorAll("button");
for (item of buttons) {
  
  item.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;

    if (buttonText == "x") {
      buttonText = "* ";
      screenValue += buttonText;
      screen.innerText = screenValue;
    } else if (buttonText == "AC") {
      screenValue = "";
      screen.innerText = screenValue;
    } else if (buttonText == "=") {
      screenValue = screenValue.replace(" ", "")
      screenValue = eval(screenValue);
      screen.innerText = screenValue;
    } else if (buttonText == "÷") {
      buttonText = "/ ";
      screenValue += buttonText;
      screen.innerText = screenValue;
    } else if (buttonText == "C") {
      screenValue = screenValue.slice(0, buttonText.length - 2);
      screen.innerText = screenValue;

    } else {
     screenValue += `${buttonText} ` ;
      screen.innerText =  screenValue ;

    }
  });
}
