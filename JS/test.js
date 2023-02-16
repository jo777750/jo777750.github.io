var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import EI from './ExpenseItem.js';
import { XY } from './ExpenseItem.js';

var root2 = ReactDOM.createRoot(document.getElementById('buton'));
var element2 = React.createElement(MyApp, null);
root2.render(element2);
function MyButton() {
  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1];

  function handleClick() {
    setCount(count + 1);
  }
  return React.createElement(
    'button',
    { onClick: handleClick },
    'Clicked ',
    count,
    ' times'
  );
}
function MyApp() {
  return React.createElement(
    'div',
    null,
    React.createElement('hr', null),
    React.createElement(
      'h1',
      null,
      'Counter updates SEPARATELY'
    ),
    React.createElement('hr', null),
    React.createElement(MyButton, null),
    React.createElement('br', null),
    React.createElement(MyButton, null),
    React.createElement('hr', null)
  );
}
//------------------
var root11 = ReactDOM.createRoot(document.getElementById('buton11'));
var element11 = React.createElement(MyAppSep, null);
root11.render(element11);
function MyAppSep() {
  var _React$useState3 = React.useState(11),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      count = _React$useState4[0],
      setCount = _React$useState4[1];

  function handleClick() {
    setCount(count + 1);
  }
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      React.createElement(
        'mark',
        null,
        'Counters that update together'
      )
    ),
    React.createElement(MyButtonSep, { count: count, onClick: handleClick }),
    React.createElement('br', null),
    React.createElement(MyButtonSep, { count: count, onClick: handleClick })
  );
}
//Props are arguments passed into React components.
// Props are passed to components via HTML attributes. props stands for properties.
function MyButtonSep(_ref) {
  var count = _ref.count,
      onClick = _ref.onClick;

  return React.createElement(
    'button',
    { onClick: onClick },
    'Clicked ',
    count,
    ' times'
  );
}
//----------


function RenderABC() {
  var words = ['A\xA0for\xA0Apple', 'B\xA0for\xA0Boy', 'C\xA0for\xA0Car'];

  //const word=words.map(function xyz()())

  //const [count=0,setCount]=React.useState(0);
  //alert(count);
  React.useEffect(function () {
    document.title = 'New after page is loaded the title will change to thish ';
    //display this title after page rendering not before page  rendering which is the normal course
    //	const timer = setTimeout(() => console.log('Initial timeout!'), 1000);
    // return () => clearTimeout(timer);
    //  nIntervId = setInterval(flashText, 1000);
  });

  return React.createElement(
    'div',
    null,
    React.createElement(
      'h3',
      null,
      words[0]
    ),
    React.createElement(
      'h3',
      null,
      words[1]
    ),
    React.createElement(
      'h3',
      null,
      words[2]
    )
  );
}
var root1 = ReactDOM.createRoot(document.getElementById('tworoot'));
root1.render(React.createElement(RenderABC, null));
var root4 = ReactDOM.createRoot(document.getElementById('Abt'));
var element4 = React.createElement(AboutPage, null);
root4.render(element4);
function AboutPage() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'About'
    ),
    React.createElement(
      'p',
      null,
      'Hello ',
      React.createElement(
        'mark',
        null,
        'there.'
      ),
      React.createElement('br', null),
      'How do you do?'
    ),
    React.createElement(EI, null),
    React.createElement(EI, null)
  );
}
var root3 = ReactDOM.createRoot(document.getElementById('buton1'));
var element3 = React.createElement(MyButton1, null);
root3.render(element3);
function MyButton1() {
  function handleClick() {
    alert('You clicked me!');
  }
  return React.createElement(
    'button',
    { onClick: handleClick },
    'Click me'
  );
}
var links = ReactDOM.createRoot(document.getElementById('links'));
links.render(React.createElement(Links, null));
function Links() {
  return React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules' },
        'JS Modules'
      )
    ),
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        { href: 'https://transform.tools/html-to-jsx ' },
        'HTML TO JSX'
      )
    ),
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        { href: 'https://beta.reactjs.org/learn/describing-the-ui' },
        'REACT UI'
      )
    ),
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        { href: 'https://beta.reactjs.org/learn/responding-to-events' },
        'Events handling React'
      )
    ),
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        { href: 'https://beta.reactjs.org/reference/react/useState#ive-updated-the-state-but-the-screen-doesnt-update' },
        'React screen update'
      )
    ),
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        { href: 'https://reactplay.io/ideas/' },
        'React projects'
      )
    ),
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        { href: 'https://javascript.info/bubbling-and-capturing' },
        'JAVASCRIPT BUBBLING'
      )
    )
  );
}
var para = document.createElement('p');
para.textContent = 'This is using javascript TEXTContent property';
document.getElementById('JSTextContent').append(para);
var para1 = document.createElement('mark');
para1.innerText = 'This is using javascript INNERTEXT property';
document.getElementById('JSInnertext').append(para1);
function ProfileS() {
  return React.createElement('img', {
    src: 'https://i.imgur.com/MK3eW3As.jpg',
    alt: 'Katherine Johnson'
  });
}
var root9 = ReactDOM.createRoot(document.getElementById('Sc'));
var element9 = React.createElement(Gallery, null);
root9.render(element9);
function Gallery() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Amazing scientists'
      ),
      React.createElement(ProfileS, null),
      React.createElement(ProfileS, null),
      React.createElement(ProfileS, null)
    ),
    React.createElement(
      'div',
      null,
      React.createElement(ProfileS, null),
      React.createElement(Pile, null),
      React.createElement(ProfileS, null)
    ),
    React.createElement(
      'div',
      null,
      React.createElement(Pile, null)
    )
  );
}

