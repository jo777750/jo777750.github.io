document.addEventListener('DOMContentLoaded', () => {


/* let temp = [];
let	arrayOfStrings=[];
document.addEventListener('DOMContentLoaded', () => {
				document.getElementById('wrapper').addEventListener('click',Calculat);
			    document.getElementById('clear1').addEventListener('click', () => {
					temp = [];
					arrayOfStrings=[];
					document.getElementById('buffer_zone').textContent=(''); 
		            });
	});
function Calculat(e) {
	z=e.target.innerText;
	console.log(z);
document.getElementById('buffer_zone').append(z);
if (z =='='){
document.getElementById('buffer_zone').append( eval(arrayOfStrings));
return false;
}
temp.push(z);
arrayOfStrings = temp.join("");
} */

var temp = [];
var arrayOfStrings=[];
//document.addEventListener('DOMContentLoaded', () => {
               //DONT DELETE 1way... [...document.querySelectorAll('#wrapper button')].map((button)=> button.addEventListener('click',Calculat));
				//delete:document.getElementById('wrapper').addEventListener('click',Calculat);dont listen to wrapper only listen to button events
				//...REST PARAMETER
				//converting normal function to arrow functions
				//1. Normal function
				/* (function (a) {
					return a + 100;
				});
					//2.Arrow function
				correspoding arrow function:a => a + 100; 
				
				
				anonymous function:
				xyz = () => {
				};*/


				//console.log(document.querySelectorAll('#wrapper button'))//choose button only in the wrapper div and not the others like CLR
					//listen to only button events(other than the CLR)
			   document.querySelectorAll('#wrapper button').forEach(button=> button.addEventListener('click',Calculat));
				//listen to CLR button events
                document.getElementById('clear1').addEventListener('click', () => {
                    temp = [];
                    arrayOfStrings=[];
                    document.querySelector('.my_flex').textContent=(''); 
                    });
  //  });
function Calculat(e) {
    z=e.target.innerText;
 //   console.log(z);
document.querySelector('.my_flex').append(z);//append to the flex object
if (z =='='){
document.querySelector('.my_flex').append( eval(arrayOfStrings));
return false;
}
temp.push(z);
arrayOfStrings = temp.join("");
}

});
