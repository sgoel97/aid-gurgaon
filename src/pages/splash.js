import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Button from "../components/button";
import SplashImage from "../assets/splash.png";

const Splash = () => (
  <Flex h="100vh" maxW="1840px" mx="auto">
    <Box
      bg="yellow"
      position="absolute"
      h="100vh"
      w={["12%", null, null, null, "25%"]}
      top={0}
      right={0}
      zIndex={1}
      display={["block", null, null, "none", null, "block"]}
    />
    <Flex flex={4} direction="column" justifyContent="center">
      <Box px={[4, 6, 12, 12, 20, 24]} mr={["10%", null, null, 0]}>
        <Text variant="splash" pt={[12, 16, null, 24]}>
          Volunteers do not necessarily have the time; they just have the
          heart...
        </Text>
        <Text
          textAlign="right"
          fontFamily="karla"
          fontSize="xl"
          pt={4}
          pr={[4, 8, 12, null, 20]}
        >
          - Mahatma Ghandi
        </Text>
        <Text
          pt={12}
          pr={[0, null, null, 12, 36]}
          mb={[16, null, null, 12, 16]}
        >
          Change will not come if we wait for some other person, or if we wait
          for some other time. We are the ones we've been waiting for. We are
          the change that we seek.
        </Text>
        <Button to="#donate">Donate Now</Button>
      </Box>
    </Flex>
    <Flex
      flex={3}
      justifyContent="flex-start"
      alignItems="flex-end"
      display={["none", null, null, "flex"]}
    >
      <Flex h="100%" w="100%" bg="yellow" alignItems="flex-end" pt="10vh">
        <Flex maxW="100%" h="90%">
          <img
            src={SplashImage}
            alt=""
            height="auto"
            width="auto"
            style={{ objectFit: "cover", minHeight: "50%", zIndex: 2 }}
          />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

export default Splash;
