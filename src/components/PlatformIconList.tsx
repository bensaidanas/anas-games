import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
  FaPlaystation,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    // index signeture
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    max: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
