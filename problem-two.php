<?php

/*
*
* Project Euler #2 - PHP
*
*/

define ("MAX_VALUE", 35);

$fibonacci_array = [1,2];
$even_sum_array = [];
$sum = 0;
$even_sum = 0;

for ( $i = 0; $i < 50; $i++ ) {
    $sum = $fibonacci_array[$i] + $fibonacci_array[$i+1];
    array_push( $fibonacci_array, $sum );

    if ( ( $fibonacci_array[$i]%2 ) == 0 ) {
        array_push( $even_sum_array, $fibonacci_array[$i] );
    };
};

for ($i = 0; $i < count($even_sum_array); $i++) {
    if ( $even_sum_array[$i] < MAX_VALUE ) {
        $even_sum += $even_sum_array[$i];
    };
};

?>


<h1><?php echo $even_sum; ?></h1>

<?php
echo 'Fibonacci Array';
echo '<pre>';
print_r( $fibonacci_array);
echo '</pre>';

echo 'Even Sum Array';
echo '<pre>';
print_r( $even_sum_array );
echo '</pre>';
?>
