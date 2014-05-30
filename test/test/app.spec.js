/// <reference path="../typings/tests.d.ts" />
/// <reference path="../src/app.ts" />
var expect = chai.assert;

describe('main spec', function () {
    it('simple test', function () {
        assert.typeOf(Charts.Teste, "string", "opa nenem");
        assert.equal(Charts.Teste, "testando");
    });
});
