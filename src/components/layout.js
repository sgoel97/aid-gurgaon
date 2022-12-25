import React from "react";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => (
  <Box
    as="main"
    backgroundColor="green"
    minH="100vh"
    h="fit-content"
    w="100vw"
    position="relative"
    color="white"
  >
    {children}
  </Box>
);

export default Layout;
