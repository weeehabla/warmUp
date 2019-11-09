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

  var count0 = 0 ;
  var count1 = 0 ; 
  var count2 = 0 ; 
  var count3 = 0 ;
  var string = '';
  var array = str.toLowerCase().split("");

  for ( var i = 0 ; i < array.length ; i++) {

    if ( array[i] === "h") {

       count0++
       string += count0
       array.splice(i,1)
      
       
    }
    if ( array[i] === "e") {

       count1++
       string += count1
       array.splice(i,1)
    }
    if ( array[i] === "l") {

       count2++
       string += count2
       array.splice(i,1)
    }
    // if ( array[i] === "o") {

    //    count3++
    //    string += count3
    //    array.splice(i,1)
    // }  
  }
  return string
}
