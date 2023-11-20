console.log('focusSo.js');

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ? `from content script ${sender.tab.url}` : "from extension");

        const leftSideBarElement = document.querySelector('#left-sidebar');
        if(leftSideBarElement) {
            leftSideBarElement.remove();
        }
        const rightSideBarElement = document.querySelector('#sidebar');
        if(rightSideBarElement) {
            rightSideBarElement.remove();
        }
        const mainContentElement = document.querySelector('#mainbar');
        if(mainContentElement) {
            mainContentElement.id = 'mainbar_1';
        }

        sendResponse({response: "processed"});
    }
);