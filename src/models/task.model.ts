
export interface Task {
    id: string;
    name: string;
    description: string,
    category: string | 'Development' | 'Design' | 'Testing' | 'Documentation' | 'Research' | 'Training' | 'Companys Task',
}