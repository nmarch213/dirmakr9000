import { createDir } from "./create";
import { deleteDir } from "./delete";
import { Dirs } from "../models/dirs.model";
import { findDir } from "../utils";

export const moveDir = (fromDir: string, toDir: string, state: Dirs): Dirs => {
  const fromDirState = findDir(fromDir.split("/"), state);
  const toDirState = findDir(toDir.split("/"), state);
  if (fromDirState && !toDirState) {
    const stateAfterDeletingFromDir = deleteDir(fromDir, state);
    return {
      ...stateAfterDeletingFromDir,
      ...createDir(toDir, stateAfterDeletingFromDir),
    };
  }
  return state;
};
