const { app } = require("./app");

const { db } = require("./utils/database");

db.authenticate()
  .then(() => console.log("authenticate"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("synced"))
  .catch((err) => console.log(err));

const PORT = 4004;

app.listen(PORT, () => console.log("Listen on port: " + PORT));
