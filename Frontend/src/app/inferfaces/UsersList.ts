/**
 * Interface for a list of users.
 */
export interface UsersList {
  /**
   * The ID of the user.
   */
  id: number;

  /**
   * The first name of the user.
   */
  name: string;

  /**
   * The last name of the user.
   */
  lastName: string;

  /**
   * The email address of the user.
   */
  email: string;

  /**
   * The school or institution the user is associated with.
   */
  school: string;

  /**
   * The date the user was created or registered in the system.
   */
  date: string;

  /**
   * The role of the user in the system.
   */
  rol: String;
}
