import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = {
  onClick?: () => void;
  className: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<PropsWithChildren<Props>> = ({
  onClick,
  className,
  children,
  ...rest
}) => {
  return (
    <button className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};
