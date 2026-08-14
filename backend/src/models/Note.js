import mongoose from "mongoose";

// schema create
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// model
const Note = mongoose.model("Note", noteSchema); // in db "Note" becomes "notes"

// export model

export default Note;
