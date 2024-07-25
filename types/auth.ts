/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IUser {
  id: number | null;
  uuid: string | null;
  full_name: string | null;
  phone: string | null;
  district: {
    id?: number;
    title: string | null;
    region: {
      id: number | null;
      title: string | null;
      title_uz?: string;
      title_sr?: string;
      title_ru?: string;
      delivery_id?: number;
      soato?: string;
    };
    delivery_latitude?: string;
    delivery_longitude?: string;
  } | null;
  address?: string;
  avatar_src?: string;
  coupon_balance?: string;
  cashack_balance?: string;
  language?: "uz" | "sr" | "ru";
}

export interface ILoginForm {
  phone: string;
  password: string;
}

export interface IRegisterForm {
  fullName: string;
  signature: string;
  email?: string;
  password: string;
  phoneNumber: string;
}
export interface IRegisterResponse extends IRegisterForm {
  token: string;
}

export interface IResponse<T> {
  data: T | any;
  error: string | any;
}

export type Option<T> = T | null | undefined;
