// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .


//============== almots there but need more time to think about it :))

function reverseStr(string){
 
 var str = "";
 var str1 = "";
 var str2 = "";
 var str3 = "";

    for ( var i = string.length-1 ; i >= 0; i--) {

        str += string[i] 
    }
     for( var i = 0 ; i < str.length; i++) {

          str1 += str[i]

        if(str[i] === " "){

             str2 += str1

        if(str2.length === str1.length) {

            for ( var i = str1.length-1 ; i >= 0; i--) {

                     str3 += str1[i] 
                }

                console.log(str3)
        }   
     }
 }
 
    return str

}

 		