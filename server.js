const app = require("./src/app");
// mongodb+srv://tayehassan:<password>@hassancluster.ro1fmp6.mongodb.net/st app = require("./src/app");
const { connect, set } = require("mongoose");
set("strictQuery", false);

const URL =
  "mongodb+srv://tayehassan:heystopthere@hassancluster.ro1fmp6.mongodb.net/voiceout2me";

const PORT = process.env.PORT || 8080;

(async () => {
  try {
    await connect(URL);
    console.log("connection to the database is successful");
    app.listen(PORT, () => console.log(`you are running on localhost:${PORT}`));
  } catch (err) {
    console.log("connection to the database failed");
  }
})();
