import { Dirs } from "../models/dirs.model";

export const findDir = (dir: string[], state: Dirs): Dirs => {
  if (!state) {
    return state;
  }
  if (dir.length === 0) {
    return state;
  }
  if (dir.length === 1) {
    return state[dir[0]];
  }
  return findDir(dir.slice(1), state[dir[0]]);
};

export const checkIfAllParentDirsExist = (
  dir: string,
  state: Dirs,
): string | null => {
  const dirs = dir.split("/").filter(Boolean);
  let currentDir = state;

  for (let i = 0; i < dirs.length; i++) {
    if (!currentDir[dirs[i]]) {
      return dirs[i];
    }
    currentDir = currentDir[dirs[i]];
  }

  return null;
};

export const deepCopy = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};
