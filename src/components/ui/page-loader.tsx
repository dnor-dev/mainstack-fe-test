import { FC, useEffect, useState } from "react";

const PageLoader: FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + 10 : prev));
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 z-50 left-0 w-full h-1 bg-transparent">
      <div
        className="h-full bg-primary transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default PageLoader;
