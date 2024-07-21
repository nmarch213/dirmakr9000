import { Dirs } from "../models/dirs.model";

export const findDir = (dir: string[], state: Dirs): Dirs => {
  if (dir.length === 1) {
    return state[dir[0]];
  }
  return findDir(dir.slice(1), state[dir[0]]);
};
