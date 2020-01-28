import React, {useState} from 'react';
import './App.css';
import ColorPicker from './componets/ColorPicker';
import PaintGrid from './componets/PaintGrid';
import ColorPreview from './componets/ColorPreview';
import { colors, PainterContext } from '../contexts/PainterContext';

const App = () => {
  const [color, setColor] = useState(color[0]);
  return (
    <div>
      <PainterContext.Provider value={{ colors, color, setColor }}>
        <ColorPicker />
        <ColorPreview />
        <br />
        <PaintGrid />
      </PainterContext.Provider>
    </div>
  );
};

export default App;
