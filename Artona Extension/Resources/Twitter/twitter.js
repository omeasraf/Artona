setInterval(applyTheme, 1000)



const tagNames = ["twitter-backgroundColor", "twitter-accentColor", "twitter-headerBar", "twitter-headerButtonColor", "twitter-cardBackgroundColor", "twitter-cardExtrasTextColor", "twitter-cardUserName", "twitter-cardTextColor", "twitter-cardVerifiedIcon", "twitter-cardTagColors", "twitter-bottomBarColor", "twitter-bottomBarIconColor", "twitter-profileTextColor", "twitter-profileBackgroundColor"];

var siteTag = "twitter-";
function applyTheme() {

    const length = tagNames.length;

    browser.storage.sync.get(tagNames, function (items) {
        for (var i = 0; i < length; i++) {
            var tagName = tagNames[i];
            var item = items[tagName];
            if (item != undefined){
                applyData(item);
            }
        }
    });
    
   
}

browser.runtime.onMessage.addListener((msg, sender, response) => {
    if ((msg.from === 'popup') && (msg.subject === 'sitename')) {
        response({
            "siteName": window.location.hostname,
            "tag": "twitter-"
        });
    } else if ((msg.from === 'popup') && (msg.subject === 'getAllTags')) {
        response(tagNames);
    }
    else if ((msg.from === 'popup') && (msg.subject === 'getContent')) {
        response({
            html: `
            <div>
                <input type="color" id="backgroundColor" name="backgroundColor" value="#171a21">
                <label for="backgroundColor">Background Color</label>
            </div>
            <div>
                <input type="color" id="accentColor" name="accentColor" value="#000096">
                <label for="accentColor">Accent Color</label>
            </div>
            <hr>
            <div>
                <input type="color" id="headerBar" name="headerBar" value="#000000">
                <label for="headerBar">Header Bar</label>
            </div>

            <div>
                <input type="color" id="headerButtonColor" name="headerButtonColor" value="#000000">
                <label for="headerButtonColor">Button Color</label>
            </div>
            <hr>
            <div>
                <input type="color" id="cardBackgroundColor" name="cardBackgroundColor" value="#FFFFFF">
                <label for="cardBackgroundColor">Card Color</label>
            </div>
            <div>
                <input type="color" id="cardUserName" name="cardUserName" value="#FFFFFF">
                <label for="cardUserName">Username & Tag</label>
            </div>
            <div>
                <input type="color" id="cardTextColor" name="cardTextColor" value="#FFFFFF">
                <label for="cardTextColor">Text Color</label>
            </div>
            <div>
                <input type="color" id="cardVerifiedIcon" name="cardVerifiedIcon" value="#FFFFFF">
                <label for="cardVerifiedIcon">Verified Sign</label>
            </div>
            <div>
                <input type="color" id="cardTagColors" name="cardTagColors" value="#0000FF">
                <label for="cardTagColors">Tag & Hashtags</label>
            </div>
            <hr>
            <div>
                <input type="color" id="bottomBarColor" name="bottomBarColor" value="#000000">
                <label for="bottomBarColor">Bottom Bar</label>
            </div>
            <div>
                <input type="color" id="bottomBarIconColor" name="bottomBarIconColor" value="#FFFFFF">
                <label for="bottomBarIconColor">Icon Color</label>
            </div>
            <hr>
            <div>
                <input type="color" id="profileBackgroundColor" name="profileBackgroundColor" value="#000000">
                <label for="profileBackgroundColor">Profile Background</label>
            </div>
            <div>
                <input type="color" id="profileTextColor" name="profileTextColor" value="#FFFFFF">
                <label for="profileTextColor">Text Color</label>
            </div>
        
        `,
            js: `
            // TODO: Refactor
            var backgroundColor = document.getElementById("backgroundColor");
            var accentColor = document.getElementById("accentColor");
            var headerBar = document.getElementById("headerBar");
            var headerButtonColor = document.getElementById("headerButtonColor");
            var cardBackgroundColor = document.getElementById("cardBackgroundColor");
            var cardUserName = document.getElementById("cardUserName");
            var cardTextColor = document.getElementById("cardTextColor");
            var cardVerifiedIcon = document.getElementById("cardVerifiedIcon");
            var cardTagColors = document.getElementById("cardTagColors");
            var bottomBarColor = document.getElementById("bottomBarColor");
            var bottomBarIconColor = document.getElementById("bottomBarIconColor");
            var profileBackgroundColor = document.getElementById("profileBackgroundColor");
            var profileTextColor = document.getElementById("profileTextColor");


            // I know I most likely should be using a for loop but this will
            // do for now, will refactor later.

            backgroundColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'twitter',
                        subject: 'backgroundColor',
                        string: document.getElementById("backgroundColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            accentColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'twitter',
                        subject: 'accentColor',
                        string: document.getElementById("accentColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            headerBar.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'twitter',
                        subject: 'headerBar',
                        string: document.getElementById("headerBar").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            headerButtonColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'twitter',
                        subject: 'headerButtonColor',
                        string: document.getElementById("headerButtonColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            cardBackgroundColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'twitter',
                        subject: 'cardBackgroundColor',
                        string: document.getElementById("cardBackgroundColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            cardUserName.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'twitter',
                        subject: 'cardUserName',
                        string: document.getElementById("cardUserName").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            cardTextColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'twitter',
                        subject: 'cardTextColor',
                        string: document.getElementById("cardTextColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            cardVerifiedIcon.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'twitter',
                        subject: 'cardVerifiedIcon',
                        string: document.getElementById("cardVerifiedIcon").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            cardTagColors.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'twitter',
                        subject: 'cardTagColors',
                        string: document.getElementById("cardTagColors").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            bottomBarColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'twitter',
                        subject: 'bottomBarColor',
                        string: document.getElementById("bottomBarColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            bottomBarIconColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'twitter',
                        subject: 'bottomBarIconColor',
                        string: document.getElementById("bottomBarIconColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            profileBackgroundColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'twitter',
                        subject: 'profileBackgroundColor',
                        string: document.getElementById("profileBackgroundColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            profileTextColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'twitter',
                        subject: 'profileTextColor',
                        string: document.getElementById("profileTextColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
`
        });
    } else {
        applyData(msg)
    }
});


