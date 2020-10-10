// On load, checks hash for url to load
function onload() {
  var browserFrame = document.getElementById("browser");
  // Loads info page by default
  if (location.hash === "") {
    browserFrame.src = "IFrame-info.html";
  } else {
    var url = location.hash;
    url = url.substr(1);
    browserFrame.src = url;
  }
}

// Checks if enter key is pressed on text field
function setBrowserFrameSourceCheck(key){
  if(key.keyCode === 13){
    key.preventDefault();
    var browserFrame = document.getElementById("browser");
    if(document.getElementById("txtUrl").value === "style.css"){
    } else if (document.getElementById("txtUrl").value === "script.js") {
    } else if (document.getElementById("txtUrl").value === ".git") {
    } else {
      setBrowserFrameSource();
    }
  }
}

// Changes source of IFrame
function setBrowserFrameSource(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = document.getElementById("txtUrl").value;
  if (document.getElementById("txtUrl").value === "") {
    browserFrame.src = "blank.html";
  }
}

// Makes bookmarks direct to specific sites
function setBrowserFrameSourceToBookmark0(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "https://www.baidu.com/";
}
// Makes bookmarks direct to specific sites
function setBrowserFrameSourceToBookmark10(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "http://www.aidlearning.net/";
}
// Makes bookmarks direct to specific sites
function setBrowserFrameSourceToBookmark1(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "https://www.bing.com//";
}

function setBrowserFrameSourceToBookmark2(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "https://narwhale.io";
}

function setBrowserFrameSourceToBookmark3(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "https://skribbl.io/";
}

function setBrowserFrameSourceToBookmark4(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "https://slither.io";
}

function setBrowserFrameSourceToBookmark5(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "https://play.cprewritten.net";
}

function setBrowserFrameSourceToBookmark6(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "https://secret.ethanl.ee/";
}

function setBrowserFrameSourceToBookmark7(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "http://birrell.org/andrew/minesweeper/";
}

function setBrowserFrameSourceToBookmark8(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "https://ytmp3.cc";
}

function setBrowserFrameSourceToBookmark9(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "IFrame-info.html";
}

// Back and forth buttons change history
function goBack() {
  window.history.back();
}

function goForward() {
  window.history.forward();
}
