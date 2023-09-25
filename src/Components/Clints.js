import MainTitle from "./Title";
import "../Components_Style/Clints.css";
import ClintsSlider from "./ClintsSlider";
function Clints() {
  return (
    <section className="Clints">
      <MainTitle text="عملائنا" />
      <ClintsSlider />
    </section>
  );
}

export default Clints;
