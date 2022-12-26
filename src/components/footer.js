import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import Facebook from "../assets/facebook.png";

const Footer = () => (
  <Flex
    w="100vw"
    py={[16, null, 24]}
    alignItems="center"
    direction={["column", null, "row"]}
  >
    <Flex flex={1} pr={[0, null, 10]} justifyContent="flex-end">
      <Box w="fit-content">
        <Flex h={10} justify={["center", null, "flex-start"]}>
          <img src={Logo} alt="" height="100%" />
        </Flex>
        <Text mt={[6, 7, 5]}>© 2022 aidgurgaon. All rights reserved.</Text>
      </Box>
    </Flex>
    <Flex
      flex={1}
      pl={[0, null, 10]}
      mt={[8, null, 0]}
      align="center"
      direction={["column", "row"]}
    >
      <Text fontSize="xl" mb={[5, 0]}>
        FOLLOW US
      </Text>
      <Flex ml={[0, 8]}>
        <a href="https://www.facebook.com/aidgurgaon/">
          <Flex h={10}>
            <img src={Facebook} alt="Facebook" />
          </Flex>
        </a>
      </Flex>
    </Flex>
  </Flex>
);

export default Footer;
