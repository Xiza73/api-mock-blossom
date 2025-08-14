export interface Account {
  account_id: number;
  client_logo_url: string;
  account_name: string;
  commercial_name: string;
  ruc_number: string;
  contact_name: string;
  position: string;
  phone_number: string;
  email: string;
  is_deleted: boolean;
  company_id: number;
  created_at: string;
  updated_at: string;
  company: {
    company_id: number;
    company_name: string;
  };
}
