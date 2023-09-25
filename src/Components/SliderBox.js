import "../Components_Style/SliderBox.css";

function SliderBox(props) {
  return (
    <div
      className="slider-box"
      style={{ backgroundImage: `url(${props.path})` }}
    ></div>
  );
}

export default SliderBox;
