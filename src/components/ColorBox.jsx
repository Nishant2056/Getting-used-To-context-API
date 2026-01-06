import { useContext } from "react";
import { ColorContext } from "../store/ColorStore.jsx";

const ColorBox = () => {
  const { state, setColor } = useContext(ColorContext);
  const colors = ["Blue", "Green", "Gray", "Black", "Transparent", "Pink"];
  return (
    <>
      <div className="color-box " style={{ backgroundColor: state.color }}>
        <h1>Color Box</h1>
      </div>
      <div className="color-buttons">
        {/* <button type="button" onClick={() => setColor("Blue")}>
          Change Blue
        </button>
        <button type="button" onClick={() => setColor("Green")}>
          Change Green
        </button>
        <button type="button" onClick={() => setColor("Gray")}>
          Change Gray
        </button>
        <button type="button" onClick={() => setColor("Black")}>
          Change Black
        </button>
        <button type="button" onClick={() => setColor("Transparent")}>
          Change Transparent
        </button> */}
        {colors.map((color) => (
          <button type="button" key={color} onClick={() => setColor(color)}>
            Change {color}
          </button>
        ))}
      </div>
    </>
  );
};

export default ColorBox;
