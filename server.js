require("dotenv").config()
const app = require("./src/app");

const { connect, set } = require("mongoose");
set("strictQuery", false);


const PORT = process.env.PORT || 8080;

(async () => {
  try {
    await connect(process.env.CONNECTION_STRING);
    console.log("connection to the database is successful");
    app.listen(PORT, () => console.log(`you are running on localhost:${PORT}`));
  } catch (err) {
    console.log("connection to the database failed");
  }
})();
