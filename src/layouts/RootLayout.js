import { Outlet } from "react-router-dom";
import ColorPalette from "../styles/ColorPalette";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div
      style={{
        background: `${ColorPalette.backgroundPrimary}`,
        minHeight: "100vh",
      }}
    >
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
