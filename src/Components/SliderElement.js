import "../Components_Style/SliderElement.css";
function SliderElement(props) {
  return (
    <div
      className="slider-el"
      // eslint-disable-next-line no-useless-concat
      style={{ backgroundImage: `url(${props.path})` }}
    >
      <div className="text">{props.text}</div>
    </div>
  );
}

export default SliderElement;
