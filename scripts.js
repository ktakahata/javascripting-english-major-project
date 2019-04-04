let userInput;
userInput = prompt("Please enter a number");
for (let i = 1; i<= userInput; i = i + 1 ) {
  if ( i = i + 2 ) {
        $("#response").append("<br />" + i + " is odd");

  }
  $("#response").append("<br />" + i);
}

let tipCalculator;
tipCalculator = function(total, tipRate){
  //1.Calculate the percentage of the total as a variable of "tipAmount"
  let tipAmount;
  if ( tipRate < 1 ) {
    tipAmount = tipRate * total;
  } else {
    tipAmount = (tipRate/100) * total;
  }
  //2. Change #response to tell us the tip amount.
  $("#response").html("Your tip is $" + tipAmount);
};

tipCalculator(50.00, 20);
