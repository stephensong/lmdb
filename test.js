const tape = require('tape')
    , lmdb = require('./')

tape('lmdb', function (t) {
  t.plan(1)

  var db = lmdb('blerg')
  db.put('foo', 'bar')
  db.get('foo', function (err, value) {
    t.equal(value, 'bar', 'correct value')
    t.end()
  })
})