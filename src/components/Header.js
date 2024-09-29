import { Flex } from "antd";

//Js Files
import ColorPalette from "../styles/ColorPalette";

//Components
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      style={{
        background: `${ColorPalette.backgroundSecondary}`,
        height: 75,
        margin: 0,
        alignContent: "center",
      }}
    >
      <Flex justify="space-between" align="center">
        <h1
          style={{
            margin: 0,
            marginLeft: 20,
            color: `${ColorPalette.textSecondary}`,
          }}
        >
          Star Wars
        </h1>
        <Navbar />
      </Flex>
    </header>
  );
};

export default Header;
