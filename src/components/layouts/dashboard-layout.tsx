import { motion } from "framer-motion";
import { PropsWithChildren, FC } from "react";
import Navbar from "../core/navbar";
import { VStack } from "../ui/stack";
import AppBar from "../ui/app-bar";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col p-5 h-screen w-full no-scrollbar"
    >
      <VStack className="w-full h-full">
        <Navbar />
        <AppBar />
        {children}
      </VStack>
    </motion.div>
  );
};

export default DashboardLayout;
