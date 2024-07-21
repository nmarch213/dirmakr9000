import { Dirs } from "./models/dirs.model";

export const deleteDir = (dir: string, state: Dirs): Dirs => {
  if (state[dir]) {
    delete state[dir];
    return state;
  }
  return deleteNestedDirsFromState(dir, state);
};

const deleteNestedDirsFromState = (dir: string, state: Dirs): Dirs => {
  const dirs = dir.split("/");
  const [currentDir, ...rest] = dirs;
  if (rest.length === 1) {
    console.log("currentDir", currentDir);
    const deletedState = { ...state[currentDir] };
    delete deletedState[rest[0]];
    return {
      ...state,
      [currentDir]: {
        ...deletedState,
      },
    };
  }
  return {
    ...state,
    [currentDir]: deleteNestedDirsFromState(rest.join("/"), state[currentDir]),
  };
};
