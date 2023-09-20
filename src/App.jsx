import { useState } from "react";
import BlueDash from "./components/BlueDash/BlueDash.jsx";
import WhiteDash from "./components/WhiteDash/WhiteDash.jsx";

function App() {
  const componentMap = {
    blueDash: <BlueDash />,
    whitedash: <WhiteDash />,
  };

  const [selectedComponent, setSelectedComponent] = useState("blueDash");

  const handleRadioChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  return (
    <div className="App">
      {Object.keys(componentMap).map((key) => (
        <div key={key}>
          <input
            type="radio"
            value={key}
            checked={selectedComponent === key}
            onChange={handleRadioChange}
          />
          <label>{key}</label>
        </div>
      ))}

      {componentMap[selectedComponent]}
    </div>
  );
}

export default App;
