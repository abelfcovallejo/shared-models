export interface Vacation {
    id: string;
    teamMemberId: string;
    startDate: Date;
    endDate: Date;
    staus: 'approved' | 'pending' | 'rejected';
}