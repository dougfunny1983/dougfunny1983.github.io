import React, { useContext } from 'react';
import PainterContext from '../contexts/PainterContext';

function ColorPicker(_) {
  const { colors, setColor } = useContext(PainterContext);
  const colorOption = (color) => {
    return (
      <div
        key={color}
        className="color"
        style={{ backgroundColor: color.hex }}
        onClick={() => setColor(color)}
      ></div>
    );
  };
  const colorOptions = () => colors.map((color) => colorOption(color));
  return <div className="colorpicker">{colorOptions()}</div>;
}

export default ColorPicker;
