
browser.runtime.onMessage.addListener((msg, sender, response) => {
    var domain = window.location.hostname;
    if (!(new RegExp('youtube|twitter|discord')).test(domain)){
        if ((msg.from === 'popup') && (msg.subject === 'sitename')) {
            response({
                "siteName": window.location.hostname,
                "tag": ""
            });
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


function deAMPURL(finalURL) {
    const finalSearchParams = new URLSearchParams();
    finalURL.searchParams.forEach((value, key) => {
      if (value != "amp" && key != "amp") {
        finalSearchParams.append(key, value);
      } else {
        console.debug(`Removing ${key}=${value} from final URL`);
      }
    });
    finalURL.search = finalSearchParams.toString();
    if (finalURL.hostname === "amp.abc.net.au") {
      finalURL.hostname = "www.abc.net.au";
      finalURL.pathname = finalURL.pathname.replace("article", "news");
    } else if (finalURL.pathname.startsWith("/amp/")) {
      console.debug("Removing amp/ prefix");
      finalURL.pathname = finalURL.pathname.substring(4);
    } else if (finalURL.pathname.endsWith("/amp/")) {
      console.debug("Removing amp/ postfix");
      finalURL.pathname = finalURL.pathname.substring(0, finalURL.pathname.length - "amp/".length);
    } else if (finalURL.pathname.endsWith(".amp")) {
      console.debug("Removing .amp postfix");
      finalURL.pathname = finalURL.pathname.substring(0, finalURL.pathname.length - ".amp".length);
    } else if (finalURL.hostname.startsWith("amp.") && finalURL.hostname.split(".").length > 2) {
      console.debug("Removing amp subdomain");
      finalURL.hostname = finalURL.hostname.substring("amp.".length);
    }
    return finalURL;
  }

  window.location.hostname = deAMPURL(window.location.hostname)