/**
 * Adds the given two numbers.
 * @param x first addend
 * @param y seond addend
 */
const add = (x: number, y: number): number => {
  return x + y;
};

console.log(add(1, 2));

/**
 * Returns the full name from the given first name and last name.
 * @param firstName first name
 * @param lastName last name
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
