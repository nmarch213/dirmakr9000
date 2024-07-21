import { Dirs } from "../models/dirs.model";
import { checkIfAllParentDirsExist, findDir } from "../utils/utils";

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
