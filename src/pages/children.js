import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import Section from "../components/section";
import Challenge from "../components/challenge";

const Children = () => {
  const challenges = [
    "1 child in 13 dies before their 5th birthday, 11 times the U.S rate",
    "test",
    "test",
    "test",
    "test",
    "test",
  ];

  return (
    <>
      <Section bg="yellow" py={[10, 12, 16, 16, 20]}>
        <Text variant="title">
          <Text variant="title" fontWeight="normal" as="span">
            Challenges
          </Text>{" "}
          for Children{" "}
        </Text>
      </Section>

      <Section bg="green">
        <SimpleGrid
          columns={[1, null, 2, 3]}
          spacingX={[0, 0, 10, 16, 24]}
          spacingY={[10, null, null, 12, 16]}
          px={[6, null, 4, 0]}
        >
          {challenges.map((challenge, i) => (
            <Challenge description={challenge} index={i} key={i} />
          ))}
        </SimpleGrid>
      </Section>
    </>
  );
};

export default Children;
