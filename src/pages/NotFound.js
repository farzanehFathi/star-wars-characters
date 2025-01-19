import { Flex, Space, Typography } from "antd";

import UnderConstruction from "../components/UnderConstruction";

const NotFound = () => {
  return (
    <Flex justify="center" style={{ margin: "10% 0" }}>
      <Typography.Paragraph style={{ fontSize: 24 }}>
        SWAPI is Under Construction
      </Typography.Paragraph>
      <UnderConstruction />
    </Flex>
  );
};

export default NotFound;
