import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Section from "../components/section";
import Stat from "../components/stat";
import ForkKnife from "../assets/ForkKnife.png";

const Children = () => {
  const stats = [
    {
      icon: ForkKnife,
      number: "258,000",
      description: "Children in our strategic feeding program",
    },
    {
      icon: ForkKnife,
      number: "258,000",
      description: "Children in our strategic feeding program",
    },
    {
      icon: ForkKnife,
      number: "258,000",
      description: "Children in our strategic feeding program",
    },
  ];

  return (
    <Section bg="green" id="volunteer" mt={[16, 0]} pt={[8, 20, 12, 20, 12]}>
      <Text variant="title">Volunteer With us</Text>
      <Text
        variant="subtext"
        mt={[8, null, 6, null, 8]}
        mb={[16, 20, null, null, 24]}
        pt={2}
        px={[0, null, 4, 16]}
      >
        If you would like to volunteer, Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis
      </Text>
      <Flex
        direction={["column", null, "row"]}
        gap={[16, null, 6, 0]}
        mb={[8, 0]}
      >
        {stats.map(({ icon, number, description }) => (
          <Stat image={icon} number={number} description={description} />
        ))}
      </Flex>
    </Section>
  );
};

export default Children;
