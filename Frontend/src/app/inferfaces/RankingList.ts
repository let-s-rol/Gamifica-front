export interface Ranking {

  // CATEGORÍAS DE RANKING_USER
  id: number;
  ranking_name: string;
  id_user: number;
  user_name: string;
  points: number;
  validar: number;
  nick: string;

  //CATEGORÍAS DE RANKINGS
  id_ranking: number;
  teacher: string;
  owner: string;
  teacherImg: string;
  code: string;

}
