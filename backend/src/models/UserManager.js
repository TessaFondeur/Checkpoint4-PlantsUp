const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, alias) values (?, ?)`,
      [user.firstname, user.alias]
    );
  }
}

module.exports = UserManager;
