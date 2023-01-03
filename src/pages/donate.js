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
        AID Gurgaon(NCR) is NCR chapter of AID India <br />
        Donation can be done on:
        <br />
        Account number: 683011010656
      </Text>
    </Section>
  </>
);

export default Donate;
