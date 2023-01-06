import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Section from "../components/section";
import Stat from "../components/stat";
import Button from "../components/button";
import { FaChalkboardTeacher, FaSchool } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

const Children = () => {
  const iconStyle = { width: "100%", height: "100%" };
  const stats = [
    {
      icon: <FaSchool style={iconStyle} />,
      number: "6",
      description: "Centers in Gurgaon",
    },
    {
      icon: <GiBookshelf style={iconStyle} />,
      number: "400",
      description: "Children enrolled in out program",
    },
    {
      icon: <FaChalkboardTeacher style={iconStyle} />,
      number: "8",
      description: "Teachers working with Aid Gurgaon",
    },
  ];

  return (
    <Section bg="green" id="volunteer" mt={[16, 8]} pt={[8, 20, 12, 20, 12]}>
      <Text variant="title">Volunteer With us</Text>
      <Text
        variant="subtext"
        mt={[8, null, 6, null, 8]}
        mb={[16, 20, null, null, 24]}
        pt={2}
        px={[0, null, 4, 16]}
      >
        Share and Spread Happiness ..... Join our volunteers team !
        <br />
        If you would like to volunteer with Aid Gurgaon, please fill out the
        form below.
        <br />
        <br />
        <Button to="https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSfxpgCFBNg_pw7nxPpQ0rDZrbTjvRXClW4MQ36mozy-X1Ia3Q%2Fviewform%3Fusp%3Dpp_url%26entry.1145133022%26entry.524957231%26entry.1436590050%26entry.960885092%26fbclid%3DIwAR3im5yigHqMOkyR-FOZ3v-JDeWrvZoAtymBLjCgtI2v3BlaKQnsU9FVQUY&h=AT3mtlDhY1z48kBuhGP8H6nk7Qu1XAqOx_VcrlWIB70opTDUo8Ee228OpETMcIJU8w21GJR_5HZCnMYFg434a4Jxz8L3LKOtvjmbSSHRiGI8Mxt3xIZ3K8y8Q3ctBiCThU7DUYSHQU8DYNt0I-FDCa8RQA&__tn__=H-R&c[0]=AT3SopYylqRJlR6DMaeKFJajA9VGJL336P-S95pjMxBVyTvOhWua2MqE0O9oe7idaRWbs3KCXE7FeStKchZLp7b3pbHeyLJcH8Rrt9kqR01oPusLHilH6hQOBfs9JIbq1VZo1JEPtfqcofvy8ihUSrplWWXmfw">
          Volunteer Form
        </Button>
      </Text>

      <Flex
        direction={["column", null, "row"]}
        gap={[16, null, 6, 0]}
        mb={[8, 0]}
      >
        {stats.map(({ icon, number, description }) => (
          <Stat icon={icon} number={number} description={description} />
        ))}
      </Flex>
    </Section>
  );
};

export default Children;
