let DEFAULT_PLATFORM = navigator.platform;
let CUSTOM_PLATFORM = DEFAULT_PLATFORM;
function init() {
  bindOnMessage();
}

function bindOnMessage() {
  chrome.runtime.onMessage.addListener(function (msg, sender, callback) {
    if (msg.type === "getPlatform") {
      callback(CUSTOM_PLATFORM);
    } else if (msg.type === "setPlatform") {
      gotMessagesetPlatform(msg.platform);
    } else if (msg.type === "resetPlatform") {
      gotMessageResetPlatform();
    }
  });
}

function gotMessagesetPlatform(platform) {
  if (platform === "") {
    CUSTOM_PLATFORM = DEFAULT_PLATFORM;
  } else if (isValidplatform(platform)) {
    CUSTOM_PLATFORM = platform;
  } else {
    throw "Invalid platform";
  }
}

function gotMessageResetPlatform() {
  CUSTOM_PLATFORM = DEFAULT_PLATFORM;
}

function isValidplatform(platform) {
  return isString(platform) && !platform.match("[\n\r]") ? true : false;
}

function isString(input) {
  return input !== undefined && input !== null && typeof input === "string";
}

init();
