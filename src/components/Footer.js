import ColorPalette from "../styles/ColorPalette";

const Footer = () => {
  return (
    <footer>
      <p style={{ textAlign: "center", color: `${ColorPalette.textPrimary}` }}>
        {" "}
        <a
          href="https://github.com/farzanehFathi/star-wars-characters"
          style={{
            textDecoration: "none",
            color: `${ColorPalette.textSecondary}`,
          }}
        >
          Open source project
        </a>{" "}
        developed by Farzaneh ©2024{" "}
      </p>
    </footer>
  );
};

export default Footer;
