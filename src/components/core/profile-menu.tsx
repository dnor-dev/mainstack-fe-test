import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Gift,
  Settings,
  Bug,
  LogOut,
  SwitchCamera,
  LayoutGrid,
} from "lucide-react";
import { VStack } from "../ui/stack";
import { Avatar, AvatarFallback } from "../ui/avatar";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ProfileMenu({ open, onClose }: Props) {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current?.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Profile Menu Popup */}
      {open && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 top-12 mt-2 w-80 bg-white shadow-lg rounded-xl overflow-hidden"
        >
          <div className="px-4 pt-4 pb-2">
            <div className="flex items-center space-x-3">
              <Avatar className="rounded-full w-[32px] h-[32px]">
                <AvatarFallback
                  className="text-white"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #5C6670 20%, #131316 70%)",
                  }}
                >
                  OJ
                </AvatarFallback>
              </Avatar>
              <VStack className="space-y-1">
                <p className="text-sm text-primary font-semibold">
                  Olivier Jones
                </p>
                <p className="text-xs font-medium">olivierjones@gmail.com</p>
              </VStack>
            </div>
          </div>

          {/* Menu Items */}
          <VStack className="p-2 space-y-2">
            {menuItems.map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="w-full flex items-center p-3 text-sm hover:bg-gray-100 rounded-lg transition !text-primary font-medium opacity-100"
              >
                <Icon className="w-4 h-4 mr-3 text-primary" />
                {label}
              </button>
            ))}
          </VStack>
        </motion.div>
      )}
    </>
  );
}

// Menu items
const menuItems = [
  { icon: Settings, label: "Settings" },
  { icon: ShoppingBag, label: "Purchase History" },
  { icon: Gift, label: "Refer and Earn" },
  { icon: LayoutGrid, label: "Integrations" },
  { icon: Bug, label: "Report Bug" },
  { icon: SwitchCamera, label: "Switch Account" },
  { icon: LogOut, label: "Sign Out" },
];
