// DAY 15

/* Description
--------------------------------------------------------------------------------
"One-step calibration needed," LARRY quacks. The last page of the calibration manual says that for proper calibration, you need to write a function called calibrate() which the nav system can call anytime it wants, which will calibrate your X, Y, and Z axes. The good news is, you’ve already done the hard part. Write one function called calibrate() which will call your other three functions in it, one after the other.

You don't need call the calibrate() function yourself, but don't forget to remove the other calibrateX, calibrateY and calibrateZ calls you already wrote
*/

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

function findModuleIndex(targetName) {
  /*
  Description:
    Loops over availableModules and tries to match `targetName` with the property `name` of each module.

    Will return -1 if not in array
    Does not account for duplicates.
  */
  for (var i = 0; i < availableModules.length; i++) {
    // let token = availableModules[i]
    if (availableModules[i].name == targetName) {
      // if (availableModules[i].essential){
        return i;
      // }
    }
  } //end of for
  return -1;
}

function resetLARRY() {
  /*
  Description:
    `resets` Larry by making him quack 10 times???
    (Kinda lame)
  */
  for (var i = 0; i < 10; i++) {
    LARRY.quack();
  }
}

function setMessage(object) {
  /*
  Description:
    Takes an object and sets the message property on the radio object to be the JSON version of the object...
  */
  let message = JSON.stringify(object);
  radio.message = message;
}

function activateBeacon() {
  radio.beacon = true;
}

function setFrequency() {
  let  highFreq = radio.range;
  highFreq = highFreq.high;
  let lowFreq = radio.range;
  lowFreq = lowFreq.low
  let val = (highFreq+lowFreq) / 2
  radio.frequency = val;
}

function initialize() {
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
}

function calibrateX() {
  for (var i = 0; i < 12; i++) {
    let signal = checkSignal();
    if (typeof signal == `undefined`) {
      // do this
    } else {
      // do that
      navigation.x = signal;
      break;
    }

  }
}

function calibrateY() {
  for (var i = 0; i < 60; i++) {
    let signal = checkSignal();
    if (typeof signal == `undefined`) {
      // do this
    } else {
      // do that
      navigation.y = signal;
      break;
    }
  }
}

function calibrateZ() {
  for (var i = 0; i < 60; i++) {
    let signal = checkSignal();
    if (typeof signal == `undefined`) {
      // do this
    } else {
      // do that
      navigation.z = signal;
      break;
    }
  }
}

function calibrate() {
  calibrateX();
  calibrateY();
  calibrateZ();
}

// MAIN
let string = `life-support`;
loadModule(findModuleIndex(string));

string = `propulsion`;
loadModule(findModuleIndex(string));

string = `navigation`;
loadModule(findModuleIndex(string));

resetLARRY();

string = `communication`;
loadModule(findModuleIndex(string));

setMessage(navigation);

activateBeacon();

calibrate();
