# superagent-future
[Fantasy Land](https://github.com/fantasyland/fantasy-land) Future extension of [superagent](https://github.com/visionmedia/superagent).

## installation
`npm i -S superagent-future`

## usage

Simply require the module `require('superagent-future')`. This extends the prototype of superagents `Request` class with a method called `createFuture`.


```
require('superagent-future');
var request = require('superagent');

var future = request.post(someURL)
  .set('SomeHeader', 'someValue')
  .send(someData)
  .createFuture();

future.fork(errFn, successFn);
```

## underlying future implementation
superagent-future currently uses the future class from [ramda-fantasy](https://github.com/ramda/ramda-fantasy)
