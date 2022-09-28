
document.addEventListener('load',a)

var arr = ["apple.jpg","banana.jpg", "pineapple.jpg","kiwi.jpg", "pear.jpg","orange.jpg"];

function a(){
    
 //   document.getElementById('message').innerHTML = arr[0];
	image5 = document.getElementById("image5");
	console.log(arr[0]);
    image5=new Image();
    image5.src = arr[0];
		 console.log("file is " + image5.src);
	arr.splice(0,1);
	}
