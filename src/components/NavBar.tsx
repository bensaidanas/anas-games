import { Box, HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Show above="lg">
          <Text whiteSpace="nowrap" fontWeight={"Bold"} fontSize={"xl"}>
            Anas Games
          </Text>
        </Show>
      </HStack>
      <Box>
        <SearchInput />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
