setInterval(applyTheme, 1000)

var didSetStorage = false;

const tagNames = ["backgroundColor", "headerBar", "headerIconColor", "selectedChipColor", "selectedChipTextColor", "unselectedChipColor", "unselectedChipTextColor", "chipBarColor", "thumnailBottomColor", "thumnailBottomTextColor", "bottomBarSelectedIcon", "bottomBarUnselectedIcon", "bottomBarTextColor", "bottomBarColor"];
const duplicateHell = ["youtube-backgroundColor", "youtube-headerBar", "youtube-headerIconColor", "youtube-selectedChipColor", "youtube-selectedChipTextColor", "youtube-unselectedChipColor", "youtube-unselectedChipTextColor", "youtube-chipBarColor", "youtube-thumnailBottomColor", "youtube-thumnailBottomTextColor", "youtube-bottomBarSelectedIcon", "youtube-bottomBarUnselectedIcon", "youtube-bottomBarTextColor", "youtube-bottomBarColor"];

function applyTheme() {

    const length = tagNames.length;

    for (var i = 0; i < length; i++) {
        getData("youtube-" + tagNames[i]);
    }

}

browser.runtime.onMessage.addListener((msg, sender, response) => {
    if ((msg.from === 'popup') && (msg.subject === 'sitename')) {
        response({
            "siteName": window.location.hostname,
            "tag": "youtube-"
        });
    } 
    else if ((msg.from === 'popup') && (msg.subject === 'getAllTags')) {
        response(duplicateHell);
    }
    else if ((msg.from === 'popup') && (msg.subject === 'getContent')) {


        // TODO: Make the color changes reflect in the ui
        response({
            html: `
            <div>
                <input type="color" id="backgroundColor" name="backgroundColor" value="#171a21">
                <label for="backgroundColor">Background</label>
            </div>
            <hr>
            <div>
                <input type="color" id="headerBar" name="headerBar" value="#FFFFFF">
                <label for="headerBar">Header Bar</label>
            </div>

            <div>
                <input type="color" id="headerIconColor" name="headerIconColor" value="#72767d">
                <label for="headerIconColor">Icon Color</label>
            </div>
            <hr>
            <div>
                <input type="color" id="selectedChipColor" name="selectedChipColor" value="#606060">
                <label for="selectedChipColor">Selected Chip</label>
            </div>
            <div>
                <input type="color" id="selectedChipText" name="selectedChipText" value="#FFFFFF">
                <label for="selectedChipText">Selected Chip Text</label>
            </div>
            <hr>
            <div>
                <input type="color" id="unselectedChipColor" name="unselectedChipColor" value="#FFFFFF">
                <label for="unselectedChipColor">Chip Color</label>
            </div>
            <div>
                <input type="color" id="unselectedChipTextColor" name="unselectedChipTextColor" value="#FFFFFF">
                <label for="unselectedChipTextColor">Chip Text Color</label>
            </div>
            <hr>
            <div>
                <input type="color" id="chipBarColor" name="chipBarColor" value="#FFFFFF">
                <label for="chipBarColor">Chip Bar</label>
            </div>
            <hr>
            <div>
                <input type="color" id="thumnailBottomColor" name="thumnailBottomColor" value="#FFFFFF">
                <label for="thumnailBottomColor">Thumbnail Background</label>
            </div>
            <div>
                <input type="color" id="thumnailBottomTextColor" name="thumnailBottomTextColor" value="#FFFFFF">
                <label for="thumnailBottomTextColor">Thumbnail Text</label>
            </div>
            <hr>
            <div>
                <input type="color" id="bottomBarSelectedIcon" name="bottomBarSelectedIcon" value="#FFFFFF">
                <label for="bottomBarSelectedIcon">Bar Selected Icon</label>
            </div>
            <div>
                <input type="color" id="bottomBarUnselectedIcon" name="bottomBarUnselectedIcon" value="#FFFFFF">
                <label for="bottomBarUnselectedIcon">Unselected Icon</label>
            </div>
            <div>
                <input type="color" id="bottomBarTextColor" name="bottomBarTextColor" value="#000000">
                <label for="bottomBarTextColor">Text Color</label>
            </div>
            </div>
            <div>
                <input type="color" id="bottomBarColor" name="bottomBarColor" value="#FFFFFF">
                <label for="bottomBarColor">Bottom Bar Color</label>
            </div>
        `,
            js: `
            // TODO: Refactor
            var backgroundColor = document.getElementById("backgroundColor");
            var headerBar = document.getElementById("headerBar");
            var headerIconColor = document.getElementById("headerIconColor");
            var selectedChipColor = document.getElementById("selectedChipColor");
            var selectedChipTextColor = document.getElementById("selectedChipText");
            var unselectedChipColor = document.getElementById("unselectedChipColor");
            var unselectedChipTextColor = document.getElementById("unselectedChipTextColor");
            var chipBarColor = document.getElementById("chipBarColor");
            var thumnailBottomColor = document.getElementById("thumnailBottomColor");
            var thumnailBottomTextColor = document.getElementById("thumnailBottomTextColor");
            var bottomBarSelectedIcon = document.getElementById("bottomBarSelectedIcon");
            var bottomBarUnselectedIcon = document.getElementById("bottomBarUnselectedIcon");
            var bottomBarTextColor = document.getElementById("bottomBarTextColor");
            var bottomBarColor = document.getElementById("bottomBarColor");


            // I know I most likely should be using a for loop but this will
            // do for now, will refactor later.

            backgroundColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'youtube',
                        subject: 'backgroundColor',
                        string: document.getElementById("backgroundColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            headerBar.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'youtube',
                        subject: 'headerBar',
                        string: document.getElementById("headerBar").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            headerIconColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'youtube',
                        subject: 'headerIconColor',
                        string: document.getElementById("headerIconColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            selectedChipColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'youtube',
                        subject: 'selectedChipColor',
                        string: document.getElementById("selectedChipColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            selectedChipTextColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'youtube',
                        subject: 'selectedChipText',
                        string: document.getElementById("selectedChipText").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            unselectedChipColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'youtube',
                        subject: 'unselectedChipColor',
                        string: document.getElementById("unselectedChipColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            unselectedChipTextColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'youtube',
                        subject: 'unselectedChipTextColor',
                        string: document.getElementById("unselectedChipTextColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            chipBarColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'youtube',
                        subject: 'chipBarColor',
                        string: document.getElementById("chipBarColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            thumnailBottomColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'youtube',
                        subject: 'thumnailBottomColor',
                        string: document.getElementById("thumnailBottomColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            thumnailBottomTextColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'youtube',
                        subject: 'thumnailBottomTextColor',
                        string: document.getElementById("thumnailBottomTextColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            bottomBarSelectedIcon.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'youtube',
                        subject: 'bottomBarSelectedIcon',
                        string: document.getElementById("bottomBarSelectedIcon").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            bottomBarUnselectedIcon.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'youtube',
                        subject: 'bottomBarUnselectedIcon',
                        string: document.getElementById("bottomBarUnselectedIcon").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            bottomBarTextColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'youtube',
                        subject: 'bottomBarTextColor',
                        string: document.getElementById("bottomBarTextColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            bottomBarColor.addEventListener("change", (e) => {
                browser.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'youtube',
                        subject: 'bottomBarColor',
                        string: document.getElementById("bottomBarColor").value
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
    if ((msg.from === 'youtube') && (msg.subject === 'backgroundColor')) {
        document.querySelector("html").style.backgroundColor = msg.string;
        document.querySelector("body").style.backgroundColor = msg.string;
        setData({
            "youtube-backgroundColor": msg
        });
    } else if ((msg.from === 'youtube') && (msg.subject === 'headerBar')) {

        document.querySelector("#header-bar").style.backgroundColor = msg.string;
        setData({
            "youtube-headerBar": msg
        });
    } else if ((msg.from === 'youtube') && (msg.subject === 'headerIconColor')) {

        var allIcons = document.querySelectorAll("#header-bar c3-icon");
        var length = allIcons.length;
        for (var i = 0; i < length; i++) {
            allIcons[i].style.fill = msg.string;
        }
        setData({
            "youtube-headerIconColor": msg
        });
    } else if ((msg.from === 'youtube') && (msg.subject === 'selectedChipColor')) {

        document.querySelector('[chip-style="STYLE_DEFAULT"].selected .chip-container, [chip-style="STYLE_HOME_FILTER"].selected .chip-container').style.backgroundColor = msg.string;
        setData({
            "youtube-selectedChipColor": msg
        });
    } else if ((msg.from === 'youtube') && (msg.subject === 'selectedChipText')) {

        document.querySelector('[chip-style="STYLE_DEFAULT"].selected .chip-container, [chip-style="STYLE_HOME_FILTER"].selected .chip-container').style.color = msg.string;
        setData({
            "youtube-selectedChipText": msg
        });
    } else if ((msg.from === 'youtube') && (msg.subject === 'unselectedChipColor')) {

        var allChips = document.querySelectorAll('[aria-selected=false] .chip-container, [chip-style="STYLE_REFRESH_TO_NOVEL_CHIP"] .chip-container');
        var length = allChips.length;
        for (var i = 0; i < length; i++) {
            allChips[i].style.backgroundColor = msg.string;
        }

        setData({
            "youtube-unselectedChipColor": msg
        });
    } else if ((msg.from === 'youtube') && (msg.subject === 'unselectedChipTextColor')) {

        var allChips = document.querySelectorAll('[aria-selected=false] .chip-container, [chip-style="STYLE_REFRESH_TO_NOVEL_CHIP"] .chip-container');
        var length = allChips.length;
        for (var i = 0; i < length; i++) {
            allChips[i].style.color = msg.string;
        }
        setData({
            "youtube-unselectedChipTextColor": msg
        });
    } else if ((msg.from === 'youtube') && (msg.subject === 'chipBarColor')) {

        document.querySelector('.chip-bar').style.backgroundColor = msg.string;
        setData({
            "youtube-chipBarColor": msg
        });
    } else if ((msg.from === 'youtube') && (msg.subject === 'thumnailBottomColor')) {

        var allItems = document.querySelectorAll('ytm-rich-item-renderer');
        var length = allItems.length;
        for (var i = 0; i < length; i++) {
            allItems[i].style.backgroundColor = msg.string;
        }
        setData({
            "youtube-thumnailBottomColor": msg
        });
    } else if ((msg.from === 'youtube') && (msg.subject === 'thumnailBottomTextColor')) {

        var allItems = document.querySelectorAll('ytm-rich-item-renderer');
        var length = allItems.length;
        for (var i = 0; i < length; i++) {
            allItems[i].style.color = msg.string;
        }
        setData({
            "youtube-thumnailBottomTextColor": msg
        });
    } else if ((msg.from === 'youtube') && (msg.subject === 'bottomBarSelectedIcon')) {

        document.querySelector('[icon-state-filled]').style.fill = msg.string;
        setData({
            "youtube-bottomBarSelectedIcon": msg
        });
    } else if ((msg.from === 'youtube') && (msg.subject === 'bottomBarUnselectedIcon')) {

        var allIcons = document.querySelectorAll('[aria-selected=false] c3-icon');
        var length = allIcons.length;
        for (var i = 0; i < length; i++) {
            allIcons[i].style.fill = msg.string;
        }
        setData({
            "youtube-bottomBarUnselectedIcon": msg
        });
    } else if ((msg.from === 'youtube') && (msg.subject === 'bottomBarTextColor')) {

        var allIcons = document.querySelectorAll('.pivot-bar-item-title');
        var length = allIcons.length;
        for (var i = 0; i < length; i++) {
            allIcons[i].style.color = msg.string;
        }
        setData({
            "youtube-bottomBarTextColor": msg
        });
    } else if ((msg.from === 'youtube') && (msg.subject === 'bottomBarColor')) {

        document.querySelector('ytm-pivot-bar-renderer').style.backgroundColor = msg.string;
        setData({
            "youtube-bottomBarColor": msg
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
