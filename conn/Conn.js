const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vishal7859:Vishal4691@cluster0.cnpdj.mongodb.net/NotesMania?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => console.log(error));
