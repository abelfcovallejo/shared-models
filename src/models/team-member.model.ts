import { Project } from "./project.model";

export interface TeamMember {
  id: string;
  name: string;
  phone: string;
  email: string;
  startDate: Date;
  endDate?: Date;
}
