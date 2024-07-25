export interface IInput {
  id: string;
  min?: number | string;
  max?: number | string;
  minlength?: number | string;
  maxlength?: number | string;
  inputClass?: string;
  label?: string;
  placeholder?: string;
  wrapperClass?: string;
  error?: string;
  loading?: boolean;
  type?: string;
  inputmode?:
    | "search"
    | "text"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  keyup?: KeyboardEvent;
  input?: Event;
  required?: boolean;
}

// Buttons Type

export interface IVariants {
  [key: string]: string;
  primary: string;
  secondary: string;
  transparent: string;
}

export interface ISize {
  [key: string]: string;
  small: string;
  medium: string;
  large: string;
}

export interface ILoaderColors {
  [key: string]: string;
  primary: string;
  transparent: string;
  secondary: string;
}

type Variants = "primary" | "secondary" | "transparent" | string;
type Size = "small" | "medium" | "large" | string;

export interface IProps {
  text: string;
  wrapperClass?: string;
  loading?: boolean;
  variant?: Variants;
  size?: Size;
  iconPosition?: "left" | "right";
  // eslint-disable-next-line vue/require-default-prop
  icon?: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
}
