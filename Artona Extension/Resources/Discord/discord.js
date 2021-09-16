setInterval(setupModifiers, 1000)
setInterval(applyTheme, 3000)

function applyTheme() {
    const names = ["backgroundColor", "titleBarColor", "titleIconColor", "textBoxColor", "textIconColor"];

    const length = names.length;

    for (var i = 0; i < length; i++) {
        getData(names[i]);
    }

}

function setupModifiers() {
    setupMembersArea();
    getData();
    var giftButton = document.querySelector('[aria-label="Send a gift"]');
    var stickersButton = document.querySelector('[aria-label="Open sticker picker"]')
    var gifButton = document.querySelector('[aria-label="Open GIF picker"]')

    if (giftButton != null) {
        giftButton.remove();
    }
    if (stickersButton != null) {
        stickersButton.remove();
    }
    if (gifButton != null) {
        gifButton.remove()
    }
    setupOpenDiscordButton();
    if (document.querySelector(".sidebar-2K8pFh") != null) {
        if (document.getElementById("menuButton") == null) {
            var topBar = document.querySelector(".children-19S4PO");
            var sidebar = document.querySelector(".sidebar-2K8pFh");
            var memberSidebar = document.querySelector(".hiddenMembers-2dcs_q");

            sidebar.classList.add("close-menu")
            var sidebarMenu = document.querySelector('[aria-label="Servers sidebar"]');
            if (sidebarMenu != null) {
                sidebarMenu.classList.add("setZero")
            }
            if (topBar != null) {

                topBar.innerHTML = '<button id="menuButton" class="toggle-menu" href="#"><i></i><i></i><i></i></button> ' + topBar.innerHTML;
                document.getElementById("menuButton").addEventListener("click", toggleMenu);
            }
            if (memberSidebar != null) {
                memberSidebar.classList.toggle('close-menu');
            }
        }
    }

}


function setupMembersArea() {
    if (window.location.pathname != "/channels/@me") {
        var contentArea = document.querySelector(".container-1r6BKw.themed-ANHk51");
        var toolbar = document.querySelector("div.toolbar-1t6TWx")

        if (toolbar == null && contentArea != null) {
            contentArea.innerHTML = contentArea.innerHTML + '<div class="toolbar-1t6TWx" aria-label="Member List Button"><div class="iconWrapper-2OrFZ1 clickable-3rdHwn" role="button" tabindex="0"><svg x="0" y="0" class="icon-22AiRD" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"></path><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"></path><path fill="currentColor" d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"></path><path fill="currentColor" d="M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"></path></svg></div></div>';


            var button = document.querySelector('[aria-label="Member List Button"]');
            button.onclick = function () {
                var sidebar = document.querySelector(".hiddenMembers-2dcs_q")
                if (sidebar != null) {
                    sidebar.classList.toggle('close-menu');
                }

            };
        }
    } else {
        var btn = document.querySelector('[aria-label="Member List Button"]');
        if (btn != null) {
            btn.remove();
        }
    }
}

function toggleMenu() {

    var sidebar = document.querySelector(".sidebar-2K8pFh")
    document.getElementById("menuButton").classList.toggle("active")
    sidebar.classList.toggle('close-menu');
    var sidebarMenu = document.querySelector('[aria-label="Servers sidebar"]');
    var toolbar = document.querySelector("div.toolbar-1t6TWx")
    var memberSidebar = document.querySelector(".hiddenMembers-2dcs_q")
    if (toolbar != null) {
        toolbar.classList.toggle("setZero")
    }
    if (sidebarMenu != null) {
        sidebarMenu.classList.toggle("setZero")

    }
    if (memberSidebar != null) {
        memberSidebar.classList.add("close-menu")
    }
}




function setupOpenDiscordButton() {
    var appstoreBtn = document.querySelector("div.ctaContainer-3vWJHU > a")
    var customBtn = document.getElementById("openDiscordBtn")
    if (appstoreBtn != null && customBtn == null) {
        var btnContainer = document.querySelector("div.ctaContainer-3vWJHU")
        btnContainer.innerHTML = '<button class="button-195cDm buttonDark-1kG4vN buttonLarge-2j8B-n gtm-click-class-open-button openButton-McADyK" id="openDiscordBtn">Open Discord in your browser</button>' + btnContainer.innerHTML;

        document.getElementById("openDiscordBtn").addEventListener("click", function (event) {

            window.location = "https://discord.com/channels/@me"

        });
    }
}


