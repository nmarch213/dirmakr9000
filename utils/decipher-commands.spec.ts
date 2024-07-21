import { AcceptedCommands, decipherCommand } from "./decipher-command";

describe("decipherCommand", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("returns the correct command for each recognized input", () => {
    Object.values(AcceptedCommands).forEach((command) => {
      expect(decipherCommand(command.toLowerCase())).toEqual(command);
      expect(decipherCommand(command.toUpperCase())).toEqual(command);
    });
  });

  it("logs an error and provides a list of valid commands for an unrecognized command", () => {
    const result = decipherCommand("UNRECOGNIZED_COMMAND");
    expect(result).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Unknown command: UNRECOGNIZED_COMMAND",
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "Here is a list of accepted commands:",
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      Object.values(AcceptedCommands).join(", "),
    );
  });

  it("is case-insensitive", () => {
    expect(decipherCommand("create")).toEqual(AcceptedCommands.CREATE);
    expect(decipherCommand("delete")).toEqual(AcceptedCommands.DELETE);
    expect(decipherCommand("list")).toEqual(AcceptedCommands.LIST);
    expect(decipherCommand("move")).toEqual(AcceptedCommands.MOVE);
  });
});
