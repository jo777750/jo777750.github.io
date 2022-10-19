document.addEventListener('DOMContentLoaded', () => {
const myImages = document.querySelectorAll("img");
const imagePaths = ["./zero.png", "./one.png", "./two.png", "./three.png", "./four.png", "./five.png", "./six.png", "./seven.png", "./eight.png", "./nine.png", "./yellow.png  ", "./red.png  ", "./magenta.png ", "./purple.png   ", "./apple.jpg", "./banana.jpg", "./pears.jpg", "./kiwi.jpg", "./pineapple.jpg", "./orange.jpg", "./onion.jpg", "./potato.jpg", "./cauliflower.jpg", "./tomato.jpg", "./cat.jpg", "./puppy.jpg", "./tiger.jpg", "./elephant.jpg", "./lion.jpg"];
imagePaths.forEach((path, i) => { 
    fetch(path).then(response => response.blob()).then(blob => {
        const objectURL = URL.createObjectURL(blob);
        myImages[i].src = objectURL;
		console.log(i)
       // URL.revokeObjectURL(objectURL);
    });
})
});

//const placeholderUrl = "https://www.gravatar.com/avatar/5c9a8b9f51420f0a4f548de5a6e39bd3?s=64&d=identicon&r=PG";
//imagePaths = Array(3).fill(placeholderUrl);