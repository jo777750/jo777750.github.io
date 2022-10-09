document.addEventListener('DOMContentLoaded', () => {
//---------------------------------
 
 async function parallel() {
  console.log("==PARALLEL with await Promise.all==");

  // Start 5 "jobs" in parallel and wait for them to complete
  await Promise.all([
    (async () => console.log(await toggleNav1()))(),
    (async () => console.log(await a()))(),
    (async () => console.log(await b()))(),
    (async () => console.log(await c()))(),
    (async () => console.log(await d()))(),

  ]);
}
 
 parallel();
 
function toggleNav1(){
 document.querySelector('.rx').addEventListener('click', toggleNav1);

if(document.querySelector('#test').style.display != "block")
{
console.log("if block");
document.querySelector('#test').style.display = 'block';
//console.log(document.querySelector('#test').style.display);
}
else {
console.log("else block");
document.querySelector('#test').style.display = 'none';
//console.log(document.querySelector('#test').style.display);
}
return Promise.resolve(1);
}
//-------------------------------------------------------
//JSONkeys should be unique
//there for "./subscribe.html":"subscribe",\
// and same: "./subscribe.html":"subscribe",\
//will throw an erro
function a(){

let tr='{"https://create-react-app.dev/docs/getting-started":"React Start",\
"https://scrimba.com/learn/learnreact/first-react-coc0845dcb1a26cb0769a2fea":"React training",\
"https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_accent-color":"CSS Playaround",\
"./page1.html":"NextPage",\
"./flipcard.html":"Flipcard",\
"./subscribe.html":"subscribe",\
"./futureuse.html":"future use",\
"./futureuse1.html":"future use",\
"./futureuse.2html":"future use",\
"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#using_addeventlistener":"event listeners"\
}';
const obj121 = JSON.parse(tr);
for ( let key in obj121){
d1= document.createElement('div');
d1.setAttribute('id',obj121[key]);
//console.log(d1);
/*ANOTHER WAY TO STRING CONCATENATE IS USE JS TEMPLATE LITERAL`` */
d1.innerHTML=`<a href=${key}>${obj121[key]}</a>`;
//d1.innerHTML="<a href=" + key + ">" + obj121[key]+"</a>";

document.querySelector('.my_flexx').appendChild(d1);
console.log(d1);
}
return Promise.resolve(2);
}
//--------------------------------------------------
// Make a list
function b(){
let str='{"":"Others:",\
"https://reactjs.org/docs/hello-world.html":"React hello world",\
"https://codereview.stackexchange.com":"STACKOVERFLOW CODE REVIEW",\
"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox":"MDN FLEXBOX",\
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions":"Javascript ARROW Functions",\
"https://www.freecodecamp.org/news/the-react-cheatsheet/":"React cheat sheet",\
"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions":"MDN JAVASCRIPT RRW FUNCTION ETC",\
"https://developers.google.com/codelabs/devtools-debug-css-grid#0":"google labs CSS",\
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block":"Javascript Block Cncept-Curly braces",\
"https://docs.python.org/3/tutorial/classes.html":"Python classes",\
"https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_accent-color":"CSS Demo",\
"https://www.w3.org/WAI/GL/wiki/Using_aria-label":"aria-label",\
"https://dequeuniversity.com/rules/axe/4.4/link-name?utm_source=lighthouse&utm_medium=lr":"deque",\
"https://dequeuniversity.com/rules/axe/4.1/landmark-one-main":"HTML5 LANDMARK ELEMENT",\
"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json":"MDN Manifest.json",\
"https://dzone.com/refcardz/core-python":"Simple python",\
"https://www.youtube.com/watch?v=T-TwcmT6Rcw":"Python Dataclasses",\
"https://dzone.com/articles/python-201-an-intro-to-itertools?fromrel=true":"Python iterators",\
"https://dzone.com/articles/python-101-learning-about-loops-video?fromrel=true":"Python loops",\
"https://peps.python.org/pep-0008/":"PEP 008 Python",\
"https://mathspp.com/blog/pydonts/usages-of-underscore#double-leading-underscore":"Usages of underscore | Pydont",\
"https://docs.python.org/3/library/collections.html":"Python collections",\
"https://www.youtube.com/watch?v=ajrtAuDg3yw":"Corey Schaefer:Python Tutorial: Slicing Lists and Strings",\
"https://www.youtube.com/watch?v=jCzT9XFZ5bw&t=22s":"Corey Schaefer:Python Property Decorators - Getters, Setters",\
"https://www.tutorialsteacher.com/python/property-decorator":"Python Property decorators",\
"https://docs.python.org/3/library/functions.html#property":"Python get set methos",\
"https://realpython.com/python-timer/":"python timer",\
"https://docs.python.org/3/reference/datamodel.html":"Python 3. Data model",\
"https://www.pythonmorsels.com/making-read-only-attribute":"Python Making a read-only attribute",\
"https://docs.python.org/3/tutorial/floatingpoint.html#tut-fp-issues":"Python Floating Point Arithmetic: Issues and Limitations",\
"https://realpython.com/python-namespaces-scope/#:~:text=The%20global%20namespace%20contains%20any,existence%20until%20the%20interpreter%20terminates":"Python namespaces",\
"https://pythex.org/":"test python regular expressions",\
"https://www.youtube.com/watch?v=HTLu2DFOdTg":"Raymond Hettinger:Python Class Development Toolkit",\
"https://www.w3schools.com/python/python_lists_comprehension.asp":"python lists",\
"https://www.youtube.com/watch?v=ZkjP5RJLQF4":"Statistics 101: Linear Regression, The Very Basics",\
"https://numpy.org/doc/stable/user/absolute_beginners.html":"Numpy",\
"https://carbon.now.sh/":"carbon",\
"https://pyviz.org":"Python tools for data visualization",\
"https://www.blog.pythonlibrary.org/2022/06/14/data-science-packages-in-python-video/":"Python data science pqckages",\
"https://www.copy.ai/":"writing using AI",\
"https://markodenic.com/css-line-height/":"line spacing",\
"https://docs.github.com/en/get-started/quickstart/hello-world":"github using Hello World",\
"https://quickref.me/":"Quick reference",\
"https://javascript.info/bubbling-and-capturing":"Bubbling of events",\
"https://cheatography.com/programming/":"cheatography",\
"https://scrimba.com/learn/learnreact/first-react-coc0845dcb1a26cb0769a2fea":"React Scrimba free",\
"https://www.typescriptlang.org/":"typescript official"\
}';
const obj12 = JSON.parse(str);
for (var key in obj12){
a1 = document.createElement('a');
a1.setAttribute('title', obj12[key]);
a1.setAttribute('href', key);
//console.log("a1 is " + a1);
//debugger;
a1.innerHTML=a1.title+"<br>";//perfect place using to put a new line
document.getElementById('firstrow').appendChild(a1);
}

return Promise.resolve(3);
}
//--------------------------------------------------
function c(){
let json2 = '{"https://developers.google.com/edu/python/regular-expressions":"Python regular expressions",\
"https://learnbyexample.github.io/py_regular_expressions/anchors.html":"Python regular",\
"https://stackoverflow.com/questions/231767/what-does-the-yield-keyword-do/231855#231855":"PYTHON YIELD KEYWORD",\
"https://docs.python.org/3/library/itertools.html#itertools.starmap":"PYTHON ITER TOOLS",\
"https://pypi.org/project/specialist/":"PYPI",\
"https://www.geeksforgeeks.org/python-itertools/":"ITER TOOLS",\
"https://www.openbookproject.net/books/bpp4awd/ch06.html":"OPEN BOOK PROJECT",\
"https://www.pythonmorsels.com/pointers/":"PYTHON VARIABLES AND OBJECTS",\
"https://docs.python.org/3/library/stdtypes.html#dict":"PYTHON DICTIONARY",\
"https://docs.python.org/3/library/stdtypes.html#typesseq-common":"PYTHON Common Sequence",\
"https://docs.python.org/3/reference/expressions.html#comparisons":"PYTHON EXPRESSIONS",\
"https://pythontutor.com/visualize.html#mode=edit":"PYTHON VISUALISER",\
"https://realpython.com/python-walrus-operator/":"PYTHON WALRUS OPERATOR",\
"https://docs.python.org/3/library/string.html#format-specification-mini-language":"PY PRINT",\
"https://docs.python.org/3/library/functions.html":"PYTHON BUILT IN FUNCTIONS",\
"https://docs.python.org/3/library/index.html":"PYTHON STANDARD LIBRARY",\
"https://towardsdatascience.com/unpacking-operators-in-python-306ae44cd480":"UNPACKING OPERATOR",\
"https://realpython.com/primer-on-python-decorators/":"PYTHON DECORATOR",\
"https://wiki.python.org/moin/PythonDecoratorLibrary":"WIKI PYTHON DECORATOR",\
"https://mathspp.com/blog/pydonts/set-and-frozenset":"PYTHON Set and frozen set",\
"https://mathspp.com/blog/problems/sliding-coins#solvers":"PYTHON problems",\
"https://realpython.com/python-versions-docker/":"Docker and python"\
}';
const obj2 = JSON.parse(json2);
ol = document.createElement('ol');
document.getElementById('thirdrow').appendChild(ol);
for (var key in obj2){
x1= document.createElement('li');
x1.innerHTML=`<a href=${key}>${obj2[key]}</a>`;

//x1.innerHTML="<a href=" + key + ">" + obj2[key]+"</a>";
ol.appendChild(x1);
}
return Promise.resolve(4);
}
//--------------------------------------------------
function d(){
const json6 = '{"result":"true",\
"count":"42"}';
const obj6 = JSON.parse(json6);
console.log(obj6.count);
// expected output: 42
console.log(obj6.result);
// expected output: true
const json8 = '{"result":"XXX",\
"count":"UUUUUUUUU"}';
const obj8 = JSON.parse(json8);
console.log(obj8.count);
// expected output: 42
console.log(obj8.result);
// expected output: true
const json = '{"https://www.datacamp.com/tutorial/role-underscore-python":"Underscore Role",\
"https://www.linkedin.com/learning/django-essential-training":"DJANGO"}';
const obj = JSON.parse(json);
console.log(obj);
console.log("key is :"+ Object.keys(obj));
console.log("value is :"+ Object.values(obj));
const json1 = '{"https://www.datacamp.com/tutorial/role-underscore-python":"Underscore Role",\
"https://www.linkedin.com/learning/django-essential-training":"DJANGO",\
"https://www.w3schools.com/html/":"check w3 schools",\
"https://mml-book.com":"Maths",\
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript":"MDN Javascript",\
"https://www.youtube.com/watch?v=rQ4L1e_DEMQ":"making egg geometry",\
"https://developers.google.com/machine-learning/crash-course":"MACHINE LEARNING CRASH",\
"https://en.wikipedia.org/wiki/Truth_table":"wiki truth table",\
"https://snappify.io/editor":"SNAPIFFY"\
}';
const obj1 = JSON.parse(json1);
array=Object.getOwnPropertyNames(obj1);
console.log(array.length);
ul = document.createElement('ul');
document.getElementById('secondrow').appendChild(ul);
for (var key in obj1){
x= document.createElement('li');
x.innerHTML=`<a href=${key}">"${obj1[key]}</a>`;
//x.innerHTML="<a href=" + key + ">" + obj1[key]+"</a>";//css text decoration will not work as ahref is hard coded so make element a as shown above then it will work.Also there is no 'title' attribute which can be set.
ul.appendChild(x);
}
//--------------------------------------------------
let ajson = '{"https://developers.google.com/edu/python/regular-expressions":"Python regular expressions"\
}';
const aobj = JSON.parse(ajson);
a1 = document.createElement('a');
a1.setAttribute('title', 'cnn');
a1.setAttribute('href', 'http://cnn.com');
console.log(`a1 is ${a1}`);
a1.innerHTML=a1.title;
document.getElementById('arow').appendChild(a1);
//--------------------------------------------------
return Promise.resolve(5);
}
});