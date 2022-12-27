import React from "react";
import { Text } from "@chakra-ui/react";
import Section from "../components/section";

const Donate = () => (
  <>
    <Section bg="yellow" py={[10, 12, 16]} id="donate">
      <Text variant="title">Donate Today</Text>
    </Section>

    <Section bg="green" py={[12, 16]}>
      <Text variant="subtext" px={[0, null, 4, 12, 16]}>
        If you would like to donate, Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis
      </Text>
    </Section>
  </>
);

export default Donate;
