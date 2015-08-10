var superagent = require('superagent')
var Future = require('ramda-fantasy').Future

superagent.Request.prototype.createFuture = function () {
  return new Future(createRequestFork(this))
}

function createRequestFork (request) {
  return function fork (reject, resolve) {
    request.end(function (e, res) {
      return e !== null ? reject(e) : resolve(res)
    })
  }
}
