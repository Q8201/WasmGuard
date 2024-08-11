
const scriptUrlList = ["panel/dist/js/app.e7fdd2fd.js","panel/dist/js/chunk-vendors.aa3dac99.js","script/init.js","script/wrapper.js"];
scriptUrlList.forEach(url=>{
    const s = document.createElement('script');
    s.src = chrome.runtime.getURL(url);
    
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
})