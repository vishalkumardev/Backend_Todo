const express = require("express");
const app = express();
const port = 5000;

require("./conn/Conn");
app.use(express.json());
app.use(require("./Router/Notes"));
app.use(require("./Router/User"));

app.listen(port, () => {
  console.log("Server is on ");
});
