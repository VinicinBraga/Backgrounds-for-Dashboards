import "./HoverButtons.css";

// eslint-disable-next-line react/prop-types
function HoverButtons({ selectedComponent, onSelectChange }) {
  const componentMap = {
    blueDash: "BlueDash",
    whitedash: "WhiteDash",
  };

  return (
    <div className="hover_buttons">
      {Object.keys(componentMap).map((key) => (
        <div key={key}>
          <input
            type="radio"
            value={key}
            checked={selectedComponent === key}
            onChange={onSelectChange}
          />
          <label>{componentMap[key]}</label>
        </div>
      ))}
    </div>
  );
}

export default HoverButtons;
