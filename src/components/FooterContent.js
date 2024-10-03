import { Typography } from "antd";

const FooterContent = () => {
  return (
    <>
      <p style={{ textAlign: "center" }}>
        {" "}
        <Typography.Link
          href="https://github.com/farzanehFathi/star-wars-characters"
          style={{}}
        >
          Open source project
        </Typography.Link>{" "}
        developed by Farzaneh ©2024{" "}
      </p>
    </>
  );
};

export default FooterContent;
