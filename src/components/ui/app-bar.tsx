import { VStack } from "./stack";
import AppbarIcon1 from "../../assets/images/app-bar-icon-1.svg";
import AppbarIcon2 from "../../assets/images/app-bar-icon-2.svg";
import AppbarIcon3 from "../../assets/images/app-bar-icon-3.svg";
import AppbarIcon4 from "../../assets/images/app-bar-icon-4.svg";

const AppBar = () => {
  const icons = [AppbarIcon1, AppbarIcon2, AppbarIcon3, AppbarIcon4];

  return (
    <VStack className="p-3 bg-white shadow-lg rounded-[100px] h-fit w-fit space-y-6 fixed top-[40%] left-5">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon}
          alt="Appbar"
          width="24px"
          className="filter grayscale-[100%] cursor-pointer"
        />
      ))}
    </VStack>
  );
};

export default AppBar;
