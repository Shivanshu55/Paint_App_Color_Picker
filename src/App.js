import { useState } from "react";
import "./App.css";
import ColorSelector from "./ColourSelector";
import Selection from "./Selection";

const colourConfig = [
  {
    key: "blue",
    label: "Blue",
    classname: "btn-blue",
    background: "rgb(34, 193, 195)",
  },
  {
    key: "orange",
    label: "Orange",
    classname: "btn-orange",
    background: "rgb(221, 112, 18)",
  },
  {
    key: "green",
    label: "Green",
    classname: "btn-green",
    background: "rgb(44, 209, 88)",
  },
];

const title = "Select the gradient and then the Box to change the color";

function App() {
  const [nextBackground, setNextBackground] = useState({ background: "" });
  const applyColor = (updateSelectionStyle) => {
    updateSelectionStyle(nextBackground);
  };

  return (
    <div id="master">
      <h5 className="heading">{title}</h5>

      <div className="row">
        {colourConfig.map((config) => {
          return (
            <ColorSelector
              key={config.key}
              config={config}
              setNextBackground={setNextBackground}
            />
          );
        })}
      </div>

      <div className="row" id="children-wrapper">
        {["selection1", "selection2", "selection3"].map((key) => {
          return <Selection key={key} applyColor={applyColor} />;
        })}
      </div>
    </div>
  );
}

export default App;
