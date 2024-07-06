import "./Services.css";
import { servicesData } from "../../data/data";
import ServicesCard from "./ServicesCard/ServicesCard";

export default function Services() {
  return (
    <div
      className="service-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexGrow: "1",
      }}
    >
      <main className="services">
        {servicesData.map((card) => (
          <ServicesCard
            number={card.number}
            header={card.header}
            description={card.description}
          />
        ))}
      </main>
    </div>
  );
}
