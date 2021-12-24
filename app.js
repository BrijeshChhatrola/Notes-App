const yargs = require("yargs");
const notes = require("./notes.js");

//Add Note
yargs.command({
  command: "add",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "sting",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  description: "Add a New Note!!!",
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Remove Note
yargs.command({
  command: "remove",
  description: "Remove a New Note!!!",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "sting",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//List Note
yargs.command({
  command: "list",
  description: "List your notes!!!",
  handler() {
    notes.listNotes();
  },
});

//Read Note
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
