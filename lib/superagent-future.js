var superagent = require('superagent');
var Future = require('ramda-fantasy').Future;

superagent.Request.prototype.createFuture = function() {
  var self = this;
  return new Future(function(reject, resolve) {
    self.end(function(e, res) {
      return e !== null ? reject(e) : resolve(res);
    });
  });
};
