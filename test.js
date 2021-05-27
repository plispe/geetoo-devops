const test = require('ava')

const { getMessage } = require('./src/functions')

test('Test get message return value', t => {
  t.is(getMessage(), 'DevOps is awesome!')
})
