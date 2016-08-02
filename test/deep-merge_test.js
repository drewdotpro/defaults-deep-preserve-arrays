/**
 * Module dependencies.
 */

var defaultsDeep = require('..');

/**
 * Test deep merge.
 */

describe('Deep merge', function () {
    it('should perform a deep _.defaults', function () {
        var source = {
            foo: 'bads',
            fred: 'foo',
            date: new Date(),
            grault: {garply: 2, waldo: 'baz'},
            bar: {qux: {net: 2}},
            bou: ['tan']
        };
        var object = {foo: 'bar', baz: 'quux', corge: 1, grault: {}, bar: {qux: {net: 1}}, bou: ['nat']};
        var result = defaultsDeep(source, object);

        /*jshint -W030 */
        result.should.be.an.Object;
        result.should.have.keys('foo', 'baz', 'corge', 'grault', 'bar', 'bou', 'fred', 'date');
        result.date.should.should.be.a.Date;
        /*jshint +W030 */

        result.should.have.property('foo', 'bads');
        result.should.have.property('baz', 'quux');
        result.should.have.property('corge', 1);
        result.should.have.property('date').equal(source.date);
        result.should.have.property('grault').with.a.property('garply', 2);
        result.should.have.property('grault').with.a.property('waldo', 'baz');
        result.should.have.property('bar').with.a.property('qux').with.a.property('net', 2);
        result.should.have.property('bou', ['tan']);
    });

    it('should work with deeply nested objects', function () {
        var object = {foo: 'bar', bar: {biz: {net: 'qux'}}, qux: ['biz']};
        var source = {bar: {biz: {net: 'txi', qox: 'fuc'}}, qux: ['baz']};
        var result = defaultsDeep(source, object);

        /*jshint -W030 */
        result.should.be.an.Object;
        result.should.have.keys('foo', 'bar', 'qux');
        /*jshint +W030 */

        result.should.have.property('foo', 'bar');
        result.bar.should.have.keys('biz');
        result.bar.biz.should.have.keys('net', 'qox');
        result.should.have.property('bar').with.a.property('biz');
        result.bar.biz.should.have.properties({
            net: 'txi',
            qox: 'fuc'
        });
        result.should.have.property('qux', ['baz']);
    });
});
