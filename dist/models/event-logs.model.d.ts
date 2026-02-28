export interface EventLogs {
    id: string;
    type: 'missingTS' | 'missingOne-One' | 'missingTask' | 'other';
    teamMemberId: string;
    date: Date | string;
    description: string;
}
