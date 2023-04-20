console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'

function hello() {
  return 'Hello World!';
}

// Call the function to test
console.log('Test - should say "Hello World!"', hello());

console.log( hello() );

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName( name ) {
  return 'Hello, Touathi!';
}

// Remember to call the function to test

console.log( helloName() );

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber  ) {
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber;
  return answer;
}

console.log( '8 plus 5 equals', addNumbers( 8, 5) );

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  let answer = num1 * num2 * num3;
  return answer;
}

console.log( '2 * 4 * 15 =', multiplyThree( 2, 4, 15));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise

function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } 
  else {  
    return false;
  }
}

// Call the function to test each outcome (true & false)

console.log( 'If the number is greater than 0 then it will be true, false if the number is less than 0');
console.log( '5 > 0 =', isPositive(5) );
console.log( '-5 < 0 =', isPositive(-5));

// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(20) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-20) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.



function getLast1() {  

let animals = ['dog', 'cat', 'bird'];
let Lastitem = animals[ animals.length - 1]

  if ( animals.length ) { 
      return Lastitem;
  }
  else {
    return undefined;
  }
}
console.log( 'Test with an filled animal array');
console.log( 'Last item is', getLast1() );




function getLast2() {  

let option2 = [];
let Lastitem1 = option2[ option2.length - 1]

  if ( option2.length ) { 
      return Lastitem1;
  }
  else {
    return undefined;
  }
}
console.log( 'Test with an empty array');
console.log( 'Last item is', getLast2() );

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find( value, array ){
let found = true;
  for ( let i = 0; i < (array.length); i++ ) {
    if ( value === array[ i ] ) {
    return found;
  }
  }
   return false;
}


console.log( 'should be true =', find( 4, [1, 2, 3, 4] ) );
console.log( 'Should be false =', find( 8, [1, 2, 3, 4] ) );

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
