export const createDir = (dir: string, state: any): any => {
  let newState = { ...state };

  if (state[dir]) {
    console.log(`Directory ${dir} already exists`);
    return state;
  }
  if (state[`${dir}`] !== Object) {
    newState = {
      ...state,
      [`${dir}`]: {},
    };
  }
  return newState;
};
