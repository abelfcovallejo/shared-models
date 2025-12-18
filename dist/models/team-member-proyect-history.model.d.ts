export interface TeamMemberProjectHIstory {
    id: string;
    projectId: string;
    teamMemberId: string;
    startDate: Date;
    endDate?: Date;
    skillsUsed?: string;
}
