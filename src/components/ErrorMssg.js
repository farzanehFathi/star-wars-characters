import { Flex, Space, Typography } from "antd";

const ErrorMssg = ({ mssg }) => {
  return (
    <Flex justify="center" style={{ margin: "10% 0" }}>
      <Space direction="vertical">
        <Typography.Paragraph type="warning" style={{ fontSize: 42 }}>
          {":( "}
        </Typography.Paragraph>

        <Typography.Paragraph style={{ fontSize: 24 }}>
          {mssg}
        </Typography.Paragraph>
      </Space>
    </Flex>
  );
};

export default ErrorMssg;
