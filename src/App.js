import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Layout from "./components/layout";
import Section from "./components/section";
import Stat from "./components/stat";
import Button from "./components/button";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Splash from "./assets/splash.png";
import Change from "./assets/change.png";
import ForkKnife from "./assets/ForkKnife.png";
import WhoWeAre from "./assets/whoweare.png";
import Doorstep from "./assets/doorstep.png";

import "./css/App.css";

function App() {
  return (
    <Layout>
      <Navbar />

      {/* Splash Page */}
      <Flex h="100vh">
        <Flex flex={4} direction="column" justifyContent="center">
          <Box px={20}>
            <Text variant="splash" pt={24}>
              Volunteers do not necessarily have the time; they just have the
              heart...
            </Text>
            <Text
              textAlign="right"
              fontFamily="karla"
              fontSize="xl"
              pt={4}
              pr={20}
            >
              - Mahatma Ghandi
            </Text>
            <Text pt={12} pr={36} mb={16}>
              Change will not come if we wait for some other person, or if we
              wait for some other time. We are the ones we’ve been waiting for.
              We are the change that we seek.
            </Text>
            <Button to="#donate">Donate Now</Button>
          </Box>
        </Flex>
        <Flex flex={3} justifyContent="flex-start" alignItems="flex-end">
          <Flex h="100%" w="100%" bg="yellow" alignItems="flex-end" pt="10vh">
            <Flex w="100%" h="90%">
              <img src={Splash} alt="" height="100%" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* About Us */}
      <Section bg="white" id="about">
        <Text variant="title" mb={20}>
          Humans of change
        </Text>
        <Flex mt={8}>
          <Flex flex={1}>
            <Box pr={16}>
              <img src={Change} alt="" />
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
      <Section bg="yellow" pt={20}>
        <Text variant="title">Our Mission</Text>
        <Text variant="subtitle" mt={4}>
          Our{" "}
          <Text as="span" variant="subtitle" fontWeight="bold">
            Mission statement
          </Text>
        </Text>
        <Text textAlign="center" mt={10} px={44}>
          AID Gurgaon aims to mainstream as many children as it can. The
          organisation believes that one educated generation is enough to pull a
          family out of poverty. Its vision is that for development to be
          sustainable it should operate on many levels, one of them being
          education.
        </Text>
      </Section>

      {/* Who We Are */}
      <Section bg="white">
        <Flex>
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
            <Text mb={16}>
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
            <Text mb={12}>
              AID Gurgaon was founded in 2007 by volunteers, at a time during
              which massive constructions were undergoing in the city.
              Volunteers saw the kids of migrant workers in Every corner of the
              town and felt like something should be done to prevent this abject
              poverty.
            </Text>
            <Flex mb={16}>
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
            <Box>
              <img src={WhoWeAre} />
            </Box>
          </Flex>
        </Flex>
      </Section>

      <Section bg="white" pt={0}>
        <Flex>
          <Flex flex={1}>
            <img src={Doorstep} alt="" />
          </Flex>
          <Flex flex={2} direction="column">
            <Text variant="header" textAlign="right" mb={5}>
              - Education at the doorstep -
            </Text>
            <Text variant="quote">
              {"<< AID has progressed from bamboo sheds to bricks >>"}
            </Text>
            <Text variant="quote" fontWeight="normal">
              Renu Aggarwal
            </Text>
            <Box pl={36}>
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
      <Section bg="yellow" py={20}>
        <Text variant="title">
          <Text variant="title" fontWeight="normal" as="span">
            Challenges
          </Text>{" "}
          for Children{" "}
        </Text>
      </Section>

      {/* Challenges for Children Description */}
      {/* <Section bg="green">
        <Text variant="title">
          <Text variant="title" fontWeight="normal" as="span">
            Challenges
          </Text>{" "}
          for Children{" "}
        </Text>
      </Section> */}

      {/* Volunteer With Us */}
      <Section bg="green" id="volunteer">
        <Text variant="title">Volunteer With us</Text>
        <Text variant="subtext" mt={10} mb={16} py={2} px={16}>
          If you would like to volunteer, Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        </Text>
        <Flex>
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

      <Section bg="yellow" py={16} id="donate">
        <Text variant="title">Donate Today</Text>
      </Section>

      <Section bg="green" py={16}>
        <Text variant="subtext" px={16}>
          If you would like to donate, Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis
        </Text>
      </Section>

      <Section bg="green" pt={16} pb={20}>
        <Text variant="title">Our Latest Updates</Text>
      </Section>

      <Section bg="yellow" pt={12}>
        <Text variant="title">Our Latest Updates</Text>
      </Section>

      <Footer />
    </Layout>
  );
}

export default App;
