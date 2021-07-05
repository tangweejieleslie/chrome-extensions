function updateCreators() {
  document.getElementById("author-comment-badge").; // This is for all youtubers comment
  // --ytd-author-comment-badge-background-color // this is the existing style name for background color
  //
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: updateCreators,
  });
});
