import { stdin, stdout } from "process";
import { decipherCommand } from "./utils/decipher-command";
import { Dirs } from "./models/dirs.model";
import { createDir } from "./commands/create";
import { deleteDir } from "./commands/delete";
import { listDirs } from "./commands/list";
import { moveDir } from "./commands/move";

let dirs: Dirs = {};

const handleInput = (input: Buffer) => {
  const userInput: string[] = input.toString().trim().split(" ");
  const command = userInput[0];
  const dirCommand = decipherCommand(command);

  if (dirCommand) {
    switch (dirCommand) {
      case "CREATE":
        dirs = createDir(userInput[1], dirs);
        break;
      case "DELETE":
        dirs = deleteDir(userInput[1], dirs);
        break;
      case "LIST":
        listDirs(dirs);
        break;
      case "MOVE":
        dirs = moveDir(userInput[1], userInput[2], dirs);
        break;
    }
    console.log(dirs);
    prompt();
  }

  if (!dirCommand) {
    prompt();
  }
};

const prompt = () => {
  stdout.write("Enter command: ");
};

stdin.setEncoding("utf-8");

stdin.on("data", handleInput);

prompt();
