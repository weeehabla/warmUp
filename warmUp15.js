// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverseStr(string){
 
var str = "";
var str1 = "";
var str2 = "";

//  This to reverse the sring like this "yadot rehtaew eht si woh ereht ih"

    for ( var i = string.length-1; i >= 0; i--) {

        str += string[i];

    }
    
// This to reverse each word in the string which is end by space " "

     for ( var i = 0; i < str.length; i++) {

        if (str[i] !== " " ) {

            str1 += str[i];
            
        }

        if (str[i] === " " ) { 
            
          str2 += reverse(str1)+" ";
          str1 = "";
                
         }

         if (str[i+1] === undefined) {

            str2 += reverse(str1);
            str1 = "";
         }
     }
    return str2;

}

// This function used to reverse each word in the string that was reversed before 

function reverse(string) {

    var str = "";

            for ( var i = string.length-1 ; i >= 0; i--) {

                     str += string[i]; 
                }

    return str;
}
