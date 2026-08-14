import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // reverse order
    res.json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.json({ message: "Internal Server Error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found!" });

    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.json({ message: "Internal Server Error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;

    // const note = new Note({ title, content });
    // await note.save();

    const note = await Note.create({ title, content });
    res.json(note);
  } catch (error) {
    console.error("Error creating notes", error);
    res.json({ message: "Internal Server Error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true },
    );

    if (!updatedNote)
      return res.status(404).json({ message: "Note not found!" });

    res.json(updatedNote);
  } catch (error) {
    console.error("Error updating note", error);
    res.json({ message: "Internal Server Error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote)
      return res.status(404).json({ message: "Note not found!" });

    res.json({ message: "This note has been Deleted!", deletedNote });
  } catch (error) {
    console.error("Error deleting note", error);
    res.json({ message: "Internal Server Error" });
  }
}
