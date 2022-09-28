
console.log("JOEEU");
/* const xhr = new XMLHttpRequest();
xhr.open("GET", "./test.html", true);
xhr.onload = (e) => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(`hi:${xhr.responseText}`);
	   document.getElementById('test_html').addEventListener('click', () => {
          	  window.open("./test.html","JS Calci");
        
           });
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = (e) => {
  console.error(xhr.statusText);
};
xhr.send(null);
 */
					
document.getElementById('test_html').addEventListener('click', () => {
          	  window.open("./test.html","JS Calci");
        
           });