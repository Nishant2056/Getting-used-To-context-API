import { useContext } from "react";
import { ColorContext } from "../store/ColorStore.jsx";

const ColorBox = () => {
  const {
    state,
    handleBlue,
    handleGreen,
    handleGray,
    handleBlack,
    handleTransparent,
  } = useContext(ColorContext);
  return (
    <>
      <div className="color-box " style={{ backgroundColor: state.color }}>
        <h1>Color Box</h1>
      </div>
      <div className="color-buttons">
        <button type="button" onClick={() => handleBlue("Blue")}>
          Change Blue
        </button>
        <button type="button" onClick={() => handleGreen("Green")}>
          Change Green
        </button>
        <button type="button" onClick={() => handleGray("Gray")}>
          Change Gray
        </button>
        <button type="button" onClick={() => handleBlack("Black")}>
          Change Black
        </button>
        <button type="button" onClick={() => handleTransparent("Transparent")}>
          Change Transparent
        </button>
      </div>
    </>
  );
};

export default ColorBox;
