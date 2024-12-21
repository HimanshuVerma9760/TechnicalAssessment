const db = require("./util/database");
const cors = require("cors");
const express = require("express");
const { routes } = require("./routes/studentRoute");

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", routes);
db().then(() => {
  app.listen(port, () => console.log(`Quyl is listening on port ${port}!`));
});
