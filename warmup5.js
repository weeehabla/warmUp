// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.



var classmates = [ {first : "mohamed", last : "fared " , age : 32 , country :"ibya" , gender:"male" } ,
{first : "omar", last : "bara" , age : 32 , country :"ibya" , gender:"male" },
{first : "asma", last : "benali" , age : 20, country :"tunisia" , gender:"female" },
{first : "mohamed", last : "sbeta" , age : 20, country :"tunisia" , gender:"female" }

];
function addFriend(first , last , age , country , gender ){

	var mate ={ first : first ,
		last : last , 
		age : age , 
		country : country ,
		gender : gender
	}
classmates.push(mate)

}

function displayFriend(array){

	for ( i = 0 ; i < array.length ; i++)
	{
		console.log(array[i])
	}
}

function nb0fMale(array){
 var acc = 0 ;
  for ( i = 0 ; i < array.length ; i++ ) 
  	{

  		
  		if ( array[i].gender === "male"){

  			acc++
  		}

  	}
  	return acc

}

function searchMate(array,name){

	var result = [] ;

	for(i = 0 ; i < array.length ; i++)

	{

		if(array[i].first === name ){
			

			result.push(array[i]);
		}




	}
	return result ;
}






















