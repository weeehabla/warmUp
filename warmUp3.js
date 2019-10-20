// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var name1 = ["mohamed" , "omar" , "ahmed"];
var name2 = ["nadia","sara","fatima"];
var name3 = ["matt" , "yousef","tamara"];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

<<<<<<< HEAD

var array = [4,5,6,7,8];
var array1 = [4,5,6,7];
 function middle(num){
         var a = 0 ; 
 	 each(num , function(element , i ){
 	 	if (num.length%2 !== 0){

 		 // if( num.length/2+0.5== i && num.length/2+1 > i){
 		  	    if( num.length/2-0.5 === i){
 		  	    return console.log(num[i]) 
 		     }
 	 	}
 	 	else {
 	 			if( num.length/2 === i){
 		  	    
 		  	    return console.log("The array its even ") ;
 		     }
 	 	      }
 	})
 }

// 3-Change all the numbers in the array to be multiplied by two for even indexes.


function each(coll, f) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   f(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   f(coll[key], key); 
             } 
       } 
 } 
     function map(array, f) { 
       var acc = []; 
       each(array, function(element, i) { 
             acc.push(f(element, i)); 
       }); 
       return acc; 
 }


var num = [3,4,7,9,8];

function multi(array){
	return map(array, function(element,i){
		if ( i%2 === 0 ){

			return element*2;
		 }
		return element ; 
     })
	
}












 
=======
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
