import { Outlet } from "react-router-dom";

// Styles
import RootStyle from "../styles/RootStyle";

// Components

const RootLayout = () => {
  return (
    <RootStyle
      content={
        <>
          <main style={{ width: "90%", margin: "auto" }}>
            <Outlet />
          </main>
        </>
      }
    />
  );
};

export default RootLayout;
