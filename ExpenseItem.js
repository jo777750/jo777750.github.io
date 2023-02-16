function EI() {
  const todayDate = new Date();
  return (
    <h5>
      default exported function: Date Component: {todayDate.toLocaleString()}
    </h5>
  );
}

export default EI;
//Note:same syntax can be wriiten as: export { myFunction as default };

function XY() {
  const todayDate = new Date();
  return (
    <h5>
      Non-default exported function: Date Component:{" "}
      {todayDate.toLocaleString()}
    </h5>
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
const myVariable = 15;
export { myVariable };
