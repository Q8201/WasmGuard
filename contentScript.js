
const scriptUrlList = ["panel/dist/js/app.820d20b1.js","panel/dist/js/chunk-vendors.d24a5da4.js","script/init.js","script/wrapper.js"];
scriptUrlList.forEach(url=>{
    const s = document.createElement('script');
    s.src = chrome.runtime.getURL(url);
    
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
})