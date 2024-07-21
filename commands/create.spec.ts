import { Dirs } from "../models/dirs.model";
import { createDir } from "./create";

describe("createDir", () => {
  it("returns the original state if the directory already exists", () => {
    const initialState: Dirs = { existingDir: {} };
    const newState = createDir("existingDir", initialState);
    expect(newState).toEqual(initialState);
  });

  it("adds a new directory if it does not exist", () => {
    const initialState: Dirs = { existingDir: {} };
    const newState = createDir("newDir", initialState);
    expect(newState).toHaveProperty("newDir");
  });

  it("correctly adds nested directories", () => {
    const initialState: Dirs = { existingDir: {} };
    const newState = createDir("newDir/nestedDir", initialState);
    expect(newState).toHaveProperty("newDir");
    expect(newState.newDir).toHaveProperty("nestedDir");
  });
});