var x = [1, 2, 3, 4];
var y = [].concat(x, [999]);

function abc() {
  console.log("inside cons");
  alert(x);
  alert(y);
}
abc();

//alert(x)
var parts = ["shoulders", "knees"];
var lyrics = ["head"].concat(parts, ["and", "toes"]);
//  ["head", "shoulders", "knees", "and", "toes"]
function sum(x, y, z) {
  return x + y + z;
}
var numbers1 = [1, 2, 3];
console.log(sum.apply(undefined, numbers1));
// Expected output: 6
var array1 = [1, 4, 9, 16];
// Pass a function to map
var map1 = array1.map(function (x) {
  return x * 2;
});
console.log(map1);
alert(map1);
var numbers = [2, 4, 6, 8, 10];
// function to return the square of a number
function square(number) {
  return number * number;
}
// apply square() function to each item of the numbers list
var square_numbers = numbers.map(square);
alert(square_numbers);
// Output: [ 4, 16, 36, 64, 100 ]
// Expected output: Array [2, 8, 18, 32]
var fuser = {
  name: 'Sonu Gukku'
};
var root5 = ReactDOM.createRoot(document.getElementById('datt'));
var element5 = React.createElement(Data1, null);
root5.render(element5);
function Data1() {
  //always make 1st letter in CAPS
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      fuser.name
    ),
    React.createElement(XY, null)
  );
}
var root = ReactDOM.createRoot(document.getElementById('root'));
var element = React.createElement(
  'h1',
  null,
  'Hello world'
);
root.render(element);
var root7 = ReactDOM.createRoot(document.getElementById('dummybuton'));
var element7 = React.createElement(MyButtonDummy, null);
root7.render(element7);
function MyButtonDummy() {
  return React.createElement(
    'button',
    null,
    'Dummy-ButoonClick'
  );
}
//----------------------------------
var root6 = ReactDOM.createRoot(document.getElementById('prof'));
var element6 = React.createElement(Profile, null);
root6.render(element6);
var user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
};
function Profile() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      user.name
    ),
    React.createElement('img', {
      className: 'avatar',
      src: user.imageUrl,
      alt: 'Photo of ' + user.name,
      style: {
        width: user.imageSize,
        height: user.imageSize
      }
    })
  );
}
//--------------------------------
var root8 = ReactDOM.createRoot(document.getElementById('ShoppingList'));
var element8 = React.createElement(ShoppingList, null);
root8.render(element8);
var products = [{ title: 'Cabbage', isFruit: false, id: 1 }, { title: 'Garlic', isFruit: false, id: 2 }, { title: 'Apple', isFruit: true, id: 3 }];
function ShoppingList() {
  var listItems = products.map(function (product) {
    return React.createElement(
      'li',
      {
        key: product.id,
        style: {
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }
      },
      product.title
    );
  });
  return React.createElement(
    'ul',
    null,
    listItems
  );
}
var root10 = ReactDOM.createRoot(document.getElementById('Xy'));
var element10 = React.createElement(Pile, null);
root10.render(element10);
function Pile() {
  return React.createElement('img', {
    src: 'https://i.imgur.com/QIrZWGIs.jpg',
    alt: 'Alan L. Hart'
  });
}
export function getImageUrl(person) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 's';

  return 'https://i.imgur.com/' + person.imageId + size + '.jpg';
}