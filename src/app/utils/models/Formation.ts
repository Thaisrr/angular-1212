export interface Formation {
  title: string;
  start: string;
  duration: number;
  trainer: Trainer;
  modules: string[];
  categories: string[];
}

export interface Trainer {
  firstname: string;
  lastname: string;
}

