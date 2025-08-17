export interface ActivityListItem {
  activity_list_item_id: number;
  item_name: string;
}

export interface ActivityList {
  activity_list_id: number;
  activity_name: string;
  account_id: number;
  unit_id: number;
  zone_id: number;
  is_deleted: boolean;
  company_id: number;
  created_at: string;
  updated_at: string;
  company: {
    company_id: number;
    company_name: string;
  };
  account: {
    account_id: number;
    account_name: string;
  };
  unit: {
    unit_id: number;
    unit_name: string;
  };
  zone: {
    zone_id: number;
    zone_name: string;
  };
  items: ActivityListItem[];
}
