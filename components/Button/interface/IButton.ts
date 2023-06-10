/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface IButton {
  classNames?: string;
  label?: string;
  type?: string;
  buttonType?: string;
  href?: string;
  tstId?: string;
  icon?: any;
  handleClick?: void;
  target?: string;
  isLoading?: boolean;
  disabled?: string;
  isDisabled?: boolean;
}
