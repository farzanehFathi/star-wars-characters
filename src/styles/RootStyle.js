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
            headerBg: "#1C1E22",
            headerHeight: 75,
          },

          Typography: {
            colorText: "#272B30",
            colorWarning: "#FFE300",
            colorTextHeading: "#FFE300",
          },
          Button: {
            colorBgContainer: "#454A4E",
            colorText: "#C8C8C8",
            colorBorder: "#272B30",
            textTextHoverColor: "FFE300",
            defaultHoverBg: "#444950",
          },
          Card: {
            colorText: "#272B30",
            colorBgContainer: "#F5F5F5",
            headerBg: "#1C1E22",
            colorTextHeading: "#FFE300",
            headerFontSize: 18,
            fontWeightStrong: 700,
          },
        },
        token: {
          colorTextBase: "#C8C8C8",
          colorPrimary: "#FFE300",
          colorBgContainer: "#1C1E22",
          colorBgSolidActive: "#FFE300",
          colorBgLayout: "#272B30",
          colorLinkActive: "#FFE300",
          colorLink: "#FFE300",
        },
      }}
    >
      {" "}
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ width: "100%", padding: "0 5%", margin: "0 auto" }}>
          <HeaderContent />
        </Header>

        <Content
          style={{ width: "100%", padding: "30px 5%", margin: "0 auto" }}
        >
          {content}
        </Content>

        <Footer style={{ width: "100%", padding: "30px 5%", margin: "0 auto" }}>
          <FooterContent style={{ width: "90%", margin: "0 auto" }} />
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default RootStyle;
