const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  notes: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Notes = new mongoose.model("NOTES", NotesSchema);
module.exports = Notes;
