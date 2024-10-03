import { NavLink } from "react-router-dom";
import { Button, Space } from "antd";

const NavButtons = () => {
  return (
    <>
      <Space>
        <NavLink to="/">
          <Button>People</Button>
        </NavLink>

        <Button>
          <NavLink to="/planets">Planets</NavLink>
        </Button>
      </Space>
    </>
  );
};

export default NavButtons;
