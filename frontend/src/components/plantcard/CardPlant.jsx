import { PiPottedPlantBold } from "react-icons/pi";
import "./CardPlant.scss";

export default function CardPlant() {
  return (
    <div className="container-card-plant">
      <div className="header-card">
        <h1>
          Emilie <PiPottedPlantBold />
        </h1>
        <h3>En bonne santé !</h3>
      </div>
      <div className="picture-card">
        <img src="./src/assets/miplante3-removebg.png" alt="Plante mignonne" />
      </div>
      <div className="information-card-plant">
        <h3>~ Aspidistra ~</h3>
        <p>10-07-2023</p>
      </div>
    </div>
  );
}
