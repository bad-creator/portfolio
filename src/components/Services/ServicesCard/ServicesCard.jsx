import "./ServicesCard.css";

export default function ServicesCard(props) {
  const number = props.number;
  const header = props.header;
  const description = props.description;
  return (
    <div className="service-card">
      <div className="service-number">
        <p className="service-card-number">{number}</p>
        <div className="service-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            width="30px"
            viewBox="0 -960 960 960"
          >
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </div>
      </div>
      <div className="service-header">
        <h2 className="service-card-header">{header}</h2>
      </div>
      <div className="service-card-description">
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
