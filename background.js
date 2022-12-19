
chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        url: "explorer.html"
    });
});
/*
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == "complete") {
      chrome.scripting.executeScript(tabId, {
        file: "index.js",
        runAt: "document_idle"
      });
    }
  });
  /*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "injectScript") {
      // Inject the script into the tab with id=sender.tab.id
      chrome.tabs.executeScript(sender.tab.id, {
        file: "index.js"
      });
    }
  });
*/
/*
chrome.runtime.onInstalled.addListener(installScript);

function installScript(details){
     console.log('Installing content script in all tabs.');
    let params = {
        currentWindow: true
    };
    chrome.tabs.query(params, function gotTabs(tabs){
        let contentjsFile = chrome.runtime.getManifest().content_scripts[0].js[0];
        for (let index = 0; index < tabs.length; index++) {
            chrome.tabs.executeScript(tabs[index].id, {
                file: contentjsFile
            },
            result => {
                const lastErr = chrome.runtime.lastError;
                if (lastErr) {
                    console.error('tab: ' + tabs[index].id + ' lastError: ' + JSON.stringify(lastErr));
                }
            })
        }
    });    
}*/