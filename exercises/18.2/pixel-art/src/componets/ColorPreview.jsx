import React, { useContext } from 'react';
import { PainterContext } from '../contexts/PainterContext';

const ColorPreview = (props) => {
  const { color } = useContext(PainterContext);
  return <div className="colorPreview">Cor escolhida: {color.name}</div>;
};
export default ColorPreview;
