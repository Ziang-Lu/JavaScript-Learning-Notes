// ***** if ... else if ... else Statement*****
console.log('***** if ... else if ... else Statement *****');

// Logic of checking the account balance at an ATM
let isActive = true;
let balance = 325.00;
let checkBalance = true;
console.log(
    `isActive=${isActive}, balance=${balance}, checkBalance=${checkBalance}`
);
if (checkBalance) {
  if (isActive && balance > 0) {
      console.log(`Your balance is $${balance.toFixed(2)}`);
  } else if (!isActive) {
      console.log('Your account is no longer active.');
  } else if (balance === 0) {
      console.log('Your account is empty');
  } else {
      console.log('Your balance is negative. Please contact the bank.');
  }
} else {
  console.log('Thank you. Have a nice day!');
}

console.log();


// ***** switch Statement *****
console.log('***** switch Statement *****');

// Check the number of days for a specific month
let month = 'Nov';
let days = null;
switch (month) {
  case 'Jan':
  case 'Mar':
  case 'May':
  case 'Jul':
  case 'Aug':
  case 'Oct':
  case 'Dec':
    days = 31;
    break;
  case 'Apr':
  case 'Jun':
  case 'Sep':
  case 'Nov':
    days = 30;
    break;
  case 'Feb':
    days = 28;
    break;
  default:
    console.log('Not a valid month!');
    break;
}
if (days !== null) {
  console.log(`There are ${days} days in ${month}.`);
}
