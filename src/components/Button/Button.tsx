import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { TEST_ID } from "../../constants/testId";

export const Button: React.FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ onClick, className, children, ...rest }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      data-testid={TEST_ID.BUTTON}
      {...rest}
    >
      {children}
    </button>
  );
};
