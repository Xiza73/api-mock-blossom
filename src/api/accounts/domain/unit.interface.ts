export interface Unit {
  unit_id: number;
  account_id: number;
  unit_name: string;
  is_deleted: boolean;
  created_at: string;
  zones: {
    zone_id: number;
    zone_name: string;
  }[];
}
