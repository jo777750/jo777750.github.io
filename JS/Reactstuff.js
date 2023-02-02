var root = ReactDOM.createRoot(document.getElementById('root'));
var element = React.createElement(
  'h1',
  null,
  'Hello, 1234world'
);
root.render(element);

var root1 = ReactDOM.createRoot(document.getElementById('tworoot'));
var element1 = React.createElement(
  'h1',
  null,
  'Hello, 5678world'
);
root1.render(element1);

var root2 = ReactDOM.createRoot(document.getElementById('buton'));
var element2 = React.createElement(MyApp, null);
root2.render(element2);

var root3 = ReactDOM.createRoot(document.getElementById('buton1'));
var element3 = React.createElement(MyButton1, null);
root3.render(element3);

var root4 = ReactDOM.createRoot(document.getElementById('Abt'));
var element4 = React.createElement(AboutPage, null);
root4.render(element4);

var root5 = ReactDOM.createRoot(document.getElementById('datt'));
var element5 = React.createElement(Data1, null);
root5.render(element5);

var root6 = ReactDOM.createRoot(document.getElementById('prof'));
var element6 = React.createElement(Profile, null);
root6.render(element6);

var root7 = ReactDOM.createRoot(document.getElementById('dummybuton'));
var element7 = React.createElement(MyButtonDummy, null);
root7.render(element7);

var root8 = ReactDOM.createRoot(document.getElementById('ShoppingList'));
var element8 = React.createElement(ShoppingList, null);
root8.render(element8);

var root9 = ReactDOM.createRoot(document.getElementById('Sc'));
var element9 = React.createElement(Gallery, null);
root9.render(element9);

var root10 = ReactDOM.createRoot(document.getElementById('Xy'));
var element10 = React.createElement(Pile, null);
root10.render(element10);

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
    )
  );
}

function MyButton() {
  return React.createElement(
    'button',
    null,
    'I\'m a button 0'
  );
}

export default function MyApp() {
  return React.createElement(
    'div',
    null,
    React.createElement('hr', null),
    React.createElement(
      'h1',
      null,
      'Welcome to my app777'
    ),
    React.createElement('hr', null),
    React.createElement(MyButton, null)
  );
}

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

function MyButtonDummy() {

  return React.createElement(
    'button',
    null,
    'Dummy-ButoonClick'
  );
}

var fuser = {
  name: 'Sonu Gukku'
};
function Data1() {
  //always make 1st letter in CAPS

  return React.createElement(
    'h1',
    null,
    fuser.name
  );
}

//----------------------------------

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

function ProfileS() {
  return React.createElement('img', {
    src: 'https://i.imgur.com/MK3eW3As.jpg',
    alt: 'Katherine Johnson'
  });
}

function Gallery() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Amazing scientists'
    ),
    React.createElement(ProfileS, null),
    ' ',
    React.createElement(ProfileS, null),
    ' ',
    React.createElement(ProfileS, null),
    ' '
  );
}

function Pile() {
  return React.createElement('img', {
    src: 'https://i.imgur.com/QIrZWGIs.jpg',
    alt: 'Alan L. Hart'
  });
}
