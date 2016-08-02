/**
 * Module dependencies.
 */

var defaultsDeep = require('..');

/**
 * Test array merges.
 */

describe('Arrays', function () {
    it('should not merge arrays', function () {
        var object = {
            foo: 'bar',
            bar: [],
            qux: {
                biz: {
                    net: ['foo']
                }
            }
        };

        var source = {
            bar: ['net'],
            qux: {
                biz: {
                    net: []
                }
            },
            qox: ['biz']
        };

        var result = defaultsDeep(source, object);

        result.bar.should.eql(['net']);
        result.qux.biz.net.should.eql([]);
        result.qox.should.eql(['biz']);
    });
});
