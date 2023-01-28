var root = ReactDOM.createRoot(document.getElementById('root'));
var element = React.createElement(
  'h1',
  null,
  'Hello, 1234world'
);
root.render(element);
var root2 = ReactDOM.createRoot(document.getElementById('tworoot'));
var element2 = React.createElement(
  'h1',
  null,
  'Hello, 5678world'
);
root2.render(element2);