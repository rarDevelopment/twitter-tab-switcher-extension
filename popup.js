// document.getElementById('downloadPng').addEventListener("click", async () => {
//     getTab().then(url => {
//         if (!url.toLowerCase().includes('webp')) {
//             alert("This is not a valid webp!");
//             return;
//         }
//         const pngUrl = url.toLowerCase().replace('webp', 'png');
//         chrome.tabs.create(
//             {
//                 active: true,
//                 url: pngUrl,
//             }
//         );
//     })
// });

// async function getTab() {
//     let queryOptions = { active: true, currentWindow: true };
//     let tabs = await chrome.tabs.query(queryOptions);
//     return tabs[0].url;
// }
