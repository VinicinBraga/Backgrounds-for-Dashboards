import "./HoverButtons.css";

// eslint-disable-next-line react/prop-types
function HoverButtons({ selectedComponent, onSelectChange }) {
  const componentMap = {
    blueDash: "BlueDash",
    whitedash: "WhiteDash",
  };

  return (
    <div className="hover_buttons">
      <h4 className="dash_titles">Templates</h4>
      <h5 className="dash_titles">Already Created</h5>
      {Object.keys(componentMap).map((key) => (
        <div className="hover_inputs" key={key}>
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
