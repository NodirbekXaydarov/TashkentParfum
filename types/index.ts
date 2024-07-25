export interface BreadcrumbLinks {
  path: string;
  label: string;
}
export interface IRegions {
  id: string | number;
  value: string;
  label: string | null;
  districts?: ISelect[];
}
export interface ISelect extends IRegions {
  region_id?: string;
}
export interface IOrderAddress {
  region: ISelect | null;
  district: ISelect | null;
  location: string;
}
export interface IOrderContact {
  fullName: string;
  phone: string;
  extraPhone: string;
}
export type steps = "step-1" | "step-2" | "step-3";
