let userInput;
userInput = prompt ("Please input a number", "Type a number here.");
for (let i = 1; i <= userInput; i = i + 1 ) {
  if ( i % 2 === 0 ) {
    $("#response").append("<br />" + i + " is even");
  } else {
    $("#response").append("<br />" + i + " is odd");
  }
}
