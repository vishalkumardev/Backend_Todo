const Notes = require("../models/Notes");

const addNotes = async (req, res) => {
  const { notes, title, email } = req.query;
  try {
    const User = new Notes({ notes, email, title });
    const UserRegister = await User.save();

    if (UserRegister) {
      return res.status(200).send({
        success: true,
        message: "Notes Added Successfully",
      });
    }
  } catch {
    return res.status(500).send({ success: false, message: "Server Error" });
  }
};

const getNotes = async (req, res) => {
  var { email } = req.query;

  try {
    const notes = await Notes.find({ email: email });

    if (notes) {
      return res.status(200).send({
        success: true,
        notes: notes,
      });
    }
  } catch (error) {
    return res.status(500).send({ success: false, message: "Server Error" });
  }
};
const deleteNotes = async (req, res) => {
  var { _id } = req.query;

  try {
    const notes = await Notes.findByIdAndDelete({ _id: _id });

    if (!notes) {
      return res
        .status(400)
        .send({ success: false, message: "Notes Not Found" });
    } else {
      return res.status(200).send({
        success: true,
        message: "Notes Delete Successfully",
      });
    }
  } catch (error) {
    return res.status(500).send({ success: false, message: "Server Error" });
  }
};

module.exports = { addNotes, deleteNotes, getNotes };
