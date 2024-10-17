import { Flex, Typography } from "antd";
import { Link } from "react-router-dom";

//Components
import NavButtons from "./NavButtons";

const HeaderContent = () => {
  return (
    <>
      <Flex justify="space-between" align="center">
        <Typography.Title level={1} style={{ margin: 0 }}>
          {" "}
          <Link to="/">Star Wars</Link>
        </Typography.Title>
        <NavButtons />
      </Flex>
    </>
  );
};

export default HeaderContent;
