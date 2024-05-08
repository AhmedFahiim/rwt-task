export interface Branch {
  id: number;
  vendor_id: number;
  country_id: number;
  country_name: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  active: 1 | 0;
  website: string;
  account_code: string;
}
