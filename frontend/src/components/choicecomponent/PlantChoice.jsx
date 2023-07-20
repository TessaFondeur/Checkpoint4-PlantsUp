import ImageButton from "../buttonimage/ImageButton";
import "./PlantChoice.scss";

export default function PlantChoice() {
  const data = [
    {
      id: 1,
      family_name: "Aspidistra",
      image: "./src/assets/miplante3-removebg.png",
    },
    {
      id: 2,
      family_name: "Spathiphyllum",
      image: "./src/assets/plante3-removebg.png",
    },
  ];

  return (
    <div className="container-global-plants">
      <div className="title-choose-plants">
        <h1>Bonjour ... ! Choisis ta plante ~</h1>
      </div>
      <div className="container-plants">
        {data.map(
          (plant, index) =>
            index < 2 && (
              <ImageButton
                key={plant.id}
                image={plant.image}
                name={plant.family_name}
              />
            )
        )}
      </div>
    </div>
  );
}
