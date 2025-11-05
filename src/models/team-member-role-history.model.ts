export interface TeamMemberRoleHIstory {
    id: string;
    roleId: string;
    teamMemberId: string;
    startDate: Date;    
    endDate?: Date;
}