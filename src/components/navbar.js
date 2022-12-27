import React from "react";
import {
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const routes = [
    { route: "#about", name: "About Us" },
    { route: "#volunteer", name: "Volunteer" },
    { route: "#donate", name: "Donate" },
  ];

  return (
    <>
      <Flex h="10vh" position="absolute" w="100vw" justify="center">
        <Flex
          maxW="1840px"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
          zIndex={2}
          pl={[5, 8, 12, 12, 20, 24]}
          pr={["15%", 4, "15vw", 12, 24]}
          pt={[4, null, null, 0]}
        >
          <a href="/">
            <Flex h={8}>
              <img src={Logo} alt="Aid Gurgaun" height="100%" />
            </Flex>
          </a>
          <Flex display={["flex", null, "none"]}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={6} h={6} />
                )
              }
              variant="ghost"
              border="1px solid white"
              aria-label="Toggle Navigation"
            />
          </Flex>
          <Flex
            justifyContent="flex-end"
            gap={12}
            display={["none", null, "flex"]}
          >
            {routes.map(({ route, name }) => (
              <a href={route} className="nav-item">
                <Text>{name}</Text>
              </a>
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Flex position="absolute" top="10vh" right={["15%", 4]} zIndex={3} mt={2}>
        <Collapse in={isOpen} animateOpacity>
          <Flex
            direction="column"
            bg="white"
            py={5}
            pr={5}
            pl={16}
            color="darkGreen"
            borderRadius="lg"
            gap={[3, 2]}
          >
            {routes.map(({ route, name }) => (
              <a href={route} className="nav-item" onClick={onToggle}>
                <Text textAlign="right">{name}</Text>
              </a>
            ))}
          </Flex>
        </Collapse>
      </Flex>
    </>
  );
};

export default Navbar;
