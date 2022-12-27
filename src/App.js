import React from "react";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import Splash from "./pages/splash";
// import About from "./pages/about";

import Layout from "./components/layout";
import Section from "./components/section";
import Stat from "./components/stat";
import Challenge from "./components/challenge";
import Button from "./components/button";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Change from "./assets/change.png";
import ForkKnife from "./assets/ForkKnife.png";
import WhoWeAre from "./assets/whoweare.png";
import Doorstep from "./assets/doorstep.png";

import "./css/app.css";

function App() {
  const challenges = [
    "1 child in 13 dies before their 5th birthday, 11 times the U.S rate",
    "test",
    "test",
    "test",
    "test",
    "test",
  ];

  return (
    <Layout>
      <Navbar />

      <Splash />

      {/* About Us */}
      <Section bg="white" id="about">
        <Text variant="title" mb={[4, 6, 12, 16, 20]}>
          Humans of change
        </Text>
        <Flex mt={8} direction={["column", null, null, "row"]} align="center">
          <Flex flex={1}>
            <Box pr={[0, null, 20, 8, 16]} pl={[0, null, 20, 0]}>
              <img src={Change} alt="" />
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
                which massive constructions were undergoing in the city.
                Volunteers saw the kids of migrant workers in Every corner of
                the town and felt like something should be done to prevent this
                abject poverty.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Section>

      {/* Our Mission */}
      <Section bg="yellow" pt={[8, 12, 16, 20]}>
        <Text variant="title">Our Mission</Text>
        <Text variant="subtitle" mt={4}>
          Our{" "}
          <Text as="span" variant="subtitle" fontWeight="bold">
            Mission statement
          </Text>
        </Text>
        <Text textAlign="center" mt={10} px={[4, 6, 12, 20, 44]}>
          AID Gurgaon aims to mainstream as many children as it can. The
          organisation believes that one educated generation is enough to pull a
          family out of poverty. Its vision is that for development to be
          sustainable it should operate on many levels, one of them being
          education.
        </Text>
      </Section>

      {/* Who We Are */}
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
              AID Gurgaon was founded in 2007 by volunteers, at a time during
              which massive constructions were undergoing in the city.
              Volunteers saw the kids of migrant workers in Every corner of the
              town and felt like something should be done to prevent this abject
              poverty.
            </Text>
            <Text mb={[12, 16]}>
              AID Gurgaon was founded in 2007 by volunteers, at a time during
              which massive constructions were undergoing in the city.
              Volunteers saw the kids of migrant workers in Every corner of the
              town and felt like something should be done to prevent this abject
              poverty.
            </Text>
            <Text variant="header" mb={8}>
              - The Volunteers -
            </Text>
            <Text mb={12}>
              AID Gurgaon was founded in 2007 by volunteers, at a time during
              which massive constructions were undergoing in the city.
              Volunteers saw the kids of migrant workers in Every corner of the
              town and felt like something should be done to prevent this abject
              poverty.
            </Text>
            <Text mb={[12, 16]}>
              AID Gurgaon was founded in 2007 by volunteers, at a time during
              which massive constructions were undergoing in the city.
              Volunteers saw the kids of migrant workers in Every corner of the
              town and felt like something should be done to prevent this abject
              poverty.
            </Text>
            <Flex mb={[14, 16]}>
              <Button to="#volunteer">Volunteer Now</Button>
            </Flex>
            <Text variant="header" mb={8}>
              - The Teachers -
            </Text>
            <Text mb={12}>
              AID Gurgaon was founded in 2007 by volunteers, at a time during
              which massive constructions were undergoing in the city.
              Volunteers saw the kids of migrant workers in Every corner of the
              town and felt like something should be done to prevent this abject
              poverty.
            </Text>
            <Text>
              AID Gurgaon was founded in 2007 by volunteers, at a time during
              which massive constructions were undergoing in the city.
              Volunteers saw the kids of migrant workers in Every corner of the
              town and felt like something should be done to prevent this abject
              poverty.
            </Text>
          </Flex>
          <Flex flex={1} />
          <Flex flex={3}>
            <Box px={[16, 20, 48, 0]}>
              <img src={WhoWeAre} />
            </Box>
          </Flex>
        </Flex>
      </Section>

      <Section bg="white" pt={[8, 0, 0, 0, 0, 0]}>
        <Flex
          direction={["column-reverse", null, null, "row"]}
          gap={[12, 10, 16, 0]}
          align="center"
        >
          <Flex flex={1} px={[16, 20, 48, 0]} align="center">
            <img src={Doorstep} alt="" style={{ objectFit: "cover" }} />
          </Flex>
          <Flex flex={2} direction="column">
            <Text
              variant="header"
              textAlign={["left", null, null, "right"]}
              mb={5}
            >
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
                which massive constructions were undergoing in the city.
                Volunteers saw the kids of migrant workers in Every corner of
                the town and felt like something should be done to prevent this
                abject poverty.
              </Text>
              <Text>
                AID Gurgaon was founded in 2007 by volunteers, at a time during
                which massive constructions were undergoing in the city.
                Volunteers saw the kids of migrant workers in Every corner of
                the town and felt like something should be done to prevent this
                abject poverty.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Section>

      {/* Challenges for Children */}
      <Section bg="yellow" py={[10, 12, 16, 16, 20]}>
        <Text variant="title">
          <Text variant="title" fontWeight="normal" as="span">
            Challenges
          </Text>{" "}
          for Children{" "}
        </Text>
      </Section>

      {/* Challenges for Children Description */}
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

      {/* Volunteer With Us */}
      <Section bg="green" id="volunteer" pt={[24, null, 12, 20, 12]}>
        <Text variant="title">Volunteer With us</Text>
        <Text
          variant="subtext"
          mt={[8, null, 6, null, 8]}
          mb={[16, 20, null, null, 24]}
          pt={2}
          px={[0, null, 4, 16]}
        >
          If you would like to volunteer, Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        </Text>
        <Flex
          direction={["column", null, "row"]}
          gap={[16, null, 6, 0]}
          mb={[8, 0]}
        >
          <Stat
            image={ForkKnife}
            number="258,000"
            description="Children in our strategic feeding program"
          />
          <Stat
            image={ForkKnife}
            number="258,000"
            description="Children in our strategic feeding program"
          />
          <Stat
            image={ForkKnife}
            number="258,000"
            description="Children in our strategic feeding program"
          />
        </Flex>
      </Section>

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

      <Footer />
    </Layout>
  );
}

export default App;
