export const AcceptedCommands = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  LIST: "LIST",
  MOVE: "MOVE",
} as const;

type AcceptedCommands =
  (typeof AcceptedCommands)[keyof typeof AcceptedCommands];

export const decipherCommand = (
  firstInput: string,
): AcceptedCommands | void => {
  firstInput = firstInput.toUpperCase();

  switch (firstInput) {
    case AcceptedCommands.CREATE:
      return AcceptedCommands.CREATE;
    case AcceptedCommands.DELETE:
      return AcceptedCommands.DELETE;
    case AcceptedCommands.LIST:
      return AcceptedCommands.LIST;
    case AcceptedCommands.MOVE:
      return AcceptedCommands.MOVE;
    default:
      console.log(`Unknown command: ${firstInput}`);
      console.log("Here is a list of accepted commands:");
      console.log(Object.values(AcceptedCommands).join(", "));
  }
};
