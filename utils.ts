import { Dirs } from "./models/dirs.model";

export const findDir = (dir: string, state: Dirs): Dirs => {
  const dirs = dir.split("/");
  const [currentDir, ...rest] = dirs;
  if (rest.length === 0) {
    return state[currentDir];
  }
  return findDir(rest.join("/"), state[currentDir]);
};
