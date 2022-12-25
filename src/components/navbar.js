import React from "react";
import { Box, Flex, Button as ChakraButton, Text } from "@chakra-ui/react";

const Navbar = () => (
  <Flex
    h="10vh"
    px={24}
    position="absolute"
    w="100vw"
    alignItems="center"
    justifyContent="space-between"
  >
    <Flex>
      {/* <img src={null} alt="Aid Gurgaun" /> */}
      <Text>Aid Gurgaun</Text>
    </Flex>
    <Flex justifyContent="flex-end" gap={12}>
      <a href="#about">
        <Text>About Us</Text>
      </a>
      <a href="#volunteer">
        <Text>Volunteer</Text>
      </a>
      <a href="#donate">
        <Text>Donate</Text>
      </a>
    </Flex>
  </Flex>
);

export default Navbar;
