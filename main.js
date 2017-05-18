/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/



function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  var input = document.getElementById("usersinput");
  var ouput = document.getElementById("output");
  var quarters = 0;
  var dimes = 0;
  var nickels = 0;
  var pennies = 0;
  var coinPurse = {quarters, dimes, nickels, pennies};
  
  coinPurse.quarters = Math.floor(input.value/0.25);
  coinPurse.dimes = Math.floor((input.value % 0.25)/10);
  coinPurse.nickels = Math.floor(((input.value % 0.25)%10)/5);
  coinPurse.pennies = Math.floor((((input.value % 0.2))));
  console.log("input "+ input.value);
console.log(coinPurse);

  return coinPurse;

}


