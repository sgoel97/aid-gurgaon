import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    green: "#217851",
    darkGreen: "#023C22",
    yellow: "#EDB103",
    red: "#DB3131",
    darkRed: "#cd2323",
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: ["md", "lg"],
        fontFamily: "Montserrat",
        textAlign: "left",
      },
      variants: {
        splash: {
          fontSize: ["4xl", null, "5xl", "4xl", "5xl", "6xl"],
          fontWeight: "bold",
          fontFamily: "karla",
          lineHeight: 1.25,
        },
        quote: {
          fontSize: "xl",
          fontWeight: "bold",
          fontFamily: "karla",
          textAlign: ["left", null, null, "right"],
        },
        title: {
          textTransform: "uppercase",
          fontSize: ["4xl", "5xl", "6xl", null, null, "7xl"],
          fontWeight: "bold",
          as: "h2",
          fontFamily: "karla",
          textAlign: "center",
          letterSpacing: ".2em",
        },
        header: {
          textTransform: "uppercase",
          fontSize: ["4xl", "5xl", null, null, , null, "6xl"],
          fontWeight: "bold",
          as: "h3",
          fontFamily: "karla",
        },
        subtitle: {
          textTransform: "capitalize",
          fontSize: "4xl",
          as: "h3",
          fontFamily: "karla",
          textAlign: "center",
        },
        subtext: {
          textAlign: "center",
          fontSize: ["xl", "2xl"],
          lineHeight: "1.8",
        },
      },
    },
  },
});

export default theme;
