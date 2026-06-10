/**
 * Use call() when you want to execute a function immediately with a custom this and separate arguments.
 */
const user = { name: "Raj" };

function greet(city, country) {
  console.log(`Hello , I am ${this.name}, from ${city}, ${country}.`);
}

// greet("Bangalore", "India"); // Hello , I am undefined, from Bangalore, India.

greet.call(user, "Bangalore", "India"); // Hello , I am Raj, from Bangalore, India.

// ----------- apply
/**
 * Use apply() when you want to execute a function immediately, but your arguments are already stored inside an array.
 */
const user2 = { name: "Bob" };

function greet2(city, country) {
  console.log(`Hello, I am ${this.name} from ${city}, ${country}.`);
}

// Arguments are bundled in an array, executes immediately
greet2.apply(user2, ["Tokyo", "Japan"]);
// Output: Hello, I am Bob from Tokyo, Japan.

//------------- Bind
/**
 * Use bind() when you want to pre-configure a function's context and/or arguments to be triggered later on
 */

const user3 = { name: "Charlie" };

function greet3(city, country) {
  console.log(`Hello, I am ${this.name} from ${city}, ${country}.`);
}

// Returns a new function instance; does not run yet
const boundGreet = greet.bind(user3, "New York", "USA");

// Can be executed at a later stage in your application
boundGreet();
// Output: Hello, I am Charlie from New York, USA.
