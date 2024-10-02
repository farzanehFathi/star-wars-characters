import { Flex } from "antd";

//Components
import Navbar from "./Navbar";

const HeaderContent = () => {
  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        style={{ width: "90%", margin: "0 auto" }}
      >
        <h1
          style={{
            margin: 0,
            marginLeft: 20,
          }}
        >
          Star Wars
        </h1>
        <Navbar />
      </Flex>
    </>
  );
};

export default HeaderContent;
