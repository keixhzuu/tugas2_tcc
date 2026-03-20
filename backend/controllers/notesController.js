const Notes = require('../models/notesModel');

// GET ALL
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.findAll({
    order: [['createdAt', 'DESC']]
    });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE
exports.createNote = async (req, res) => {
  try {
    const note = await Notes.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateNote = async (req, res) => {
  try {
    await Notes.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ message: 'Updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteNote = async (req, res) => {
  try {
    await Notes.destroy({
      where: { id: req.params.id }
    });
    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};