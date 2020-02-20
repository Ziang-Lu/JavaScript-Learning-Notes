/**
 * Adds the given two numbers.
 * @param {number} x first addend
 * @param {number} y seond addend
 * @returns {number} sum of the given two numbers
 */
const add = (x: number, y: number): number => {
  return x + y;
};

console.log(add(1, 2));

/**
 * Returns the full name from the given first name and last name.
 * @param {string} firstName first name
 * @param {string} lastName last name
 * @returns {string} full name
 */
const getFullName = (firstName: string, lastName?: string): string => {
  // "?" means optional
  // Since lastName is optional, it might be undefined, in which case we simply
  // return firstName.
  if (lastName === undefined) {
    return firstName;
  }
  return `${firstName} ${lastName}`;
};

console.log(getFullName('Ziang', 'Lu'));
