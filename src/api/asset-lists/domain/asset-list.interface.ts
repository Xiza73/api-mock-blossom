export interface AssetListItem {
  asset_list_item_id: number;
  item_name: string;
}

export interface AssetList {
  asset_list_id: number;
  asset_name: string;
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
  items: AssetListItem[];
}
