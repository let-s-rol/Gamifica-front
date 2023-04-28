/**
 * Interfaz PendentList, contiene la estructura de datos para las listas de usuarios pendientes
 */
export interface PendentList {
  /**
   * Nombre del usuario
   */
  user_name: string;

  /**
   * Apellido del usuario
   */
  lastName: string;

  /**
   * Nombre del ranking al que pertenece el usuario
   */
  ranking: string;

  /**
   * ID del ranking al que pertenece el usuario
   */
  id_ranking: number;

  /**
   * ID del usuario
   */
  id_user: number;

  /**
   * URL de la imagen del usuario
   */
  img: String;
}
