import { Dirs } from "./models/dirs.model";

export const createDir = (dir: string, state: Dirs): any => {
  if (state[dir]) {
    console.log(`Directory ${dir} already exists`);
    return state;
  } else {
    return {
      ...state,
      [`${dir}`]: {},
    };
  }
};
