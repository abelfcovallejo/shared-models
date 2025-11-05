export interface Conversation {
  id?: string; // Opcional para creaciones nuevas
  date: Date | string;
  projectId: string;
  teamMemberSentiment: 'Very Happy' | 'Happy' | 'Neutral' | 'Unhappy' | 'Very Unhappy';
  notes: string;
  teamMemberId: string;
}
