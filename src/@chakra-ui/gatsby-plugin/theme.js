import { extendTheme } from "@chakra-ui/react"

const theme = {
  colors: {
      primary:{
        100: "#f8ecf2",
        200: "#eccbdb",
        300: "#dfaac3",
        500: "#BF5387",
      } ,
      blackPrimary: "#1F2937",
      grayPrimary: "#F3F4F6",
      blueGrayPrimary: "#6B7280",
  },
};

export default extendTheme(theme);
