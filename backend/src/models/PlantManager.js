const AbstractManager = require("./AbstractManager");

class PlantManager extends AbstractManager {
  constructor() {
    super({ table: "plant" });
  }

  insert(plant) {
    return this.database.query(
      `insert into ${this.table} (firstname_plant) values (?)`,
      [plant.firstname_plant]
    );
  }

  update(plant) {
    return this.database.query(
      `update ${this.table} set firstname_plant = ? where id = ?`,
      [plant.firstname_plant, plant.id]
    );
  }
}

module.exports = PlantManager;
