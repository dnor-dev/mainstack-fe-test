import MainstackLogo from "../../assets/images/mainstack-logo.svg";
import { HStack } from "../ui/stack";
import HomeIcon from "../../assets/images/home-icon.svg";
import AnalyticsIcon from "../../assets/images/insert_chart.svg";
import RevenueIcon from "../../assets/images/payments.svg";
import CRMIcon from "../../assets/images/user-group.svg";
import AppsIcon from "../../assets/images/widgets-icon.svg";
import MenuIcon from "../../assets/images/menu.svg";
import NotificationIcon from "../../assets/images/notifications.svg";
import ChatIcon from "../../assets/images/chat.svg";
import { Link, useLocation } from "react-router-dom";
import { Banknote, Home } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";

const Navbar = () => {
  const location = useLocation();

  const navs = [
    {
      name: "Home",
      path: "/",
      activeIcon: <Home size={17} color="#fff" />,
      inActiveIcon: (
        <img src={HomeIcon} alt="Home Icon" width={20} height={20} />
      ),
    },
    {
      name: "Analytics",
      path: "#",
      activeIcon: (
        <img src={AnalyticsIcon} alt="Analytics" width={20} height={20} />
      ),
      inActiveIcon: (
        <img src={AnalyticsIcon} alt="Analytics" width={20} height={20} />
      ),
    },
    {
      name: "Revenue",
      path: "/revenue",
      activeIcon: (
        <img src={RevenueIcon} alt="Revenue" width={20} height={20} />
      ),
      inActiveIcon: <Banknote size={20} color="#56616B" />,
    },
    {
      name: "CRM",
      path: "#",
      activeIcon: <img src={CRMIcon} alt="CRM" width={20} height={20} />,
      inActiveIcon: <img src={CRMIcon} alt="CRM" width={20} height={20} />,
    },
    {
      name: "Apps",
      path: "#",
      activeIcon: <img src={AppsIcon} alt="Apps" width={20} height={20} />,
      inActiveIcon: <img src={AppsIcon} alt="Apps" width={20} height={20} />,
    },
  ];

  return (
    <header className="sticky z-50 w-full h-full bg-white top-0">
      <nav>
        <HStack className="items-center justify-between rounded-[100px] border-2 border-white p-3 pl-5 bg-inherit shadow-sm">
          <img
            src={MainstackLogo}
            alt="Mainstack Logo"
            width={36}
            height={36}
          />

          <HStack className="items-center space-x-5 relative -right-10">
            {navs.map((nav, index) => {
              const isActive = location.pathname === nav.path;
              return (
                <Link key={index} to={nav.path}>
                  <HStack
                    className={`items-center justify-center space-x-1.5 py-2 w-[112px] rounded-[100px] ${
                      isActive ? "" : "hover:bg-[#EFF1F6]"
                    } transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-transparent text-[#56616B]"
                    }`}
                  >
                    {isActive ? nav.activeIcon : nav.inActiveIcon}
                    <p className="font-semibold">{nav.name}</p>
                  </HStack>
                </Link>
              );
            })}
          </HStack>

          <HStack className="space-x-2">
            <Button
              size="icon"
              className="rounded-full bg-inherit hover:bg-inherit cursor-pointer shadow-none"
            >
              <img
                src={NotificationIcon}
                alt="Notification"
                width={20}
                height={20}
              />
            </Button>
            <Button
              size="icon"
              className="rounded-full bg-inherit hover:bg-inherit cursor-pointer shadow-none"
            >
              <img src={ChatIcon} alt="Chat" width={20} height={20} />
            </Button>
            <HStack className="bg-[#EFF1F6] px-[3px] h[40px] items-center justify-center rounded-[100px]">
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
              <Button
                size="icon"
                className="rounded-full bg-inherit hover:bg-inherit cursor-pointer shadow-none"
              >
                <img src={MenuIcon} alt="Menu" width={20} height={20} />
              </Button>
            </HStack>
          </HStack>
        </HStack>
      </nav>
    </header>
  );
};

export default Navbar;
