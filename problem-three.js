var n = 13195;
var array = [];
var prime_array = [];

for ( var i = 2; i < n; i++ ) {

    if ( n%i == 0 ) {
        array.push(i);
        console.log(array);
    };

};


function isPrime(n) {

   if (n < 2) {
       return false;
   };

   if ( n != Math.round(n) ) {
       return false;
   };

   var isPrime = true;

   for ( var i = 2; i <= Math.sqrt(n); i++ ) {
      if ( n%i == 0 ) {
          isPrime = false;
      };
  };

   return isPrime;

};


for ( var i = 0; i <= array.length; i++ ) {

    var x = array[i];

    if( isPrime(x) == true ) {
        prime_array.push(x);
        console.log(prime_array + " prime array");
    };

};

var z = prime_array.length - 1;

console.log(prime_array[z] + " is the largest prime factor");
