export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  status: 'completed' | 'in-progress';
  progress?: number;
  expectedCompletion?: string;
}