function EI() {
  var todayDate = new Date();
  return React.createElement(
    "h5",
    null,
    "default_export_function: EI Component: ",
    todayDate.toLocaleString()
  );
}
export default EI;
//Note:same syntax can be wriiten as: export { myFunction as default };

function XY() {
  var todayDate = new Date();
  return React.createElement(
    "h5",
    null,
    "Non-default_exported_function: XY Component:",
    todayDate.toLocaleString()
  );
}
export { XY };

export function functionName() {
  /* … */
  alert(99);
}

//below 2 code lines will throw duplicate default error
// export default function cube(x) {
//   return x * x * x;
// }

//variables
var myVariable = 15;
export { myVariable };