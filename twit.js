const timeToWait = 2000;

window.addEventListener('load', function (event) {
    setTimeout(() => {
        clickFollowingTab();
    }, timeToWait);
});


function clickFollowingTab() {
    //if (window.location.href.endsWith('/home')) {
        Array.prototype.slice.call(document.getElementsByTagName('span')).filter(s => s.innerHTML === 'Following')[0].click();
    //}
}
