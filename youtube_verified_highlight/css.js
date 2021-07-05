function updateCreators() {
//   document.getElementById("author-comment-badge"); // This is for all youtubers comment

  // --ytd-author-comment-badge-background-color // this is the existing style name for background color
  //
}
// ytd-author-comment-badge-renderer <<< search for this custom span
// remove the style=""

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: updateCreators,
  });
});



<ytd-author-comment-badge-renderer class="style-scope ytd-comment-renderer" creator="" style="--yt-basic-background-color:rgba(136,136,136,1); --yt-basic-foreground-title-color:rgba(255,255,255,1); --ytd-author-comment-badge-background-color:#888888; --ytd-author-comment-badge-name-color:#ffffff; --ytd-author-comment-badge-icon-color:#ffffff;"><!--css-build:shady--><a id="name" class="yt-simple-endpoint style-scope ytd-author-comment-badge-renderer" href="/channel/UCGy7SkBjcIAgTiwkXEtPnYg">
  <ytd-channel-name id="channel-name" class="style-scope ytd-author-comment-badge-renderer"><!--css-build:shady--><div id="container" class="style-scope ytd-channel-name">
  <div id="text-container" class="style-scope ytd-channel-name">
    <yt-formatted-string id="text" title="" class="style-scope ytd-channel-name" ellipsis-truncate="" aria-label="Andrei Jikh, verified user">Andrei Jikh</yt-formatted-string>
  </div>
  <tp-yt-paper-tooltip fit-to-visible-bounds="" class="style-scope ytd-channel-name" role="tooltip" tabindex="-1" style="inset: -63px auto auto 37.6328px;"><!--css-build:shady--><div id="tooltip" class="style-scope tp-yt-paper-tooltip hidden">
  
    Andrei Jikh
  
</div>
</tp-yt-paper-tooltip>
</div>
<ytd-badge-supported-renderer class="style-scope ytd-channel-name" disable-upgrade="" hidden="">
</ytd-badge-supported-renderer>
</ytd-channel-name>
</a>
<yt-icon id="icon" size="12" class="style-scope ytd-author-comment-badge-renderer"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z" class="style-scope yt-icon"></path></g></svg><!--css-build:shady--></yt-icon>
</ytd-author-comment-badge-renderer>