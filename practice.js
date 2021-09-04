
var star = require("./practice1");
console.log("Enter the date");
var dd = process.openStdin();

dd.addListener("data", function(d){
   var day = parseFloat(d.toString().substring(0,d.length-1));
   var month=d.toString().substring(3,d.lastIndexOf('-'));
  
   console.log("Day of birth is " + day +"-"+month+ " start sign is " + star.sign(day,month));
   process.stdin.destroy();
});


