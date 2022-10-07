chrome.runtime.sendMessage({ type: "getPlatform" }, function (response) {
  var code =
    "if(navigator.__defineGetter__){navigator.__defineGetter__('platform',function(){return " +
    JSON.stringify(response) +
    ";});}";
  var textNode = document.createTextNode(code);

  var script = document.createElement("script");

  script.appendChild(textNode);
  script.remove();
  var parentNode = document.head || document.documentElement;
  parentNode.appendChild(script);
  parentNode.removeChild(script);
});
