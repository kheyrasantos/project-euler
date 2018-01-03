/*
*
* Project Euler #2 - Javascript
*
*/

var fibonacci_array = [1,2];
var even_sum_array = [];
var sum = 0;
var even_sum = 0;
var MAX_VALUE = 15;

for ( i = 0; i < 50; i++ ) {
    sum = fibonacci_array[i] + fibonacci_array[i+1];
    fibonacci_array.push(sum);

    if ( (fibonacci_array[i]%2) == 0 ) {
        even_sum_array.push(fibonacci_array[i]);
    };
};

for (i = 0; i < even_sum_array.length ; i++) {
    if ( even_sum_array[i] < MAX_VALUE ) {
        even_sum += even_sum_array[i];
    };
};

console.log(fibonacci_array);
console.log(even_sum_array);
console.log(even_sum);
