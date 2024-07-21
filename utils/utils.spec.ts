import { Dirs } from "../models/dirs.model";
import { checkIfAllParentDirsExist, findDir } from "./utils";

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

describe("checkIfAllParentDirsExist", () => {
  const initialState: Dirs = {
    food: {
      pie: {
        apple: {},
      },
    },
    drinks: {},
  };

  it("returns null if all directories exist", () => {
    const result = checkIfAllParentDirsExist("food/pie/apple", initialState);
    expect(result).toBeNull();
  });

  it("returns the first missing directory", () => {
    const result = checkIfAllParentDirsExist("food/pie/banana", initialState);
    expect(result).toEqual("banana");
  });

  it("returns the first missing directory in a longer path", () => {
    const result = checkIfAllParentDirsExist(
      "food/cake/chocolate",
      initialState,
    );
    expect(result).toEqual("cake");
  });

  it("handles paths without slashes correctly", () => {
    const result = checkIfAllParentDirsExist("snacks", initialState);
    expect(result).toEqual("snacks");
  });

  it("correctly handles an empty path", () => {
    const result = checkIfAllParentDirsExist("", initialState);
    expect(result).toBeNull();
  });
});
