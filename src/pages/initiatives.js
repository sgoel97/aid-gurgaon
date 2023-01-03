import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Section from "../components/section";
import Doorstep from "../assets/doorstep.png";
import Holi from "../assets/holi.png";

const Initiatives = () => (
  <Section bg="white" pt={[8, 0, 0, 0, 0, 0]}>
    <Flex
      direction={["column-reverse", null, null, "row"]}
      gap={[12, 16, null, 0]}
      align="center"
      mb={[16, null, 20, null, 32]}
    >
      <Flex flex={1} px={[16, 20, 48, 0]} align="center">
        <img src={Doorstep} alt="" style={{ objectFit: "cover" }} />
      </Flex>
      <Flex flex={2} direction="column">
        <Text variant="header" textAlign={["left", null, null, "right"]} mb={5}>
          - Education at the doorstep -
        </Text>
        <Text variant="quote">
          {"<< I want my children to study and become successful >>"}
        </Text>
        <Text variant="quote" fontWeight="normal" mt={[3, 2, 1]}>
          Sheila
        </Text>
        <Box pl={[0, null, null, 20, 36]}>
          <Text mt={12} mb={12}>
            Among the chaos of morning calls, small shifting figures and the
            noise of chalk shrieking on the blackboard, you will happen to see a
            small figure leaning against a doorstep. Sheila is the caretaker of
            the park where the centre is brought to life every morning. She sees
            the children, the teacher and her two little girls engaged in trying
            to mould minds.
          </Text>
          <Text>
            She stands in between the two classes of education and observes the
            children engaging in an opportunity she never had. Their mother
            looks over them and the small doorstep to their bright future.
          </Text>
        </Box>
      </Flex>
    </Flex>

    <Flex
      direction={["column-reverse", null, null, "row"]}
      gap={[12, 16, null, 0]}
      align="center"
    >
      <Flex flex={1} px={[4, 8, 28, 0]} align="center">
        <img src={Holi} alt="" style={{ objectFit: "cover" }} />
      </Flex>
      <Flex flex={2} direction="column">
        <Text variant="header" textAlign={["left", null, null, "right"]} mb={5}>
          - RAINBOWS OF LIGHT -
        </Text>
        <Text variant="quote">
          {"<< Add some colour to your life and others too >>"}
        </Text>
        <Text variant="quote" fontWeight="normal" mt={[3, 2, 1]}>
          Priya Sharma
        </Text>
        <Box pl={[0, null, null, 16, 24]}>
          <Text mt={12} mb={12}>
            When one visits India during holi, they are likely to see a vibrant
            tapestry of colors and streets full of crowds singing and
            celebrating. At Pragati, holi is a marker of excited happy young
            faces painted with various colours. Festivals in India mark a time
            of togetherness and the joy is in the solidarity. This is what fills
            the room. An atmosphere so joyous that it is contagious.
          </Text>
          <Text>
            As exclamations make their way outside the centre, children run here
            and there with colour in their hands and smiles on their faces. At
            the end of the day, it is about splattering the simple painted walls
            with colours of the rainbow and filling them with a life of their
            own ; a light of their own. After all, with their broad smiles and
            twinkling eyes these children are our rainbows of light.
          </Text>
        </Box>
      </Flex>
    </Flex>
  </Section>
);

export default Initiatives;
