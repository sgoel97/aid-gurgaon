import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Section from "../components/section";
import Button from "../components/button";
import PeopleImage from "../assets/people.png";

const People = () => (
  <Section bg="white">
    <Flex
      direction={["column", null, null, "row"]}
      gap={[8, 10, null, 0]}
      align="center"
    >
      <Flex flex={4} direction="column">
        <Text variant="header" mb={8}>
          - The Students -
        </Text>
        <Text mb={12}>
          AID Gurgaon was founded in 2007 by volunteers, at a time during which
          massive constructions were undergoing in the city. Volunteers saw the
          kids of migrant workers in Every corner of the town and felt like
          something should be done to prevent this abject poverty.
        </Text>
        <Text mb={[12, 16]}>
          AID Gurgaon was founded in 2007 by volunteers, at a time during which
          massive constructions were undergoing in the city. Volunteers saw the
          kids of migrant workers in Every corner of the town and felt like
          something should be done to prevent this abject poverty.
        </Text>
        <Text variant="header" mb={8}>
          - The Volunteers -
        </Text>
        <Text mb={12}>
          AID Gurgaon was founded in 2007 by volunteers, at a time during which
          massive constructions were undergoing in the city. Volunteers saw the
          kids of migrant workers in Every corner of the town and felt like
          something should be done to prevent this abject poverty.
        </Text>
        <Text mb={[12, 16]}>
          AID Gurgaon was founded in 2007 by volunteers, at a time during which
          massive constructions were undergoing in the city. Volunteers saw the
          kids of migrant workers in Every corner of the town and felt like
          something should be done to prevent this abject poverty.
        </Text>
        <Flex mb={[14, 16]}>
          <Button to="#volunteer">Volunteer Now</Button>
        </Flex>
        <Text variant="header" mb={8}>
          - The Teachers -
        </Text>
        <Text mb={12}>
          AID Gurgaon was founded in 2007 by volunteers, at a time during which
          massive constructions were undergoing in the city. Volunteers saw the
          kids of migrant workers in Every corner of the town and felt like
          something should be done to prevent this abject poverty.
        </Text>
        <Text>
          AID Gurgaon was founded in 2007 by volunteers, at a time during which
          massive constructions were undergoing in the city. Volunteers saw the
          kids of migrant workers in Every corner of the town and felt like
          something should be done to prevent this abject poverty.
        </Text>
      </Flex>
      <Flex flex={1} />
      <Flex flex={3}>
        <Box px={[16, 20, 48, 0]}>
          <img src={PeopleImage} alt="" />
        </Box>
      </Flex>
    </Flex>
  </Section>
);

export default People;
