import { Dirs } from "./models/dirs.model";

export const createDir = (dir: string, state: Dirs): any => {
  if (state[dir]) {
    console.log(`Directory ${dir} already exists`);
    return state;
  } else {
    return {
      ...state,
      ...addNestedDirsToState(dir, dir, state),
    };
  }
};

const addNestedDirsToState = (
  initialCommand: string,
  dir: string,
  state: Dirs,
): Dirs => {
  const dirs = dir.split("/");
  const [currentDir, ...rest] = dirs;
  if (rest.length === 0) {
    return {
      ...state[initialCommand.split("/")[0]],
      [currentDir]: {},
    };
  }
  return {
    [currentDir]: addNestedDirsToState(initialCommand, rest.join("/"), state),
  };
};
