// DAY 19

/* Description
--------------------------------------------------------------------------------
Wait a second! It looks like your message isn't making it all the way to Earth. Another look at the radio manual and you realize you must configure the radio before sending your broadcast. Write and call a function called configureBroadcast() which will get the broadcast to Earth.

Your function will need to follow a precise order:
  set the frequency on the radio
  set the antenna to active
  send your announcement

You've already written all the code to complete this challenge with a few minor tweaks you'll be phoning home in no time. Unfortunately this requires manual configuration, so you'll need to call your configureBroadcast() function to kick things off

PS. Remember to disable your previous frequency, antenna and announcement function calls as they were out of order!
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
  let  highFreq = radio.range.high;
  let lowFreq = radio.range.low;
  radio.frequency = (highFreq+lowFreq) / 2;
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

function setSpeed(speed) {
  let num = parseInt(speed,10);
  if (num >= 0) {
    navigation.speed = num;
  }
}

function activateAntenna() {
  ship.antenna.active = true;
}

function sendBroadcast() {
  for (var i = 0; i < 100; i++) {
    broadcast();
  }
}

function configureBroadcast() {
  /*
  set the frequency on the radio
  set the antenna to active
  send your announcement
  */
  setFrequency();
  activateAntenna();
  sendBroadcast();
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

configureBroadcast();
