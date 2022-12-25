import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const Footer = () => (
  <Flex w="100vw" py={24} alignItems="center">
    <Flex flex={1} pr={3} justifyContent="flex-end">
      <Box w="fit-content" border="1px solid pink">
        <Text>logo</Text>
        <Text mt={3}>© 2022 aidgurgaon. All rights reserved.</Text>
      </Box>
    </Flex>
    <Flex flex={1} direction="column" pl={3}>
      <Text>FOLLOW US</Text>
      <Flex mt={2}>
        <img src={null} alt="facebook" />
        <img src={null} alt="facebook" />
        <img src={null} alt="facebook" />
      </Flex>
    </Flex>
  </Flex>
);

export default Footer;
