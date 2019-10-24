// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// 1-using + operator combine your partner first and last name .

var fisrtName = "omar"
var lastName = "bara"
var fullName = fisrtName + " " + lastName

console.log (fullName)

// 2-find if the number 13 is a multiple of 3 or not.

function  multipleOF3 (x){
  if ( x % 3 === 0 ){
    return "The number is multiple 3 "
  }
  else {
     return " the number is not a multiple of 3 "
  }
}

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]

function avg(array){
    var sum = 0 ;

    for (var i = 0 ; i < array.length ; i++){

     sum  = sum + array[i]

    }
    return sum 
}


// 4-calculate your age in seconds.

function ageINseconds(x){
var age = 0
age = x * 365.242199 * 24 * 60 * 60 ;

return "your age in seconds is : "+ age 

}
