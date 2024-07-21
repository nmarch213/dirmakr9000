import { Dirs } from "./models/dirs.model";
import { findDir } from "./utils";

export const deleteDir = (dir: string, state: Dirs): Dirs => {
  if (state[dir]) {
    delete state[dir];
    return state;
  }
  return deleteNestedDirsFromState(dir, state);
};

const deleteNestedDirsFromState = (dir: string, state: Dirs): Dirs => {
  const dirs = dir.split("/");
  const lastDir = dirs[dirs.length - 1];
  dirs.pop();
  const parentDirState = findDir(dirs, state);
  const parentDir = dirs[dirs.length - 1];

  const deletedDirState = {
    ...parentDirState,
  };
  delete deletedDirState[lastDir];

  return {
    ...state,
    [parentDir]: deletedDirState,
  };
};
