"use strict";
function Log(message) {
    return function (target, key, descriptor) {
        if (key === void 0) { key = null; }
        if (descriptor === void 0) { descriptor = null; }
        debugger;
        target.prototype.annotations2 = "test";
        console.log("*** ", message, "***", target, key, descriptor);
    };
}
exports.Log = Log;
//# sourceMappingURL=log.js.map