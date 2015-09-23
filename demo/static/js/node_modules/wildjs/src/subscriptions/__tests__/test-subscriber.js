jest.autoMockOff();
var Subscribers = require('../subscribers.js').Subscribers;

const TestSubscriber = {};


describe("Subscribers", function () {
    "use strict";
    it("should add a subscribers", function () {
        Subscribers.subscribe("test", TestSubscriber);
        expect(Subscribers.subscribers["test"].length).toBe(1);
    });

    it("should not add a subscribers twice", function () {
        Subscribers.subscribe("test", TestSubscriber);
        Subscribers.subscribe("test", TestSubscriber);
        expect(Subscribers.subscribers["test"].length).toBe(1);
    });
});
