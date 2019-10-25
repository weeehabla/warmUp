//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false


function isSUbset(array1,array2){


 var count = 0 ;

  for (var i = 0 ; i <array2.length ; i++){

    for (var j = 0 ; j < array1.length ; j++){

      if ( array2[i] === array1[j]){
           
           array2.splice(i,1)
           array1.splice(j,1)
           j=0; 
           i = 0 ; 

     
        }

      }
      console.log (array2.length)
    if (array2.length === 0){

      return true

      }
    else{
              return false
      }
   
  }
}
