import { Flex } from "antd";
import { Atom } from "react-loading-indicators";

// Styles
import ColorPalette from "../styles/ColorPalette";

const UnderConstruction = () => {
  return (
    <Flex justify="center" style={{ margin: "30px 0" }}>
      <Atom
        color={`${ColorPalette.textSecondary}`}
        size="medium"
        text=""
        textColor=""
      />
    </Flex>
  );
};

export default UnderConstruction;
