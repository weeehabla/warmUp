// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

var array1= [];
var array2= [];
var a = 0 ;
var b = 0 ;
var gnd = function(a,b)
{

	if (a <= 1 & b <= 1 )
		{
			return 1 ;
		}     

    array1.push(a);
    array2.push(b);

    return gnd(a/2,b/2)
}



gnd(10 , 44)
 

 

