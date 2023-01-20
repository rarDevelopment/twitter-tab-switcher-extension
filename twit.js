const timeToWait = 2000;

window.addEventListener('focus', function (event) {
    setTimeout(() => {
        clickFollowingTab();
    }, timeToWait);
});

window.addEventListener('load', function (event) {
    setTimeout(() => {
        clickFollowingTab();
    }, timeToWait);
});


function clickFollowingTab() {
    Array.prototype.slice.call(document.getElementsByTagName('span')).filter(s => s.innerHTML === 'Following')[0].click();
}
