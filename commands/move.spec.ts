import { Dirs } from "../models/dirs.model";
import { moveDir } from "./move";

describe("moveDir", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "error").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("does not move if the source directory parent does not exist", () => {
    const initialState: Dirs = { food: { pie: {} } };
    const resultState = moveDir(
      "food/cake/apple",
      "snacks/sweet/apple",
      initialState,
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "Cannot move food/cake/apple because cake does not exist",
    );
    expect(resultState).toEqual(initialState);
  });

  it("successfully moves a directory to a new location", () => {
    const initialState: Dirs = { food: { pie: { apple: {} } }, snacks: {} };
    const expectedState: Dirs = {
      food: { pie: {} },
      snacks: { sweet: { apple: {} } },
    };
    const resultState = moveDir(
      "food/pie/apple",
      "snacks/sweet/apple",
      initialState,
    );
    console.log(resultState);
    expect(resultState).toEqual(expectedState);
  });

  it("maintains state integrity after moving a directory", () => {
    const initialState: Dirs = { food: { pie: { apple: {} } }, snacks: {} };
    const newState = moveDir(
      "food/pie/apple",
      "snacks/sweet/apple",
      initialState,
    );
    // @ts-expect-error - testing
    expect(newState.food.pie).toEqual({});
    // @ts-expect-error - testing
    expect(newState.snacks.sweet).toHaveProperty("apple");
  });
});
