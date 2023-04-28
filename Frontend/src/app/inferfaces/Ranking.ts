/**
 * Interfaz RankingUser, contiene la estructura de datos para los usuarios dentro de un ranking
 */
export interface RankingUser {
  /**
   * ID del ranking al que pertenece el usuario
   */
  id_ranking: number;

  /**
   * ID del usuario
   */
  id_user: number;

  /**
   * Nombre del ranking al que pertenece el usuario
   */
  ranking_name: string;

  /**
   * Nombre del usuario
   */
  name: string;

  /**
   * Apellido del usuario
   */
  lastName: string;

  /**
   * Apodo o nickname del usuario
   */
  nick: string;

  /**
   * Puntuación actual del usuario en el ranking
   */
  points: number;

  /**
   * URL de la imagen del usuario
   */
  img: String;
}
