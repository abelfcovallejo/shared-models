export interface Project {
    id: string;
    name: string;
    startDate: Date;
    endDate?: Date;
    manager: string;
    healthStatus: 'healthy' | 'warning' | 'critical';
    skillsUsed?: string[];
}
