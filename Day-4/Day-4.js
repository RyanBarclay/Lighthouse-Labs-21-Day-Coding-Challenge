// DAY 4

/* Description
--------------------------------------------------------------------------------
"DANGER QUACK DANGER QUACK!"

LARRY seemed so happy before, but he really is starting to get a bit agitated. Now that you know there are three essential modules, maybe you should start loading them into the ship's systems.

Write a function called loadModule(). It needs to take a parameter, called index. Your function should be set up like this:

function loadModule(index) { }

When loadModule gets the index number of a module, it should load it into the ship's modules property (which is already an array). Before you load it in, set the enabled property to true. You need to loop over the availableModules and find the module called "life-support" and get its index, then use it to call loadModule().

**Hint:** You need to either loop through availableModules outside of any function or write a seperate function that handles the looping make sure it is called in your code"
*/
function powerOn() {
  /*
  Description:
    Changes `powerOn` property of object `ship` to  true.
  */
  ship.powerOn = `true`;
}

function countModules() {
  /*
  Description:
    Counts the amount of modules thare are to choose from
  */
  amnt = availableModules.length;
  return amnt;
}

function countEssential() {
  /*
  Description:
    Counts the amount of modules from the the avaiableModules that have the essential flag set.
  */
  let curCount = 0;
  for (var i = 0; i < availableModules.length; i++) {
    let token = availableModules[i];
    if (token.essential) {
      curCount++;
    }
  } // end of for
  return curCount;
}

function loadModule(index) {
  /*
  Description:
    When loadModule gets the index number of a module, it should load it into the ship's modules property (which is already an array). Before you load it in, set the enabled property to true.
  */
  //1.enable on
  //2.insert into ship.modules
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}

function findModule(targetName) {
  /*
  Description:
    Loops over availableModules and tries to match `targetName` with the property `name` of each module.

    Will return -1 if not in array
    Does not account for duplicates.
  */
  for (var i = 0; i < availableModules.length; i++) {
    // let token = availableModules[i]
    if (availableModules[i].name == targetName) {
      return i;
    }
  } //end of for
  return -1;
}

loadModule(findModule(`life-support`));
