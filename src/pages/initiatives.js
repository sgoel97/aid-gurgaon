import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Section from "../components/section";
import Doorstep from "../assets/doorstep.png";

const Initiatives = () => (
  <Section bg="white" pt={[8, 0, 0, 0, 0, 0]}>
    <Flex
      direction={["column-reverse", null, null, "row"]}
      gap={[12, 16, null, 0]}
      align="center"
    >
      <Flex flex={1} px={[16, 20, 48, 0]} align="center">
        <img src={Doorstep} alt="" style={{ objectFit: "cover" }} />
      </Flex>
      <Flex flex={2} direction="column">
        <Text variant="header" textAlign={["left", null, null, "right"]} mb={5}>
          - Education at the doorstep -
        </Text>
        <Text variant="quote">
          {"<< AID has progressed from bamboo sheds to bricks >>"}
        </Text>
        <Text variant="quote" fontWeight="normal" mt={[3, 2, 1]}>
          Renu Aggarwal
        </Text>
        <Box pl={[0, null, null, 20, 36]}>
          <Text mt={12} mb={12}>
            AID Gurgaon was founded in 2007 by volunteers, at a time during
            which massive constructions were undergoing in the city. Volunteers
            saw the kids of migrant workers in Every corner of the town and felt
            like something should be done to prevent this abject poverty.
          </Text>
          <Text>
            AID Gurgaon was founded in 2007 by volunteers, at a time during
            which massive constructions were undergoing in the city. Volunteers
            saw the kids of migrant workers in Every corner of the town and felt
            like something should be done to prevent this abject poverty.
          </Text>
        </Box>
      </Flex>
    </Flex>
  </Section>
);

export default Initiatives;
