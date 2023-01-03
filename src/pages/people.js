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
          The centres welcome children between 4 and 12 years old, coming from
          various backgrounds. Thanks to donations, AID Gurgaon provides
          uniforms, school bags, textbooks and pen. In accordance with AID's
          vision of development as a multi-stranded notion, the centers offer
          food, clothes, and hygeine kits to every student.
        </Text>
        <Text mb={[12, 16]}>
          Sushila, teaching at the Shiksharth Centre, told us : “For me, every
          kid in this school is equal.”. As soon as they are inside the Centre,
          students can concentrate on their studies and are very passionate
          about their work. Although they may have different career plans - some
          want to be teachers, others doctors and even soldiers - they are all
          very eager to find a professional path.
        </Text>
        <Text variant="header" mb={8}>
          - The Volunteers -
        </Text>
        <Text mb={12}>
          The centres are run by both teachers and volunteers working together
          to provide education in a studious and friendly atmosphere.
        </Text>
        <Text mb={[12, 16]}>
          Sushila, working in the Shiksharth Center, says that “I will get
          innumerable happiness if I see that a kid I have taught here has
          accomplished something in life, has studied hard, and grown up to be
          someone. Even before I started teaching here, I used to think that
          kids- albeit not my own kids- should work hard and become someone in
          their lives. Now that I have been teaching here, I realise that they
          are not the only ones learning. I am learning something from them too.
          We learn from each other, every day.”
        </Text>
        <Flex mb={[14, 16]}>
          <Button to="#volunteer">Volunteer Now</Button>
        </Flex>
        <Text variant="header" mb={8}>
          - The Teachers -
        </Text>
        <Text mb={12}>
          Alongside the teachers are the dedicated volunteers, who join in the
          process whenever they can. One of them is Shubhangi, who heard about
          AID Gurgaon from her sister, and has been an active member of this
          community for more than six years.
        </Text>
        <Text>
          Her experience as a volunteer makes her feel like she is doing
          something significant everyday, and is now « part of (her) life », as
          she recognises that she cannot live a single day without thinking
          about the school. Shubhangi believes that, volunteering there, she has
          become « more patient, more tolerant » about everything that happens
          in her life.
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
