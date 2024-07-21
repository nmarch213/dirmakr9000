import { Dirs } from "../models/dirs.model";
import { listDirs } from "./list";

describe("listDirs", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("handles an empty state without errors", () => {
    const initialState: Dirs = {};
    listDirs(initialState);
    expect(consoleSpy).toHaveBeenCalledTimes(2); // Only the initial and final logs
  });

  it("lists a single directory", () => {
    const initialState: Dirs = { singleDir: {} };
    listDirs(initialState);
    expect(consoleSpy).toHaveBeenCalledWith("------------------------------");
    expect(consoleSpy).toHaveBeenCalledWith("singleDir");
    expect(consoleSpy).toHaveBeenCalledWith("------------------------------");
  });

  it("correctly lists nested directories", () => {
    const initialState: Dirs = { topDir: { nestedDir: {} } };
    listDirs(initialState);
    expect(consoleSpy).toHaveBeenCalledWith("------------------------------");
    expect(consoleSpy).toHaveBeenCalledWith("topDir");
    expect(consoleSpy).toHaveBeenCalledWith("  nestedDir");
    expect(consoleSpy).toHaveBeenCalledWith("------------------------------");
  });
});
