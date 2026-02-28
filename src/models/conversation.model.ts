export interface Conversation {
  id: string; 
  date: Date | string;
  projectId: string;
  teamMemberSentiment: 'Very Happy' | 'Happy' | 'Neutral' | 'Unhappy' | 'Very Unhappy';
  notes: string;
  teamMemberId: string;
}
