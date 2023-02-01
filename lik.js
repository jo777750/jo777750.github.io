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
      'Hello there.',
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
  return React.createElement(
    'button',
    null,
    'I\'m a button 1'
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
  name: 'B Spears',
  imageUrl: 'https://imgur.com/t/brittany_spears/N0TflIP',
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