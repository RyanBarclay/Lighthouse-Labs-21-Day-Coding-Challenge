// DAY 11

/* Description
--------------------------------------------------------------------------------
"Beacon active!" LARRY sounds as pleased as a robot can be. In fact, you spot the faintest hint of smile on his robot duck bill.

"Calibration QUACK complete! Now start RADIO! NEED to use the RADIO! QUACK QUACK!"

LARRY's prompt sends you back to the ship's manual, where you find an entire section about the radio. You notice that the radio has a feature you missed before, the range! Your particular radio has a range of 88 to 108 MHz, much like the FM radio in your car back on Earth. There's a note in the manual that says that the radio should be tuned to the same frequency as the lower end plus the upper end, and that total divided by two.

Write a function called setFrequency() that will set the frequency property on the radio object using the above formula.

Be careful because not all radios will have the same range, so make sure your code is reuseable. Instead of coding the numbers directly into your equation use dot notation to access them from the radio object, which you can see by clicking the Show Global Objects link above.
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
