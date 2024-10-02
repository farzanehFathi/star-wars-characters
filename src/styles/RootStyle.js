import { ConfigProvider, Layout } from "antd";
import HeaderContent from "../components/HeaderContent";
import FooterContent from "../components/FooterContent";

const { Header, Content, Footer } = Layout;

const RootStyle = ({ content }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerColor: "#FFE300",
            headerBg: "#1C1E22",
          },
          Card: {
            colorText: "#272B30",
            headerBg: "#1C1E22",
            colorTextHeading: "#FFE300",
            colorBgContainer: "#F5F5F5",
            headerFontSize: 18,
            fontWeightStrong: 700,
          },
        },
        token: {
          // Seed Token
          colorPrimary: "#FFE300",
          colorBgContainer: "#1C1E22",
          colorBgSolidActive: "#FFE300",
          colorBgLayout: "#272B30",
          colorTextBase: "#C8C8C8",
          colorLinkActive: "#FFE300",
          colorLink: "#FFE300",
        },
      }}
    >
      {" "}
      <style>{`.active {color:#FFE300 }`}</style>
      <Layout>
        {""}
        <Header>
          <HeaderContent />
        </Header>

        <Content>{content}</Content>

        <Footer>
          <FooterContent />
        </Footer>
        {""}
      </Layout>
    </ConfigProvider>
  );
};

export default RootStyle;
