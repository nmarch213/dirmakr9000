import { stdin, stdout } from "process";
import { decipherCommand } from "./decipher-command";
import { Dirs } from "./models/dirs.model";
import { createDir } from "./create";

let dirs: Dirs = {};
// Function to handle user input
const handleInput = (input: Buffer) => {
  if (!input) {
    console.log("Try Again");
  }

  const userInput: string[] = input.toString().trim().split(" ");
  const command = userInput[0];
  const dirCommand = decipherCommand(command);

  if (dirCommand) {
    switch (dirCommand) {
      case "CREATE":
        dirs = createDir(userInput[1], dirs);
        break;
      case "DELETE":
        console.log("DELETE");
        break;
      case "LIST":
        console.log("LIST");
        break;
      case "MOVE":
        console.log("MOVE");
        break;
    }
    console.log(dirs);
    prompt();
  }

  if (!dirCommand) {
    prompt();
  }
};

// Function to display prompt
const prompt = () => {
  stdout.write("Enter command: ");
};

// Set the encoding for stdin
stdin.setEncoding("utf-8");

// Listen for user input
stdin.on("data", handleInput);

// Initial prompt to the user
prompt();
