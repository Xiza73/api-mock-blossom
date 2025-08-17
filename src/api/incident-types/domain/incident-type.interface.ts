export interface IncidentType {
  incident_type_id: number;
  type_name: string;
  is_deleted: boolean;
  company_id: number;
  created_at: string;
  updated_at: string;
  company: {
    company_id: number;
    company_name: string;
  };
}
