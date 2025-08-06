export interface User {
  user_id: number;
  first_name: string;
  last_name: string;
  document_number: string;
  position: string;
  company_id: number;
  supervisor: number;
  phone_number: string;
  email: string;
  password: string;
  birthday: string;
  address: string;
  residential_address: string;
  cognito_sub: string;
  is_deleted: boolean;
  company: {
    company_id: number;
    company_name: string;
  };
  supervisor_user?: {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    position: string;
  };
  created_at: string;
}
