const person = {
  firstName: 'Eric',
  lastName: 'Fried',
  hobby: 'motorsports',
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("the person's name is: " + fullName);

person.job = 'software developer';
console.log('the persons current job is: ' + person.job);

person['previousJob'] = 'mechanic';
console.log('the persons previous job is: ' + person['previousJob']);

console.log(person);
