import { Dirs } from "../models/dirs.model";
import { deleteDir } from "./delete";

describe("deleteDir", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "error").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });
  it("does not change the state if the directory does not exist", () => {
    const initialState: Dirs = { topDir: { nestedDir: {} } };
    const resultState = deleteDir("nonexistentDir", initialState);
    expect(resultState).toEqual(initialState);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Cannot delete nonexistentDir because nonexistentDir does not exist",
    );
  });

  it("deletes a top-level directory", () => {
    const initialState: Dirs = { topDir: {}, otherDir: {} };
    const resultState = deleteDir("topDir", initialState);
    expect(resultState).not.toHaveProperty("topDir");
    expect(resultState).toHaveProperty("otherDir");
  });

  it("correctly deletes a nested directory", () => {
    const initialState: Dirs = {
      topDir: { nestedDir: {}, anotherDir: {} },
      otherDir: {},
    };
    const resultState = deleteDir("topDir/nestedDir", initialState);
    expect(resultState.topDir).not.toHaveProperty("nestedDir");
    expect(resultState.topDir).toHaveProperty("anotherDir");
  });
});
