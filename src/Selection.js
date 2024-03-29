import { useState } from "react";

function Selection(props) {
  const [background, setBackground] = useState({background: ""});
  const { applyColor } = props;
  return (
    <div
      className="fix-box"
      style={background}
      onClick={() => applyColor(setBackground)}
    >
      <h2 className="heading">Selection</h2>
    </div>
  );
}

export default Selection;
