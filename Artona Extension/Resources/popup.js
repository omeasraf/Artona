window.addEventListener('DOMContentLoaded', () => {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        
        var siteTag = "";

        browser.tabs.sendMessage(
            tabs[0].id, {
                from: 'popup',
                subject: 'sitename'
            },
            function (info) {
                if (info != undefined) {
                    siteTag = info["tag"];
                    document.querySelector("#sitename").innerHTML = info["siteName"];
                }
            });

        browser.tabs.sendMessage(
            tabs[0].id, {
                from: 'popup',
                subject: 'getContent'
            },
            function (info) {
                if (info != undefined) {
                    document.querySelector("#content").innerHTML = info.html;
                    eval(info.js);
                }
            });

        browser.tabs.sendMessage(
            tabs[0].id, {
                from: 'popup',
                subject: 'getAllTags'
            },
            function (tags) {
                console.log(tags);
                if (tags != undefined) {
                    alert(tags)
                    browser.storage.sync.get(tags, function (items) {
                        var length = tags.length;
                        for (var i = 0; i < length; i++) {
                            var tagName = tags[i];
                            var storedItem = items[tagName];
                            if (storedItem != undefined) {
                                document.getElementById(tagName.replace(siteTag, '')).value = storedItem.string;
                            }
                        }
                    });
                }
            });



    });


});