browser.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
});

browser.runtime.onMessage.addListener((msg, sender, response) => {
    if ((msg.from === 'popup') && (msg.subject === 'sitename')) {
        response("Discord.com");
    } else if ((msg.from === 'popup') && (msg.subject === 'getContent')) {
        response({
            html: `
            <div>
                <input type="color" id="background" name="background" value="#171a21">
                <label for="background">Background</label>
            </div>

            <div>
                <input type="color" id="titleBar" name="titleBar" value="#171a21">
                <label for="titleBar">Title Bar</label>
            </div>

            <div>
                <input type="color" id="titleIconColor" name="titleIconColor" value="#72767d">
                <label for="titleIconColor">Icon Color</label>
            </div>
            <div>
                <input type="color" id="textBoxColor" name="textBoxColor" value="#0b131d">
                <label for="textBoxColor">Text Field</label>
            </div>
            <div>
                <input type="color" id="textIconColor" name="textIconColor" value="#b9bbbe">
                <label for="textIconColor">Icon Color</label>
            </div>
        `,
            js: `
            var backgroundColor = document.getElementById("background");
            var titleBar = document.getElementById("titleBar");
            var titleIconColor = document.getElementById("titleIconColor");
            var textBoxColor = document.getElementById("textBoxColor");
            var textIconColor = document.getElementById("textIconColor");
            
            // I know I most likely should be using a for loop but this will
            // do for now, will refactor later.
            
            backgroundColor.addEventListener("change", (e) => {
                chrome.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'discord',
                        subject: 'backgroundColor',
                        string: document.getElementById("background").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            titleBar.addEventListener("change", (e) => {
                chrome.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'discord',
                        subject: 'titleBarColor',
                        string: document.getElementById("titleBar").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            titleIconColor.addEventListener("change", (e) => {
                chrome.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'discord',
                        subject: 'titleIconColor',
                        string: document.getElementById("titleIconColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            textBoxColor.addEventListener("change", (e) => {
                chrome.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'discord',
                        subject: 'textBoxColor',
                        string: document.getElementById("textBoxColor").value
                    },
                    function (info) {
                        console.log(info);
                    });
            });
            textIconColor.addEventListener("change", (e) => {
                chrome.tabs.sendMessage(
                    tabs[0].id, {
                        from: 'discord',
                        subject: 'textIconColor',
                        string: document.getElementById("textIconColor").value
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
    if ((msg.from === 'discord') && (msg.subject === 'backgroundColor')) {
        document.querySelector(".scrollerContent-WzeG7R.content-3YMskv").style.backgroundColor = msg.string;
        document.querySelector('.form-2fGMdU').style.backgroundColor = msg.string;
        setData({
            "backgroundColor": msg
        });
    } else if ((msg.from === 'discord') && (msg.subject === 'titleBarColor')) {

        document.querySelector(".title-3qD0b-.container-1r6BKw.themed-ANHk51").style.backgroundColor = msg.string;
        setData({
            "titleBarColor": msg
        });
    } else if ((msg.from === 'discord') && (msg.subject === 'titleIconColor')) {

        document.querySelector(".toggle-menu i").style.backgroundColor = msg.string;
        document.querySelector(".toggle-menu i:nth-child(2)").style.backgroundColor = msg.string;
        document.querySelector(".toggle-menu i:nth-child(3)").style.backgroundColor = msg.string;

        document.querySelector(".icon-22AiRD").style.color = msg.string;
        document.querySelector(".clickable-3rdHwn .icon-22AiRD").style.color = msg.string;

        setData({
            "titleIconColor": msg
        });
    } else if ((msg.from === 'discord') && (msg.subject === 'textBoxColor')) {
        document.querySelector(".scrollableContainer-2NUZem").style.backgroundColor = msg.string;
        setData({
            "textBoxColor": msg
        });
    } else if ((msg.from === 'discord') && (msg.subject === 'textIconColor')) {

        document.querySelector(".attachButtonPlus-jWVFah").style.fill = msg.string;
        setData({
            "textIconColor": msg
        });
    }
}

function setData(data) {
    chrome.storage.sync.set(data);
}

function getData(name) {
    chrome.storage.sync.get(name, function (items) {
        applyData(items[name]);
    });
}