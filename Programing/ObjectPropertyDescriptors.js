// Why can't you change Math.PI?
console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
/*
Output:
{
  value: 3.141592653589793,
  writable: false,       ← Cannot be changed
  enumerable: false,     ← Hidden from loops
  configurable: false    ← Cannot be deleted or reconfigured
}
*/
Math.PI = 5;
console.log(Math.PI); // 3.141592653589793 — unchanged, silently failed

const myNewObject = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
};

// 1. Inspect initial descriptors
console.log(Object.getOwnPropertyDescriptor(myNewObject, "name"));
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// 2. Lock the 'name' property and hide it from loops
Object.defineProperty(myNewObject, "name", {
  writable: false,
  enumerable: false,
});

// 3. Attempt to modify — silently fails (throws in strict mode)
myNewObject.name = "lemon tea";
console.log(myNewObject.name); // 'ginger chai' — unchanged

// 4. Enumeration — 'name' is now hidden
for (let [key, value] of Object.entries(myNewObject)) {
  console.log(`${key} : ${value}`);
}
// Output:
// price : 250
// isAvailable : true
// ('name' is missing — enumerable: false)
