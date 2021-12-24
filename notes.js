const fs = require("fs");
const chalk = require("chalk");

//Adding New note
const addNote = (title, body) => {
  const notes = loadNotes();
  const dublicatenote = notes.find((note) => note.title === title);

  if (!dublicatenote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log(chalk.blueBright.inverse.bold("New Note Added!!"));
  } else {
    console.log(chalk.yellowBright.inverse.bold("Note title is Taken!!!"));
  }
};

//List out Notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes.."));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

//Remove Note
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title != title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.greenBright.inverse.bold("Note Removed!!"));
  } else {
    console.log(chalk.redBright.inverse.bold("No note found!!"));
  }

  saveNote(notesToKeep);
};

//Read Full Note
const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

//Save the note into json file
const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//Loading all Notes from json file
const loadNotes = () => {
  try {
    const databuffer = fs.readFileSync("notes.json");
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//Exporting all Functions
module.exports = {
  addNote: addNote,
  listNotes: listNotes,
  removeNote: removeNote,
  readNote: readNote,
};
