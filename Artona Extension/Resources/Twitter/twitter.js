setInterval(applyTheme, 1000)

var didSetStorage = false;

const tagNames = ["background", "headerBar", "headerButtonColor", "cardBackgroundColor", "cardExtrasTextColor", "cardUserName", "cardTextColor", "cardVerifiedIcon"];

function applyTheme() {

    const length = tagNames.length;

    for (var i = 0; i < length; i++) {
        getData("twitter-" + tagNames[i]);
    }
}

browser.runtime.onMessage.addListener((msg, sender, response) => {
    if ((msg.from === 'popup') && (msg.subject === 'sitename')) {
        response("Twitter.com");
    } else if ((msg.from === 'popup') && (msg.subject === 'getContent')) {


        // TODO: Make the color changes reflect in the ui
        response({
            html: `
            <div>
                <input type="color" id="background" name="background" value="#171a21">
                <label for="background">Background</label>
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
                <input type="color" id="cardExtrasTextColor" name="cardExtrasTextColor" value="#FFFFFF">
                <label for="cardExtrasTextColor">Extra Text Color</label>
            </div>

        `,
            js: `
            // TODO: Refactor
            var backgroundColor = document.getElementById("background");
            var headerBar = document.getElementById("headerBar");
            var headerButtonColor = document.getElementById("headerButtonColor");
            var cardBackgroundColor = document.getElementById("cardBackgroundColor");
            var cardExtrasTextColor = document.getElementById("cardExtrasTextColor");
            var cardUserName = document.getElementById("cardUserName");
            var cardTextColor = document.getElementById("cardTextColor");
            var cardVerifiedIcon = document.getElementById("cardVerifiedIcon");


            // I know I most likely should be using a for loop but this will
            // do for now, will refactor later.

            backgroundColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'twitter',
                        subject: 'backgroundColor',
                        string: document.getElementById("background").value
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
            cardExtrasTextColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'twitter',
                        subject: 'cardExtrasTextColor',
                        string: document.getElementById("cardExtrasTextColor").value
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
        setData({
            "twitter-backgroundColor": msg
        });
    } else if ((msg.from === 'twitter') && (msg.subject === 'headerBar')) {

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
    } else if ((msg.from === 'twitter') && (msg.subject === 'cardExtrasTextColor')) {

        var allExtraTexts = document.querySelectorAll(".r-14j79pv");
        var length = allExtraTexts.length;
        for (var i = 0; i < length; i++) {
            allExtraTexts[i].style.color = msg.string;
        }


        setData({
            "twitter-cardTextColor": msg
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

        document.querySelector(".css-901oao").style.color = msg.string;
        setData({
            "twitter-cardTextColor": msg
        });
    } else if ((msg.from === 'twitter') && (msg.subject === 'cardVerifiedIcon')) {

        var allVerifiedSigns = document.querySelectorAll('.r-1cvl2hr');
        var length = allVerifiedSigns.length;
        for (var i = 0; i < length; i++) {
            allVerifiedSigns[i].style.color = msg.string;
        }
        
        setData({
            "twitter-cardVerifiedIcon": msg
        });
    } 

}

function setData(data) {
    browser.storage.sync.set(data);
}

function getData(name) {
    browser.storage.sync.get(name, function (items) {
        applyData(items[name]);
    });
}
