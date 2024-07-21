export function printBrand() {
  console.log(`

██████  ██ ██████  ███    ███  █████  ██   ██ ██████       █████   ██████   ██████   ██████  
██   ██ ██ ██   ██ ████  ████ ██   ██ ██  ██  ██   ██     ██   ██ ██  ████ ██  ████ ██  ████ 
██   ██ ██ ██████  ██ ████ ██ ███████ █████   ██████       ██████ ██ ██ ██ ██ ██ ██ ██ ██ ██ 
██   ██ ██ ██   ██ ██  ██  ██ ██   ██ ██  ██  ██   ██          ██ ████  ██ ████  ██ ████  ██ 
██████  ██ ██   ██ ██      ██ ██   ██ ██   ██ ██   ██      █████   ██████   ██████   ██████  
                                                                                             
                                                                                             
`);

  console.log("DIRMAKR 9000: Turning Your File Mess into Success!");
}

export function printMenu() {
  console.log(`
MENU OPTIONS
======================================
CREATE {dirpath}
Example: CREATE fruits/apples/granny
--------------------------------------
DELETE {dirpath}
Example: DELETE fruits/apples/granny
--------------------------------------
MOVE {fromDirPath} {toDirPath}
Example: MOVE fruits/apples/granny fruits/apples/fuji
--------------------------------------
LIST
Displays all directories
--------------------------------------
`);
}
