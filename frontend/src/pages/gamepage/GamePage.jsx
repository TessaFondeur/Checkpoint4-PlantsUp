import CardPlant from "../../components/plantcard/CardPlant";
import WatercanButton from "../../components/buttoncan/WatercanButton";
import "./GamePage.scss";

export default function GamePage() {
  return (
    <div className="card-plant-page">
      <div>
        <CardPlant />
      </div>
      <div>
        <WatercanButton />
      </div>
    </div>
  );
}
