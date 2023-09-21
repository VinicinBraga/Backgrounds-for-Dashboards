import { useState } from "react";
import BlueDash from "./components/BlueDash/BlueDash.jsx";
import WhiteDash from "./components/WhiteDash/WhiteDash.jsx";
import HoverButtons from "./pages/HoverButtons/HoverButtons.jsx";
import { AiOutlineBars } from "react-icons/ai";

import "./App.css";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("blueDash");

  const handleRadioChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  return (
    <div className="App">
      <div className="HoverArea">
        <div className="hover_icon">
          <AiOutlineBars size={30} className="iconeStyle" />
        </div>
        <div className="SelectionButtonsContainer">
          <HoverButtons
            selectedComponent={selectedComponent}
            handleRadioChange={handleRadioChange}
          />
        </div>
      </div>

      {selectedComponent === "blueDash" ? <BlueDash /> : <WhiteDash />}
    </div>
  );
}

export default App;
