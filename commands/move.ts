import { createDir } from "./create";
import { deleteDir } from "./delete";
import { Dirs } from "../models/dirs.model";
import { checkIfAllParentDirsExist, findDir } from "../utils/utils";

export const moveDir = (fromDir: string, toDir: string, state: Dirs): Dirs => {
  const missingValue = checkIfAllParentDirsExist(fromDir, state);
  if (missingValue) {
    console.error(
      `Cannot move ${fromDir} because ${missingValue} does not exist`,
    );
    return state;
  }
  const newState = deleteDir(fromDir, state);
  return createDir(toDir, newState);
};
