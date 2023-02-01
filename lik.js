"use strict";

var root = ReactDOM.createRoot(document.getElementById('root'));
var element = /*#__PURE__*/React.createElement("h1", null, "Hello, 1234world");
root.render(element);
var root1 = ReactDOM.createRoot(document.getElementById('tworoot'));
var element1 = /*#__PURE__*/React.createElement("h1", null, "Hello, 5678world");
root1.render(element1);
var root2 = ReactDOM.createRoot(document.getElementById('buton'));
var element2 = /*#__PURE__*/React.createElement(MyApp, null);
root2.render(element2);
var root3 = ReactDOM.createRoot(document.getElementById('buton1'));
var element3 = /*#__PURE__*/React.createElement(MyButton1, null);
root3.render(element3);
var root4 = ReactDOM.createRoot(document.getElementById('Abt'));
var element4 = /*#__PURE__*/React.createElement(AboutPage, null);
root4.render(element4);
var root5 = ReactDOM.createRoot(document.getElementById('datt'));
var element5 = /*#__PURE__*/React.createElement(Data1, null);
root5.render(element5);
var root6 = ReactDOM.createRoot(document.getElementById('prof'));
var element6 = /*#__PURE__*/React.createElement(Profile, null);
root6.render(element6);
var root7 = ReactDOM.createRoot(document.getElementById('dummybuton'));
var element7 = /*#__PURE__*/React.createElement(MyButtonDummy, null);
root7.render(element7);
var root8 = ReactDOM.createRoot(document.getElementById('ShoppingList'));
var element8 = /*#__PURE__*/React.createElement(ShoppingList, null);
root8.render(element8);
function AboutPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "About"), /*#__PURE__*/React.createElement("p", null, "Hello ", /*#__PURE__*/React.createElement("mark", null, "there."), /*#__PURE__*/React.createElement("br", null), "How do you do?"));
}
function MyButton() {
  return /*#__PURE__*/React.createElement("button", null, "I'm a button 0");
}
function MyApp() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h1", null, "Welcome to my app777"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(MyButton, null));
}
function MyButton1() {
  function handleClick() {
    alert('You clicked me!');
  }
  return /*#__PURE__*/React.createElement("button", {
    onClick: handleClick
  }, "Click me");
}
function MyButtonDummy() {
  return /*#__PURE__*/React.createElement("button", null, "Dummy-ButoonClick");
}
var fuser = {
  name: 'Sonu Gukku'
};
function Data1() {
  //always make 1st letter in CAPS

  return /*#__PURE__*/React.createElement("h1", null, fuser.name);
}

//----------------------------------

var user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
};
function Profile() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name), /*#__PURE__*/React.createElement("img", {
    className: "avatar",
    src: user.imageUrl,
    alt: 'Photo of ' + user.name,
    style: {
      width: user.imageSize,
      height: user.imageSize
    }
  }));
}

//--------------------------------

var products = [{
  title: 'Cabbage',
  isFruit: false,
  id: 1
}, {
  title: 'Garlic',
  isFruit: false,
  id: 2
}, {
  title: 'Apple',
  isFruit: true,
  id: 3
}];
function ShoppingList() {
  var listItems = products.map(function (product) {
    return /*#__PURE__*/React.createElement("li", {
      key: product.id,
      style: {
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }
    }, product.title);
  });
  return /*#__PURE__*/React.createElement("ul", null, listItems);
}

//--------------------------------------