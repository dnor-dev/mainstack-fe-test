import { motion } from "framer-motion";
import { PropsWithChildren, FC } from "react";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col h-screen w-full no-scrollbar"
    >
      {children}
    </motion.div>
  );
};

export default DashboardLayout;
