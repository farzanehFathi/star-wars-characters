import ColorPalette from "../styles/ColorPalette";

const Header = () => {
  return (
    <header
      style={{
        background: `${ColorPalette.backgroundSecondary}`,
        height: 75,
        margin: 0,
        alignContent: "center",
      }}
    >
      <h1
        style={{
          margin: 0,
          marginLeft: 20,
          color: `${ColorPalette.textSecondary}`,
        }}
      >
        Star Wars
      </h1>
    </header>
  );
};

export default Header;
