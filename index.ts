// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const enum Shape {
  Circle,
  Square,
}

console.log(Shape['1']);

let myObject: any = {
  a: 10,
  b: 20,
  c: { d: 11 },
};

Object.defineProperty(myObject, 'c', {
  get() {
    return myObject.c;
  },
  set(value) {
    console.log('c property has been modified--:', value);
    // myObject.c = value;
  },
});

// Test modifying the c property
myObject.c = { d: 22 }; // This will trigger the setter function and log the
