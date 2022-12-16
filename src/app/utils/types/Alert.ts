export interface Alert {
  text: string,
  level?: AlertLevel,
  duration?: 2000 | 3000 | 5000 | 8000,

}

export type AlertLevel = 'success' | 'warning' | 'error';
