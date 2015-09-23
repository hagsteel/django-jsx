function getCookie (name) {
    // From https://docs.djangoproject.com/en/1.7/ref/contrib/csrf/
    var cookieValue = null, cookies, i, cookie;
    if (document.cookie && document.cookie !== "") {
        cookies = document.cookie.split(";");
        for (i = 0; i < cookies.length; i += 1) {
            cookie = cookies[i].trim(); // Doesn't work in all browsers
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + "=")) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const extraHeaders = {};


function makeRequest (url, method, data, contentType = 'application/json') {
    return new Promise((resolve, reject) => {

        //if (url.indexOf("?format=json") == -1 && url.indexOf("&format=json") == -1) {
        //    url += "?format=json";
        //}

        const req = new XMLHttpRequest();
        req.open(method, url, true);

        // We don't want CSRF tokens if we are using this as
        // a public API for now
        if (method !== "GET") {
            try {
                req.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));
            } catch (ex) {
                // This is a bit of a hack
            }
        }


        // if the content tpye is multipart/form-data let the browser handle it
        if (contentType !== 'multipart/form-data') {
            if (req.overrideMimeType !== undefined) {
                req.overrideMimeType(contentType);
            }

            req.setRequestHeader("Content-Type", contentType);
        }


        for (let key in extraHeaders) {
            req.setRequestHeader(key, extraHeaders[key]);
        }

        // When done processing data
        req.onreadystatechange = function () {
            if (req.readyState !== 4) {
                return;
            }

            if (req.status >= 200 && req.status <= 299) {
                if (req.responseText) {
                    resolve(JSON.parse(req.responseText));
                } else {
                    resolve();
                }
            } else {
                try {
                    const jsonData = JSON.parse(req.responseText);
                    reject(jsonData);
                } catch(err) {
                    reject(req.responseText);
                }
            }
        };

        if(contentType === 'application/json'){
            req.send(JSON.stringify(data));
        }
        else {
            req.send(data);
        }
    });
}


const rest = {
    get(url, data, contentType = 'application/json') {
        return makeRequest(url, "GET", data, contentType);
    },

    post(url, data, contentType = 'application/json') {
        return makeRequest(url, "POST", data, contentType);
    },

    put(url, data, contentType = 'application/json') {
        return makeRequest(url, "PUT", data, contentType);
    },

    patch(url, data, contentType = 'application/json') {
        return makeRequest(url, "PATCH", data, contentType);
    },

    "delete"(url, data, contentType = 'application/json') {
        return makeRequest(url, "DELETE", data, contentType);
    },

    setAdditionalHeaders(key, value) {
        extraHeaders[key] = value;
    },

    removeHeader(key) {
        if (key in extraHeaders) {
            delete extraHeaders[key];
        }
    },

    getHeaders() {
        return extraHeaders;
    }
};


export {rest};
