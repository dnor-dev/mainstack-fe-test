import { Button } from "@/components/ui/button";
import { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div className="flex flex-col  space-y-2 items-center justify-center h-[70vh] w-full">
      <h1 className="text-xl font-bold">404 - Page Not Found</h1>
      <Link to="/">
        <Button className="text">Go to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
