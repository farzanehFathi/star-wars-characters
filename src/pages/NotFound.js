import { Flex, Typography } from "antd";

import UnderConstruction from "../components/UnderConstruction";

const NotFound = () => {
  return (
    <>
      <Flex justify="center">
        <Typography.Paragraph style={{ fontSize: 24 }} type="warning">
          SWAPI is Under Construction
        </Typography.Paragraph>
      </Flex>
      <UnderConstruction />
    </>
  );
};

export default NotFound;
