// DAY 20

/* Description
--------------------------------------------------------------------------------
Success! Earth has received your message and it looks like they are trying to send something back in return

"th1s 1s 4 t3st. th1s 1s 0nl5 4 t3st. 1f th1s w3r3 4 r34l m3ss4g3, 502 w021d g3t s0m3th1ng m34n1ngf2l." This message chatters out of the radio.

After staring at the message for a while, you aren't quite sure what they are trying to say.

"VOWELS ERROR!" LARRY tells you. VOWELS ERROR? What is that? "My QUACK current operating system cannot process vowels, so I've replaced them all with numbers".

Write a function called decodeMessage(message). This function takes in a coded message and changes all the numbers back to their respective vowels before returning the newly decoded message.

This function is much more complicated than what you have had to build until now, and there are multiple ways you could solve this, so you head to your manual to see what it says about decoding messages. The manual suggests you should read about:

Splitting a string into an array of characters using message.split(''). Read more here
Joining an array of characters back into a string using message.join(''). Read more here
Take a look at the hints if you need more help

Your decoder is automatic, so no need to call this function
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

function decodeMessage(message){
  message = message.split("");
  for(var i = 0; i <message.length; i++){
    if(message[i] == "1"){
      message[i] = "i";
    }else if(message[i] === "4"){
      message[i] = "a";
    }else if(message[i] === "3"){
      message[i] = "e";
    }else if(message[i] === "0"){
      message[i] = "o";
    }else if(message[i] === "2"){
      message[i] = "u";
    }else if(message[i] === "5"){
      message[i] = "y";
    }
  }
  return message.join("");
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
