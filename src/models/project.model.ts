export interface Project {
  id: string;
  name: string;
  startDate: Date;
  endDate?: Date;
  manager: string; // ID del manager
  healthStatus: 'healthy' | 'warning' | 'critical';
  skillsUsed?: string[];

}
