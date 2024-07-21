import { Dirs } from "../models/dirs.model";

export const listDirs = (state: Dirs): void => {
  console.log("------------------------------");
  listNestedDirs(state, "");
  console.log("------------------------------");
};

const listNestedDirs = (state: Dirs, buffer: string): void => {
  buffer = buffer || "";
  Object.keys(state).forEach((key) => {
    console.log(buffer + key);
    listNestedDirs(state[key], buffer + "  ");
  });
};
