import { ReactNode } from "react";

export const VStack = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};

export const HStack = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
};