function applyData(msg) {
    if ((msg.from === 'twitter') && (msg.subject === 'backgroundColor')) {
        document.querySelector("html").style.backgroundColor = msg.string;
        document.querySelector("body").style.backgroundColor = msg.string;
        document.querySelector(".r-xp2224").style.backgroundColor = msg.string;
        document.querySelector(".r-bnwqim").style.backgroundColor = msg.string;
        document.querySelector("head > [name=theme-color]").content = msg.string;
        

        setData({
            "twitter-backgroundColor": msg
        });
    }
    else if ((msg.from === 'twitter') && (msg.subject === 'accentColor')) {
        var allElements = document.querySelectorAll('.r-l5o3uw');

        try{
            document.querySelector("svg.r-jwli3a.r-4qtqp9.r-yyyyoo.r-1qtyvf0.r-dnmrzs.r-bnwqim.r-1plcrui.r-lrvibr.r-o4n3w5").style.backgroundColor = msg.string;
        }
        catch(e){
            console.log("Unable to find element");
        }
   

        var length = allElements.length;
        for (var i = 0; i < length; i++) {
            allElements[i].style.backgroundColor = msg.string;
        }
        setData({
            "twitter-accentColor": msg
        });
    }
    else if ((msg.from === 'twitter') && (msg.subject === 'headerBar')) {

        var dark = document.querySelector(".css-1dbjc4n.r-kemksi.r-1igl3o0.r-rull8r.r-qklmqi.r-1iud8zs");
        if (dark != undefined) {
            dark.style.backgroundColor = msg.string;
        }

        var light = document.querySelector(".css-1dbjc4n.r-1awozwy.r-18u37iz.r-1iud8zs.r-1777fci.r-1jgb5lz.r-1j3t67a.r-13qz1uu");
        if (light != undefined) {
            light.style.backgroundColor = msg.string;
        }

        setData({
            "twitter-headerBar": msg
        });
    } else if ((msg.from === 'twitter') && (msg.subject === 'headerButtonColor')) {

        var dark = document.querySelector(".css-1dbjc4n.r-kemksi.r-1igl3o0.r-rull8r.r-qklmqi.r-1iud8zs svg");
        if (dark != undefined) {
            dark.style.color = msg.string;
            document.querySelector(".css-1dbjc4n.r-kemksi.r-1igl3o0.r-rull8r.r-qklmqi.r-1iud8zs h2").style.color = msg.string;
        }

        var light = document.querySelector(".css-1dbjc4n.r-1awozwy.r-18u37iz.r-1iud8zs.r-1777fci.r-1jgb5lz.r-1j3t67a.r-13qz1uu svg");
        if (light != undefined) {
            light.style.color = msg.string;
            document.querySelector(".css-1dbjc4n.r-1awozwy.r-18u37iz.r-1iud8zs.r-1777fci.r-1jgb5lz.r-1j3t67a.r-13qz1uu h2").style.color = msg.string;
        }
        setData({
            "twitter-headerButtonColor": msg
        });
    } else if ((msg.from === 'twitter') && (msg.subject === 'cardBackgroundColor')) {

        document.querySelector('section.css-1dbjc4n').style.backgroundColor = msg.string;
        setData({
            "twitter-cardBackgroundColor": msg
        });
    } else if ((msg.from === 'twitter') && (msg.subject === 'cardUserName')) {

        var allUsernames = document.querySelectorAll('a.css-4rbku5.css-18t94o4.css-1dbjc4n.r-1loqt21.r-1wbh5a2.r-dnmrzs.r-1ny4l3l span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0');
        var length = allUsernames.length;
        for (var i = 0; i < length; i++) {
            allUsernames[i].style.color = msg.string;
        }

        setData({
            "twitter-cardUserName": msg
        });
    } else if ((msg.from === 'twitter') && (msg.subject === 'cardTextColor')) {
        var allTexts = document.querySelectorAll('.r-bcqeeo.r-bnwqim.r-qvutc0');

        var length = allTexts.length;
        for (var i = 0; i < length; i++) {
            allTexts[i].style.color = msg.string;
        }
        setData({
            "twitter-cardTextColor": msg
        });
    } else if ((msg.from === 'twitter') && (msg.subject === 'cardVerifiedIcon')) {

        var allVerifiedSigns = document.querySelectorAll('.r-1fmj7o5.r-4qtqp9.r-yyyyoo.r-1xvli5t.r-9cviqr.r-ea8lvw.r-1o7j8w5.r-bnwqim.r-1plcrui.r-lrvibr');
        var length = allVerifiedSigns.length;
        for (var i = 0; i < length; i++) {
            allVerifiedSigns[i].style.color = msg.string;
        }

        setData({
            "twitter-cardVerifiedIcon": msg
        });
    } else if ((msg.from === 'twitter') && (msg.subject === 'cardTagColors')) {

        var allVerifiedSigns = document.querySelectorAll('.r-1n1174f');
        var length = allVerifiedSigns.length;
        for (var i = 0; i < length; i++) {
            allVerifiedSigns[i].style.color = msg.string;
        }

        setData({
            "twitter-cardTagColors": msg
        });
    }
    else if ((msg.from === 'twitter') && (msg.subject === 'bottomBarColor')) {

        document.querySelector(".css-1dbjc4n.r-kemksi.r-18u37iz.r-drjvcx.r-ripixn.r-13qz1uu").style.backgroundColor = msg.string;

        setData({
            "twitter-bottomBarColor": msg
        });
    }
    else if ((msg.from === 'twitter') && (msg.subject === 'bottomBarIconColor')) {

        var allIcons = document.querySelectorAll('.r-1fmj7o5.r-4qtqp9.r-yyyyoo.r-lwhw9o.r-dnmrzs.r-bnwqim.r-1plcrui.r-lrvibr');
        var length = allIcons.length;
        for (var i = 0; i < length; i++) {
            allIcons[i].style.color = msg.string;
        }

        setData({
            "twitter-bottomBarIconColor": msg
        });
    }
    else if ((msg.from === 'twitter') && (msg.subject === 'profileBackgroundColor')) {

        document.querySelector(".css-1dbjc4n.r-ku1wi2.r-1j3t67a.r-1b3ntt7").style.backgroundColor = msg.string;
        
        var extras = document.querySelector(".css-1dbjc4n.r-1awozwy.r-1ro0kt6.r-18u37iz.r-16y2uox.r-1pi2tsx.r-1ny4l3l")
        if (extras != undefined){
            extras.style.backgroundColor = msg.string;
        }

        setData({
            "twitter-profileBackgroundColor": msg
        });
    }
    else if ((msg.from === 'twitter') && (msg.subject === 'profileTextColor')) {

      var allTexts =   document.querySelector(".css-1dbjc4n.r-ku1wi2.r-1j3t67a.r-1b3ntt7").querySelectorAll(".css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0")
        
        var length = allTexts.length;
        for (var i = 0; i < length; i++) {
            allTexts[i].style.color = msg.string;
        }

        setData({
            "twitter-profileTextColor": msg
        });
    }



}

function setData(data) {
    browser.storage.sync.set(data);
}
