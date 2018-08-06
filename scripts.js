let tipAmount;
let tipCalculator = function(total, tipRate) {
  let parsedTipRate;
  if ( tipRate < 1 ) {
    parsedTipRate = tipRate;
  } else {
    parsedTipRate = tipRate / 100;
  }
  $("#response").html("Your tip is $" + (parsedTipRate * total));
};
 tipCalculator(50.00, 30);
console.log(tipAmount);
