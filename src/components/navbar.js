import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.png";

const Navbar = () => (
  <Flex
    h="10vh"
    px={24}
    position="absolute"
    w="100vw"
    alignItems="center"
    justifyContent="space-between"
  >
    <a href="/">
      <Flex h={8}>
        <img src={Logo} alt="Aid Gurgaun" height="100%" />
      </Flex>
    </a>
    {/* <Flex justifyContent="flex-end" gap={12}>
      <a href="#about" className="nav-item">
        <Text>About Us</Text>
      </a>
      <a href="#volunteer" className="nav-item">
        <Text>Volunteer</Text>
      </a>
      <a href="#donate" className="nav-item">
        <Text>Donate</Text>
      </a>
    </Flex> */}
  </Flex>
);

export default Navbar;
