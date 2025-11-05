export interface TeamMemberTask {
    id: string;
    name: string;
    startDate: Date;
    endDate?: Date;
    teamMemberId: string;
    notes: string;
    status: 'not-started' | 'in-progress' | 'completed' | 'on-hold';
}
