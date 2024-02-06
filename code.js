/*
    Keifer Buss 
    COSC-3020-01 
    Last modified Feb. 06 2024
    Sources: None for this program
*/

function fib(n) {
    switch (n){
        case 0:
            return [0];
        case 1:
            return [0,1];
        default:
            var array = fib(n - 1);
            array.push(array[n - 2] + array[n - 1]);
            return array;
    }
    return n;
}
