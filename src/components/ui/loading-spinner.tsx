import { LoaderCircle } from "lucide-react";
import { FC } from "react";

type Props = {
  size?: string;
};

const LoadingSpinner: FC<Props> = ({ size }) => {
  return (
    <LoaderCircle className="animate-spin text-primary" size={size ?? 32} />
  );
};

export default LoadingSpinner;
