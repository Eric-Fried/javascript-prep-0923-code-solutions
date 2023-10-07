function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbersResult:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHourToMinutesResult:', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'hello ' + name;
}

var getGreetingResult = getGreeting('World');
console.log('getGreetingResult:', getGreetingResult);

function addAndMultuplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultuplyBy5Result = addAndMultuplyBy5(10, 5);
console.log('addAndMultuplyBy5Result:', addAndMultuplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5Result:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbersResult:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumferenceResult:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log('getFullNameResult:', getFullNameResult);

function cube(number) {
  return number ** 3;
}

var cubeResult = cube(5);
console.log('cubeResult', cubeResult);
