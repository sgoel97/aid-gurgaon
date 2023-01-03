import React from "react";
import { Text } from "@chakra-ui/react";
import Section from "../components/section";

const Mission = () => (
  <Section bg="yellow" pt={[8, 12, 16, 20]}>
    <Text variant="title">Our Mission</Text>
    <Text variant="subtitle" mt={4}>
      Where there is a <strong>will</strong>, there is a <strong>way</strong>
    </Text>
    <Text textAlign="center" mt={10} px={[4, 6, 12, 20, 44]}>
      AID Gurgaon aims to mainstream as many children as it can. The
      organisation believes that one educated generation is enough to pull a
      family out of poverty. Its vision is that for development to be
      sustainable it should operate on many levels, one of them being education.
    </Text>
  </Section>
);

export default Mission;
