var should = require('chai').should();
require('./testdom')('<html><body><main></main></body></html>');
var index = require('../src/index');

describe('index', function() {
  it('should have a valid react object', function() {
    index.React.should.be.ok;
  });
  it('should have a valid render method', function() {
    index.render.should.be.ok;
  });
  it('should have a valid app object', function() {
    index.App.should.be.ok;
  });
});
