import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Stat = ({ image, number, description }) => (
  <Flex flex={1} align="center" direction="column" px={10} mx={2}>
    <Flex justify="center" w={[28, 36, 40]}>
      <img src={image} alt="" height="100%" />
    </Flex>
    <Text mt={2} fontSize={["4xl", "5xl", "6xl"]} fontFamily="karla">
      {number}
    </Text>
    <Text textAlign="center" mt={6} fontSize={["lg", "xl"]}>
      {description}
    </Text>
  </Flex>
);

export default Stat;
