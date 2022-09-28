let buffer = [];


document.getElementById.style.fontwe
  s1 = document.getElementById("equal");  
  s1.addEventListener("onclick", redire);
//while(s1.textContent != "="){
console.log("h31111");

//z=document.getElementById("zero").addEventListener("click", redire)

function redire()
{document.write("zzzzzzzz!!!!!");}

 a=document.getElementById("one")
 a.addEventListener("onclick", Calculat(this.a.textContent))
   
 b=document.getElementById("two")
 b.addEventListener("onclick", Calculat(this.b.textContent))

 //c= document.getElementById("plus")
 //c.addEventListener("click", Calculate(c.textContent)) 

 //subtract = document.getElementById("subtract").textContent;  

//product = document.getElementById("product").textContent;  

// divide = document.getElementById("divide").textContent;  
  
function Calculat(z) {
console.log("hi");
buffer.push(z);
}
console.log("array is : " + buffer);
console.log("array withoout comma separators: " + buffer.join(''));
