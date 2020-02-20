/**
 * PersonLike interface.
 */
export interface PersonLike {
  // Note that we could have defined common variables here in the interface, but
  // that would cause the variables to be "public"

  /**
   * Returns the full name of this person.
   * @returns {string} full name
   */
  getFullName(): string;

  /**
   * Returns the birth year of this person.
   * @returns {number} birth year of this person
   */
  getBirthYear(): number;

  /**
   * Does a self-introduction.
   * @returns {string} self-introduction of this person
   */
  selfIntro(): string;
}
