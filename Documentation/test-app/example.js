// follow https://www.youtube.com/watch?v=SydnKbGc7W8 as a guide

const express = require('express');
// const v = 1; // uncomment this line to see how eslint enforces an empty space after a require

// uncomment line 5 to see eslint warning for line 1 go away. Pay attention to your terminal's PROBLEMS tab
const app = express();

// now uncomment this block of code
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

app.get('/', (req, res) => {
  res.send('hello');
  process.exit(1);
});

// if you use a let variable but never reassign your let variable eslint will recommend
// to use a const variable instead. The power of linting!
let y = 1;
const x = 1;

// change this to double quotes and watch eslint/prettier complain
const z = 'Hello';

// disabled eslint error-warning. look at .eslintrc.json --> "object-shorthand": "off",
const obj = {
  hello: function () {
    console.log('hello world');
  },
};

// disabled eslint error-warning. look at .eslintrc.json --> "class-methods-use-this": "off"
class A {
  foo() {
    console.log('Hello World'); // error Expected 'this' to be used by class method 'foo'
  }
}
