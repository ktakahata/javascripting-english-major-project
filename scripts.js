
let arrayofStrings, arrayOfNumbers, arrayMixed;
arrayofStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3];
arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]];

let myHabaneroSauceSquirts, myBurritoObject;
myHabaneroSauceSquirts = 3;
myBurritoObject = {
  tortilla: "what",
  guacamole: true,
  beans: "pinto",
  habaneroSauceSquirts: myHabaneroSauceSquirts,
  spiciness: function(){
    if (myHabaneroSauceSquirts > 0){
      alert("This is a spicy burrito!");
    } else {
      alert("This is a mild burrito.");
    }
  }
};
$("#response").html("Your burrito has " +
myBurritoObject.habaneroSauceSquirts +
" squirts of habanero.");
myBurritoObject.spiciness();
