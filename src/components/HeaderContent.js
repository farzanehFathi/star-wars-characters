import { Flex, Typography } from "antd";

//Components
import NavButtons from "./NavButtons";

const HeaderContent = () => {
  return (
    <>
      <Flex justify="space-between" align="center">
        <Typography.Title level={1} style={{ margin: 0 }}>
          {" "}
          Star Wars
        </Typography.Title>
        <NavButtons />
      </Flex>
    </>
  );
};

export default HeaderContent;
