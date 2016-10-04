export function Log(message: string) {

    return function(target, key = null, descriptor = null) {
        debugger;
        target.prototype.annotations2 = "test";
        console.log("*** ", message, "***", target, key, descriptor)
    }
}