// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function  reverseStr(str){
var a = str.length  ;
c = "" ;
var nu = 1
    while (a > 0)
    {
        if (nu === str.length ){
             a = a -1
            c = c+str[a]
            return c ;
        }
             a = a -1
            c = c+str[a]+nu
            nu++
    }
    return c ;
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]


var array1 =['hi','hello','welcome','hy']

function take(array){
 var acc = [] ;
 var max = array[0].length ;
       
    for (i = 0 ; i < array.length ; i++ ){
       	      
         if (max > array[i].length){

             max = array[i].length
         }  
     }
       	      
    for ( var i = 0 ; i < array.length ; i ++){

    	if ( array[i].length === max ){

    		acc.push(array[i])
    	}
   
    }

    return acc ; 
}