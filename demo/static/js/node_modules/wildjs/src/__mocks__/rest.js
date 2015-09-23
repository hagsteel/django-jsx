const requests = [];

class FakeRequest {
    constructor(onSuccess, onFail) {
        this.onSuccess = onSuccess;
        this.onFail = onFail;
        this.id = requests.length + 1;
    }

    success(data) {
        this.onSuccess(data);
    }

    fail(errors) {
        this.onFail(errors);
    }
}


function makeFakeRequest(url, data) {
    return new Promise((resolve, reject) => {
        const request = new FakeRequest((response) => {
            resolve(response);
        }, reject);
        request.data = data;
        requests.push(request);
    });
}


const mockRest = {
    get(url, data) {
        return makeFakeRequest(url, data);
    },

    post(url, data) {
        return makeFakeRequest(url, data);
    },

    put(url, data) {
        return makeFakeRequest(url, data);
    },

    patch(url, data) {
        return makeFakeRequest(url, data);
    },

    "delete"(url, data) {
        return makeFakeRequest(url, data);
    },

    success(data) {
        console.log('SUCCESSING');
        console.log(requests[0].id);
        requests[0].success(data);
    },

    fail(errors) {
        requests[0].fail(errors);
    },

    getstuff() {
        return requests;
    }
};

export {mockRest};
