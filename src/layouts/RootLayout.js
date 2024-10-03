import { Outlet } from "react-router-dom";

// Styles
import RootStyle from "../styles/RootStyle";

// Components

const RootLayout = () => {
  return <RootStyle content={<Outlet />} />;
};

export default RootLayout;
