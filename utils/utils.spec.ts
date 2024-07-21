import { Dirs } from "../models/dirs.model";
import { findDir } from "./utils";

describe("findDir", () => {
  const initialState: Dirs = {
    home: {
      documents: {
        photos: {},
        videos: {},
      },
      downloads: {},
    },
    tmp: {},
  };

  it("returns the initial state for an empty path array", () => {
    const result = findDir([], initialState);
    expect(result).toEqual(initialState);
  });

  it("returns undefined for a non-existent directory", () => {
    const result = findDir(["home", "music"], initialState);
    expect(result).toBeUndefined();
  });

  it("finds a deeply nested directory", () => {
    const result = findDir(["home", "documents", "photos"], initialState);
    expect(result).toEqual({});
  });
});
