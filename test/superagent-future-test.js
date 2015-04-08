require('../lib/superagent-future');
var superagent = require('superagent');
var http = require('http');
var chai = require('chai');
chai.should();

describe('superagent-future', function() {

  var server;
  var port = 5784;
  var base = 'http://localhost:' + port;

  beforeEach(function(done) {
    server = http.createServer(function(req, res) {
      if (req.url !== '/existingroute') {
        res.statusCode = 404;
      }
      res.end();
    });
    server.listen(port, done);
  });

  afterEach(function(done) {
    server.close(done);
  });

  it('returns a future of a request', function(done) {
    var f = superagent.get(base + '/existingroute').createFuture();
    f.fork(null, function(res) {
      res.status.should.equal(200);
      done();
    });
  });

  it('resolves errors', function(done) {
    var f = superagent.get(base + '/notfound').createFuture();
    f.fork(function(res) {
      res.status.should.equal(404);
      done();
    });
  });

});
