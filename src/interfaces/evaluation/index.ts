export interface IGETEVALRES {
  status: number;
  code: string;
  message: string;
  data: boolean;
}

export interface IGETEVALSCORERES {
  status: number;
  code: string;
  message: string;
  data: IEVALSCORE;
}

export interface IEVALSCORE {
  acidity: number;
  carbonicAcid: number;
  density: number;
  heavy: number;
  scent: number;
  sweetness: number;
}
