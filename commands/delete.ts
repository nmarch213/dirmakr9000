import { Dirs } from "../models/dirs.model";
import { findDir } from "../utils/utils";

export const deleteDir = (dir: string, state: Dirs): Dirs => {
  const missingValue = checkIfAllParentDirsExist(dir, state);
  if (missingValue) {
    console.error(
      `Cannot delete ${dir} because ${missingValue} does not exist`,
    );
    return state;
  }
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
  const parentDir = dirs[dirs.length - 1];

  const parentDirState = findDir(dirs, state);
  const deletedDirState = {
    ...parentDirState,
  };
  delete deletedDirState[lastDir];

  return {
    ...state,
    [parentDir]: deletedDirState,
  };
};

const checkIfAllParentDirsExist = (dir: string, state: Dirs): string | null => {
  if (!dir.includes("/")) {
    dir = dir + "/";
  }
  const dirs = dir.split("/");
  let currentDir = state;
  for (let i = 0; i < dirs.length - 1; i++) {
    if (!currentDir[dirs[i]]) {
      return dirs[i];
    }
    currentDir = currentDir[dirs[i]];
  }
  return null;
};
