import { useState } from "react";
import BlueDash from "./components/BlueDash/BlueDash.jsx";
import WhiteDash from "./components/WhiteDash/WhiteDash.jsx";
import HoverButtons from "./components/HoverButtons/HoverButtons.jsx";
import "./App.css"; // Importe seu arquivo CSS

function App() {
  const [selectedComponent, setSelectedComponent] = useState("blueDash");
  const [isHovered, setIsHovered] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  return (
    <div className="App">
      <div
        className="HoverArea"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div className="SelectionButtonsContainer">
            <HoverButtons
              selectedComponent={selectedComponent}
              onSelectChange={handleRadioChange}
            />
          </div>
        )}
      </div>
      {selectedComponent === "blueDash" ? <BlueDash /> : <WhiteDash />}
    </div>
  );
}

export default App;
