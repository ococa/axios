"use strict";
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
var c = new C();
c.a = 12;
c.a = undefined; // error, 'undefined' is not assignable to 'number'
c.b = 13;
c.b = undefined; // ok
c.b = null; // error, 'null' is not assignable to 'number | undefined'
