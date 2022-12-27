import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Challenge = ({ description, index }) => (
  <Flex
    border="3px solid yellow"
    borderColor="yellow"
    borderRadius="2xl"
    px={10}
    py={[12, 16]}
    className="challenge"
    key={index}
    display={index > 3 ? ["none", null, "flex"] : "flex"}
  >
    <Text
      textAlign="center"
      color="darkGreen"
      fontFamily="karla"
      fontWeight="bold"
      fontSize={["lg", "xl"]}
    >
      {description}
    </Text>
  </Flex>
);

export default Challenge;
