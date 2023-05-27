export interface ITypography {
  variant?: TypographyVariant;
  color?: TypographyColor;
  className?: string;
  as?: TypographyVariant;
  children?: React.ReactNode;
}

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "intro"
  | "body"
  | "text-caption-large"
  | "text-caption"
  | "text-caption-small";

export type TypographyColor =
  | "black"
  | "white"
  | "red"
  | "blue"
  | "green"
  | "orange";
