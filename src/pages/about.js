import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Section from "../components/section";
import AboutImage from "../assets/change.png";

const About = () => (
  <Section bg="white" id="about">
    <Text variant="title" mb={20}>
      Humans of change
    </Text>
    <Flex mt={8}>
      <Flex flex={1}>
        <Box pr={16}>
          <img src={AboutImage} alt="" />
        </Box>
      </Flex>
      <Flex flex={1} alignItems="center">
        <Box pl={12}>
          <Text variant="quote">
            {"<< AID has progressed from bamboo sheds to bricks >>"}
          </Text>
          <Text variant="quote" fontWeight="normal">
            Renu Aggarwal
          </Text>
          <Text mt={12}>
            AID Gurgaon was founded in 2007 by volunteers, at a time during
            which massive constructions were undergoing in the city. Volunteers
            saw the kids of migrant workers in Every corner of the town and
            felt like something should be done to prevent this abject poverty.
          </Text>
        </Box>
      </Flex>
    </Flex>
  </Section>
);

export default About;
