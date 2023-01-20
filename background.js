// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     var activeTab = tabs[0];
//     if (activeTab.url.includes("twitter.com")) {
//         var scriptNode = document.createElement('script');
//         scriptNode.textContent = `Array.prototype.slice.call(document.getElementsByTagName('span')).filter(s => s.innerHTML === 'Following')[0].click();`;
//         document.body.appendChild(scriptNode);
//     }
// });
