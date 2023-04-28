/**
 * Interfaz Ranking, contiene la estructura de datos para un ranking.
 * @interface
 * @property {number} id - ID del ranking de usuario.
 * @property {string} ranking_name - Nombre del ranking.
 * @property {number} id_user - ID del usuario.
 * @property {string} user_name - Nombre del usuario.
 * @property {number} points - Puntuación actual del usuario en el ranking.
 * @property {number} validar - Estado de validación del usuario en el ranking.
 * @property {string} nick - Apodo o nickname del usuario en el ranking.
 * @property {number} id_ranking - ID del ranking.
 * @property {string} teacher - Nombre del profesor responsable del ranking.
 * @property {string} owner - Nombre del propietario del ranking.
 * @property {string} teacherImg - URL de la imagen del profesor responsable del ranking.
 * @property {string} code - Código de acceso al ranking.
 */
export interface Ranking {
  id: number;
  ranking_name: string;
  id_user: number;
  user_name: string;
  points: number;
  validar: number;
  nick: string;
  id_ranking: number;
  teacher: string;
  owner: string;
  teacherImg: string;
  code: string;
}
