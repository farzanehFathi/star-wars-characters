import { NavLink } from "react-router-dom";

//Js Files
import ColorPalette from "../styles/ColorPalette";

const Navbar = () => {
  return (
    <div>
      <NavLink
        style={{
          background: "transparent",
          padding: "3px 12px",
          marginRight: 12,
          color: `${ColorPalette.textSecondary}`,
          border: `solid 1px ${ColorPalette.textSecondary}`,
          borderRadius: 5,
        }}
      >
        People
      </NavLink>

      <NavLink
        style={{
          background: "transparent",
          padding: "3px 12px",
          marginRight: 12,
          color: `${ColorPalette.textSecondary}`,
          border: `solid 1px ${ColorPalette.textSecondary}`,
          borderRadius: 5,
        }}
      >
        Planets
      </NavLink>
    </div>
  );
};

export default Navbar;
