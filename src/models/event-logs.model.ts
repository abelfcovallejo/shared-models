export interface EventLogs {
  id?: string;  // Opcional para creaciones nuevas
  type: 'missingTS' | 'missingOne-One'  | 'missingTask' | 'other';
  teamMemberId: string;
  date: Date | string;
  description: string;

}
