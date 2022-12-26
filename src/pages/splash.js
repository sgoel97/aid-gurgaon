import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Button from "../components/button";
import SplashImage from "../assets/splash.png";

const Splash = () => (
  <Flex h="100vh">
    <Flex flex={4} direction="column" justifyContent="center">
      <Box px={[4, 6, 12, 16, 24]}>
        <Text variant="splash" pt={[12, 16, 24]}>
          Volunteers do not necessarily have the time; they just have the
          heart...
        </Text>
        <Text
          textAlign="right"
          fontFamily="karla"
          fontSize="xl"
          pt={4}
          pr={[4, 8, 12, 20]}
        >
          - Mahatma Ghandi
        </Text>
        <Text pt={12} pr={[0, null, 36]} mb={16}>
          Change will not come if we wait for some other person, or if we wait
          for some other time. We are the ones we’ve been waiting for. We are
          the change that we seek.
        </Text>
        <Button to="#donate">Donate Now</Button>
      </Box>
    </Flex>
    <Flex
      flex={3}
      justifyContent="flex-start"
      alignItems="flex-end"
      display={["none", null, "flex"]}
    >
      <Flex h="100%" w="100%" bg="yellow" alignItems="flex-end" pt="10vh">
        <Flex w="100%" h="90%">
          <img src={SplashImage} alt="" height="100%" />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

export default Splash;
