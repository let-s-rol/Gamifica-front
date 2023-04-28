/**
 * Interfaz User, contiene la estructura de datos para un usuario
 */
export interface User {
  /**
   * Nombre del usuario
   */
  name: string;

  /**
   * Contraseña del usuario
   */
  password: string;

  /**
   * Repetición de la contraseña del usuario
   */
  passwordRepeat: string;

  /**
   * Apellido del usuario
   */
  lastname: string;

  /**
   * Apodo o nickname del usuario
   */
  nick: string;

  /**
   * Correo electrónico del usuario
   */
  email: string;

  /**
   * Fecha de registro del usuario
   */
  date: Date;

  /**
   * Escuela a la que pertenece el usuario
   */
  school: string;

  /**
   * Rol del usuario (ejemplo: estudiante, profesor)
   */
  rol: string;

  /**
   * URL de la imagen del usuario
   */
  img: string;
}
