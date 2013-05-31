const levelup = require('levelup')
    , MemDOWN = require('memdown')
    , xtend   = require('xtend')

function factory (location) {
  return new MemDOWN(location)
}

function lmdb (location, options, callback) {
  if (typeof options != 'object') {
    callback = options
    options  = {}
  }

  options.db = factory

  return levelup(location, options, callback)
}

module.exports = lmdb