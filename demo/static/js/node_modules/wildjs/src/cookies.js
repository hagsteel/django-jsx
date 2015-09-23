/*******************************************************
 * From:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
 *******************************************************/


// Deal with Node, as there is no `document` in Node
const getCookieStore = () => {
    try {
        return window.document;
    } catch (er) {
        return {
            cookieStore: {},
            cookie: {
                getItem(sKey) {
                    return this.cookieStore[sKey];
                },

                setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                    this.cookieStore[sKey] = sValue;
                },

                removeItem(sKey, sPath, sDomain) {
                    delete this.cookieStore[sKey];
                },

                hasItem(sKey) {
                    return this.cookieStore[sKey] !== undefined;
                },

                keys() {
                    let keyCollection = [];
                    for (let key in this.cookieStore) {
                        if (this.cookieStore.hasOwnProperty(key)) {
                            keyCollection.push(key);
                        }
                    }
                    return keyCollection;
                }
            }
        };
    }
};


const cookies = {
    getItem(sKey) {
        if (!sKey) {
            return null;
        }
        return decodeURIComponent(getCookieStore().cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },

    setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        let sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        getCookieStore().cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },

    removeItem: function (sKey, sPath, sDomain) {
        if (!this.hasItem(sKey)) {
            return false;
        }
        getCookieStore().cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    },

    hasItem: function (sKey) {
        if (!sKey) {
            return false;
        }
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(getCookieStore().cookie);
    },

    keys: function () {
        let aKeys = getCookieStore().cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    }
};


export {cookies}
