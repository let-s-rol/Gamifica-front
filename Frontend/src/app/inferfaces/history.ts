interface HistorialNota {
    [key: string]: {
      nombre: string;
      usuario_correccion: string;
      pentabilities: {
        Responsabilidad: number;
        Cooperacion: number;
        Iniciativa: number;
        Emocional: number;
        Pensamiento: number;
      };
      fecha: string;
      hora: string;
    };
  }