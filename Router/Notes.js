const express = require("express");
const { addNotes, getNotes, deleteNotes } = require("../Auth/Notes");

const router = express.Router();

router.get("/addNotes", addNotes);
router.get("/getNotes", getNotes);
router.get("/deleteNotes", deleteNotes);

module.exports = router;
