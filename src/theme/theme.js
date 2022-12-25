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
        fontSize: "lg",
        fontFamily: "Montserrat",
        textAlign: "left",
      },
      variants: {
        splash: {
          fontSize: "5xl",
          fontWeight: "bold",
          fontFamily: "karla",
          lineHeight: 1.25,
        },
        quote: {
          fontSize: "xl",
          fontWeight: "bold",
          fontFamily: "karla",
          textAlign: "right",
        },
        title: {
          textTransform: "uppercase",
          fontSize: "6xl",
          fontWeight: "bold",
          as: "h2",
          fontFamily: "karla",
          textAlign: "center",
          letterSpacing: ".2em",
        },
        header: {
          textTransform: "uppercase",
          fontSize: "5xl",
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
          fontSize: "2xl",
          lineHeight: "1.8",
        },
      },
    },
  },
});

export default theme;