import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
        presetColors={[
          "#ccc",
          "#ffd803",
          "#272343",
          "#bae8e8",
          "#ffc6c7",
          "#c3f0ca",
          "#3da9fc",
          "#ef4565",
          "#1b2d45",
          "#d1d1e9",
          "#004643",
          "#001e1d"
        ]}
      />
    </div>
  );
};

export default ColorPicker;
