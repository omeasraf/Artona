
browser.runtime.onMessage.addListener((msg, sender, response) => {
    var domain = window.location.hostname;
    if (!(new RegExp('youtube|twitter|discord')).test(domain)){
        if ((msg.from === 'popup') && (msg.subject === 'sitename')) {
            response(window.location.hostname);
        }
        else if ((msg.from === 'popup') && (msg.subject === 'getContent')) {
            response({
                html: `
                <div>
                    <button type="button" id="button">Request Site</button>
                </div>
            `,
                js: `
                var button = document.getElementById("button");
                button.addEventListener("click", (e) => {
                    var email = "mailto:seaters_member_0w@icloud.com?subject=Site%20Request%20(${window.location.hostname})&body=Domain%3A%20${window.location.hostname}%0D%0ALink%3A%20${window.location.href}%0D%0A%0D%0AMore%20info%3A%0D%0A%3CPlease%20type%20extra%20info%20here%3E";

                    browser.tabs.update({
                        url: email
                    });
                });
    `
            });
        }
    }
});
