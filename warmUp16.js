// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.



function balloon(string) {

   var str =  string.split("");
   var  array = [];
   var word = '';
   var countA = 0 ; 
   var countB = 0 ;
   var countL = 0 ;
   var countN = 0 ; 
   var countO = 0 ;
   var outPut = 0 ; 

// filtering the selected character only from the string and push them to the array. 

    for ( var i = 0 ; i < str.length ; i++) {

        if( str[i] === "b" || str[i] === "a" || str[i] === "o" || str[i] === "l" || str[i] === "n" ) {
            
            array.push(str[i]);
        }

    }

// for loop over the array and increment each variable when the condition is true. 

     for( var i = 0 ; i < array.length ; i++ ) {

        if (array[i] === "a") {
           
            countA += 1;
        }
        else if (array[i] === "b") {
            
            countB += 1;
        }
        else if ( array[i] === "n") {
            
            countN += 1; 
        }
        else if ( array[i] === "l") {
            
            countL += 1; 
        }
        else{
            
            countO += 1; 
        }

     }

// for loop over the lenght of array and if the condition is true will apply it .     

     for( var i = 0 ; i < array.length ; i++ ) {

        if (countA >= 1 && countB >= 1 && countL >= 2 && countN >= 1 && countO >=2 ) {
            
            outPut++
            countA -= 1;
            countB -= 1;
            countN -= 1;
            countL -= 2;
            countO -= 2;


        }
     }

    return outPut;
}