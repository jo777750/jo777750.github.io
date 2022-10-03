
   document.addEventListener('DOMContentLoaded', () => {
	   debugger;
   const myImage = document.querySelector("img");
const myRequest = new Request("https://www.google.com");
fetch(myRequest).then(async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  } else {
    console.log(
      `no HTTP error, elephant.jpg file is present,Status: ${response.status}`
    );
    myBlob=await response.blob() // ensure this is defined in your file

    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = URL.createObjectURL(myBlob);
    console.log(myImage.src)
	
  }
});
});