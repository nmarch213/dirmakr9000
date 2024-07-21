import { Dirs } from "../models/dirs.model";
import { deleteDir } from "./delete";

describe("deleteDir", () => {
  it("correctly deletes a directory with nested directories", () => {
    const initialState: Dirs = {
      food: {
        pie: {
          apple: {},
          banana: {},
        },
        cake: {},
      },
      snacks: {},
    };
    const expectedState: Dirs = {
      food: {
        pie: {
          banana: {},
        },
        cake: {},
      },
      snacks: {},
    };

    const resultState = deleteDir("food/pie/apple", initialState);
    expect(resultState).toEqual(expectedState);
  });

  it("deletes a top-level directory", () => {
    const initialState: Dirs = {
      food: {
        pie: {},
      },
      snacks: {},
    };
    const expectedState: Dirs = {
      snacks: {},
    };

    const resultState = deleteDir("food", initialState);
    expect(resultState).toEqual(expectedState);
  });

  it("does nothing if the directory does not exist", () => {
    const initialState: Dirs = {
      food: {
        pie: {
          apple: {},
        },
      },
      snacks: {},
    };

    const resultState = deleteDir("food/pie/orange", initialState);
    expect(resultState).toEqual(initialState);
  });
});
