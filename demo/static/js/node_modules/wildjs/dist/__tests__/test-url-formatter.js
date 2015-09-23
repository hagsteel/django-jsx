"use strict";

jest.autoMockOff();

var formatUrl = require("../urls").formatUrl;

describe("Format url patterns", function () {
    it("should replace <name> with values", function () {
        var data = { id: 1 };
        var url = "/test/<id>/";
        var newUrl = formatUrl(url, data);

        expect(newUrl).toBe("/test/1/");
    });

    it("should return the original url if no paramters were passed", function () {
        var url = "/test/";
        var newUrl = formatUrl(url);
        expect(newUrl).toBe("/test/");
    });

    it("should not ", function () {});
});