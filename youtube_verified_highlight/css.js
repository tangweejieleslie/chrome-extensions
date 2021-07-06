function UpdateBg(){
    var r = document.querySelector(':root');
    var color = document.getElementById("bg113344")
    print(color)
    r.style.setProperty('--creator-bg-color', color);
}

function UpdateName(){
    var r = document.querySelector(':root');
    var color = document.getElementById("name113344")
    print(color)
    r.style.setProperty('--creator-name-color', color);
}

function UpdateAll(){
    UpdateBg()
    UpdateName()
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: updateCreators,
  });
});

