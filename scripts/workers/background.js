console.log('background.js');

var soUrlRegex = /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/;
chrome.tabs.onUpdated.addListener(
    async (tabId, changeInfo, tab) => {
        if(soUrlRegex.test(tab.url)) {
            const response = await chrome.tabs.sendMessage(tab.id, {data: "test"});
            console.log(response);
        }
    }
);