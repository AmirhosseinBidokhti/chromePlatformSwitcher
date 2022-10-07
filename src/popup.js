function setPlatform(platform) {
  chrome.runtime.sendMessage({
    type: "setPlatform",
    platform: platform,
  });
  window.close();
}

function resetPlatform() {
  chrome.runtime.sendMessage({
    type: "resetPlatform",
  });
  window.close();
}

function bindButtons() {
  document.getElementById("submit-platform").onclick = function () {
    setPlatform(document.getElementById("platform-custom").value);
  };

  document.getElementById("submit-platform-reset").onclick = resetPlatform;
}

function init() {
  bindButtons();
  populatePopupContent();
}

function populatePopupContent() {
  chrome.runtime.sendMessage(
    {
      type: "getPlatform",
    },
    (platform) => {
      populateCurrentPlatform(platform);
    }
  );
}

function populateCurrentPlatform(platform) {
  console.log(platform);
  document.getElementById("current-platform").innerText = platform;
}

init();
