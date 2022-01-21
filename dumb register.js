// Create an array of objects which hold the denominations and their values
var denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // Handle exact change
   if (cid === price){
    output.status = "CLOSED";
    output.change = cid;
    return output;
   }

  // Handle obvious insufficient funds
  if (register.total < change){
    outpus.status = "INSUFFICENT_FUNDS";
    return output;
  }

  // Loop through denom
  for (var i = 0; i < denom.length; i++){
    
    // while still money, and while denom > change
    while (denom[i]> change){
     // Add denom to output 
      denom.push(output[change]);
      denom -= change;
    }
  }
     // Return the current change_arr
     output.status =  "OPEN";
     return output;


    
    

   // Initial value of empty array for reduce

  