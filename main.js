// ==UserScript==
// @name        Remove ads
// @namespace   ...
// @description This is a small client script that removes the ads from the pages.
// @include     *
// @version     1
// @grant       none
// ==/UserScript==

// Yahoo! Mail
if (window.location.host.indexOf("mail.yahoo.com") !== -1) {
    document.getElementById("theAd").remove()
}
