/**
 * Adds the given two numbers.
 * @param x first addend
 * @param y seond addend
 */
function add(x: number, y: number): number {
  return x + y;
}

/**
 * Returns the full name from the given first name and last name.
 * @param firstName first name
 * @param lastName last name
 */
function getFullName(firstName: string, lastName?: string): string {
  // Since lastName is optional, it might be undefined, in which case we simply
  // return firstName.
  if (lastName === undefined) {
    return firstName;
  }
  return `${firstName} ${lastName}`;
}
