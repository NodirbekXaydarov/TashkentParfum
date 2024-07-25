export interface IItem {
  id: string;
  label: string;
  checked: boolean;
  children?: IItem[];
}
