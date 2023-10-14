// create your loops here.
function whileLoop1() {
  const newArray = [];
  let n = 0;
  while (n < 10) {
    newArray.push(n);
    ++n;
  }
  return newArray;
}

console.log('whileLoop1 output \n', whileLoop1());

function whileLoop2() {
  const newArray = [];
  let n = 0;
  while (n < 19) {
    newArray.push(n);
    n = n + 2;
  }
  return newArray;
}

console.log('whileLoop2 output \n', whileLoop2());

function forLoop1() {
  const newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(i);
  }
  return newArray;
}
console.log('forLoop1 output \n', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion: ' + i);
  }
}
forLoop2();

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const newArray2 = [];
  for (const property in object) {
    newArray2.push(property);
  }
  return newArray2;
}

console.log('forInLoop1 output: \n', forInLoop1(object));

function forInLoop2(object) {
  const newArray2 = [];
  for (const property in object) {
    newArray2.push(object[property]);
  }
  return newArray2;
}

console.log('forInLoop2 output: \n', forInLoop2(object));
