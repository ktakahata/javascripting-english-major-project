let userInput;
userInput = prompt("Please enter a number");
for (let i = 1; i<= userInput; i = i + 1 ) {
  $("#response").append("<br />" + i);
}
