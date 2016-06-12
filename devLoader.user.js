// ==UserScript==
// @name         DevLoader
// @namespace    freund17.eu
// @version      1.0
// @description  Loades the webpack-userscript-bundle from the dev-server
// @author       freund17
// @match        *://*/*
// @noframes
// @grant        GM_xmlhttpRequest
// @connect      localhost
// ==/UserScript==

(function() {
    'use strict';

    GM_xmlhttpRequest({
        method: 'GET',
        url: 'http://localhost:8080/bundle.js',
        onload: function(response) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.innerHTML = response.responseText;
            document.getElementsByTagName('body')[0].appendChild(s);
        }
    });
})();
