const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
require("./conn/Conn");
app.use(express.json());
app.use(cors());
app.use(require("./Router/Notes"));
app.use(require("./Router/User"));

app.listen(port, () => {
  console.log("Server is on ");
});
