chrome.runtime.onInstalled.addListener(() => {
  console.log('Chinling extension installed.');
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      alert('Chinling extension is active!');
    }
  });
});