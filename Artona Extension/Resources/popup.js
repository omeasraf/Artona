window.addEventListener('DOMContentLoaded', () => {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {

        browser.tabs.sendMessage(
            tabs[0].id, {
                from: 'popup',
                subject: 'sitename'
            },
            function (info) {
                console.log(info);
                if (info != undefined){
                    document.querySelector("#sitename").innerHTML = info;
                }
            });
        
        browser.tabs.sendMessage(
            tabs[0].id, {
                from: 'popup',
                subject: 'getContent'
            },
            function (info) {
                console.log(info);
                if (info != undefined){
                    document.querySelector("#content").innerHTML = info.html;
                    eval(info.js);
                }
            });
    
    });
    

});


