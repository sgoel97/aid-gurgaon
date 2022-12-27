import React from "react";
import { Flex, Box } from "@chakra-ui/react";

const Section = ({ children, bg, id = "", ...props }) => {
  let textColor = "white";

  if (bg === "white") {
    textColor = "darkGreen";
  }

  return (
    <Flex
      as="section"
      backgroundColor={bg}
      w="100vw"
      justify="center"
      px={[5, 6, 12, 12, 20, 24]}
      py={[8, 12, 20, 20, 28]}
      color={textColor}
      id={id}
      {...props}
    >
      <Box maxW="1440px">{children}</Box>
    </Flex>
  );
};

export default Section;
