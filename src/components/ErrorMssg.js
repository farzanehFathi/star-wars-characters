import ColorPalette from "../styles/ColorPalette";

const ErrorMssg = ({ mssg }) => {
  return (
    <div>
      <p style={{ color: `${ColorPalette.textSecondary}`, fontSize: 42 }}>
        {":( "}
      </p>

      <p
        style={{
          fontSize: 24,
          color: `${ColorPalette.textPrimary}`,
        }}
      >
        {mssg}
      </p>
    </div>
  );
};

export default ErrorMssg;
