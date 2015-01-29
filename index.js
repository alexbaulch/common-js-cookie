/**
 * CommonJS cookie module.
 * @module common-js-cookie
 */

module.exports = {

    /**
     * Return a value of the key within a cookie if it exists
     * @param  { string } key - The key to search for and return
     * @return { string } the value of the key if it exists
     */
    getItem: function (key) {
        if (!key) {
            return null;
        }
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },

    /**
     * Set a cookie
     * @param { string } key - The name of the cookie to create/overwrite
     * @param { string } value - The value of the cookie
     * @param { number|string|Date|null } expiryDate - The max-age in seconds (e.g. 31536e3 for a year, Infinity for a never-expires cookie), or the expires date in GMTString format or as Date object; if not specified the cookie will expire at the end of session
     * @param { string|null } path - The path from where the cookie will be readable. E.g., "/", "/mydir"; if not specified, defaults to the current path of the current document location. The path must be absolute (see RFC 2965). For more information on how to use relative paths in this argument, see this paragraph.
     * @param { string|null } domain - The domain from where the cookie will be readable. E.g., "example.com", ".example.com" (includes all subdomains) or "subdomain.example.com"; if not specified, defaults to the host portion of the current document location
     * @param { boolean|null } The cookie will be transmitted only over secure protocol as https.
     */
    setItem: function (key, value, expiryDate, path, domain, secure) {
        if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
            return false;
        }
        var sExpires = "";
        if (expiryDate) {
            switch (expiryDate.constructor) {
                case Number:
                    sExpires = expiryDate === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + expiryDate;
                    break;
                case String:
                    sExpires = "; expires=" + expiryDate;
                    break;
                case Date:
                    sExpires = "; expires=" + expiryDate.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + sExpires + (domain ? "; domain=" + domain : "") + (path ? "; path=" + path : "") + (secure ? "; secure" : "");
        return true;
    },
 
    /**
     * [removeItem description]
     * @param  { string } name - The name of the cookie to remove
     * @param  { string|null } path - E.g., "/", "/mydir"; if not specified, defaults to the current path of the current document location. The path must be absolute (see RFC 2965). For more information on how to use relative paths in this argument, see this paragraph.
     * @param  { string|null } domain - E.g., "example.com", ".example.com" (includes all subdomains) or "subdomain.example.com"; if not specified, defaults to the host portion of the current document location
     * @return { boolean } Returns true if the item has been deleted, returns false otherwise
     */
    removeItem: function (key, path, domain) {
        if (!this.hasItem(key)) {
            return false;
        }
        document.cookie = encodeURIComponent(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (domain ? "; domain=" + domain : "") + (path ? "; path=" + path : "");
        return true;
    },
 
    /**
     * Checks whether a cookie has the specified key
     * @param  { sting } key - The key to be searched for
     * @return { Boolean } The result of the search
     */
    hasItem: function (key) {
        if (!key) { return false; }
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    
    /**
     * Returns all keys in a cookie
     * @return { Array } The array of keys
     */
    keys: function () {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    }
 
};