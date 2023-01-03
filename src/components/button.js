import React from "react";
import { Button as ChakraButton, Text } from "@chakra-ui/react";

const Button = ({ children, to, ...props }) => (
  <a href={to}>
    <ChakraButton
      bg="red"
      px={12}
      py={8}
      borderRadius="none"
      _hover={{ bg: "darkRed" }}
      _active={{ bg: "darkRed" }}
      {...props}
    >
      <Text fontWeight="normal" color="white">
        {children}
      </Text>
    </ChakraButton>
  </a>
);

export default Button;
