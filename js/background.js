chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            hostEquals: 'github.com',
            schemes: ['https'],
            urlMatches: '/(.+)/(.+)/issues|pull/(\\d+)'
          },
          css: ['span.js-issue-title', 'span.gh-header-number']
        })
      ],
      actions: [ new chrome.declarativeContent.ShowPageAction() ]
    }]);
  });
});

chrome.pageAction.onClicked.addListener(function(tab){
  chrome.tabs.executeScript(null, { "file": "js/content.js"});
});

