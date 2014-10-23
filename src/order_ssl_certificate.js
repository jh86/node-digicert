var needle = require('needle')
module.exports = function(data, cb) {
  needle.post('https://api.digicert.com/order/ssl', data, {
  // headers and shit
  }, function(err, res) {
    if (err)
      return cb(err);
    else if (res.statusCode === 201)
      return cb(null, res.body)
    else
      return cb(new Error('Unexpected status code '+res.statusCode))
  })
}
