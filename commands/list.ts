import { Dirs } from "../models/dirs.model";

export const listDirs = (state: Dirs): void => {
  return listNestedDirs(state);
};

// TODO: for each nested dir, print the dir name with one tab space more than the parent dir
const listNestedDirs = (state: Dirs): void => {
  Object.keys(state).forEach((key) => {
    console.log(key);
    listNestedDirs(state[key]);
  });
};
