import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Section from "../components/section";
import AboutImage from "../assets/change.png";

const About = () => (
  <Section bg="white" id="about">
    <Text variant="title" mb={[4, 6, 12, 16, 20]}>
      Humans of change
    </Text>
    <Flex mt={8} direction={["column", null, null, "row"]} align="center">
      <Flex flex={1}>
        <Box pr={[0, null, 20, 8, 16]} pl={[0, null, 20, 0]}>
          <img src={AboutImage} alt="" />
        </Box>
      </Flex>
      <Flex flex={1} alignItems="center">
        <Box pl={[0, null, null, 8, 12]}>
          <Text variant="quote" mt={[4, 8, 12, 0]}>
            {"<< AID has progressed from bamboo sheds to bricks >>"}
          </Text>
          <Text variant="quote" fontWeight="normal" mt={[3, 2, 1]}>
            Renu Aggarwal
          </Text>
          <Text mt={[6, 8, 10, 12]}>
            AID Gurgaon was founded in 2007 by volunteers, at a time during
            which massive constructions were undergoing in the city. Volunteers
            saw the kids of migrant workers in Every corner of the town and felt
            like something should be done to prevent this abject poverty.
            <br />
            <br />
            As of today, there are six centres opened in Gurgaon welcoming about
            400 children, all of them being located in different slum areas.
            Volunteers from AID have worked to open all these AID centres - they
            visited the communities, identified the slum areas, and convinced
            the people living in the slums to educate their children.
          </Text>
        </Box>
      </Flex>
    </Flex>
  </Section>
);

export default About;
