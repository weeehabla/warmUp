// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

// =========== The its not working just want to try the concept only the one one of the prolem 
// =========== to colect the symbol the count of each one 


function countChar(str) {

 var array = str.split("");
 var array1 = [];

 for (var i = 0 ; i < array.length ; i++ ) {

    var count = 0 ; 

    for ( var j = 0 ; j <= i ; j++) {

        if ( array[i] === array[j]){

            count++

        }
    }

    array1.push(count)
 }

 return array1.join("")
}
