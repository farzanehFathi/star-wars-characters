import { Flex, Button } from "antd";
import { NavLink } from "react-router-dom";

const NavButtons = () => {
  return (
    <Flex className="NavContainer" justify="end" gap={20} align="center">
      <NavLink to="/">People</NavLink>

      <NavLink to="/planets">Planets</NavLink>

      <NavLink to="/films">Films</NavLink>

      <NavLink to="/species">Species</NavLink>

      <NavLink to="/starships">Starships</NavLink>

      <NavLink to="/vehicles">Vehicles</NavLink>
    </Flex>
  );
};

export default NavButtons;
