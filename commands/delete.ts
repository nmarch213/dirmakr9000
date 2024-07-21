import { Dirs } from "../models/dirs.model";
import { checkIfAllParentDirsExist, deepCopy, findDir } from "../utils/utils";

export const deleteDir = (dir: string, state: Dirs): Dirs => {
  const missingValue = checkIfAllParentDirsExist(dir, state);
  if (missingValue) {
    console.error(
      `Cannot delete ${dir} because ${missingValue} does not exist`,
    );
    return state;
  }
  return deleteNestedDirsFromState(dir, deepCopy(state));
};

const deleteNestedDirsFromState = (dir: string, state: Dirs): Dirs => {
  const dirs = dir.split("/");
  const lastDir = dirs.pop();

  let current = state;
  for (const dir of dirs) {
    if (current[dir]) {
      current = current[dir];
    } else {
      return state;
    }
  }

  if (lastDir && current && current[lastDir]) {
    delete current[lastDir];
  }

  return state;
};
