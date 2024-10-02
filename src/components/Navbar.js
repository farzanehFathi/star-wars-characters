import { NavLink } from "react-router-dom";
import { Button, Space } from "antd";

const Navbar = () => {
  return (
    <div>
      <Space>
        <NavLink to="/">
          <Button>People</Button>
        </NavLink>

        <Button>
          <NavLink to="/planets">Planets</NavLink>
        </Button>
      </Space>
    </div>
  );
};

export default Navbar;
