var digicert = require('../')
var nock = require('nock');
var expect = require('chai').expect;
nock.disableNetConnect()

var mockOrderRequest = function(body) {
  return nock('https://api.digicert.com')
  .post('/order/ssl', body)
  .reply(201, {
    "order_id": 12345
  });
}

var fakeRequestBody = {
  "server_type": "2",
  "validity": "2",
  "common_name": "www.example.com",
  "org_name": "Tampa Bay Cray LLC",
  "org_addr1": "1234 Sesame Street",
  "org_city": "Tampa",
  "org_state": "FL",
  "org_zip": "33615",
  "org_country": "US",
  "org_contact_firstname": "Joe",
  "org_contact_lastname": "Bloggs",
  "org_contact_email": "joe@example.com",
  "org_contact_telephone": "555-123-1234",
  "csr": "-----BEGIN CERTIFICATE REQUEST-----\n[CSR GOES HERE]\n-----END CERTIFICATE REQUEST-----"
}


describe("digicert#orderSSLCertificate", function() {
  var mock = null;
  beforeEach(function() {
    mock = mockOrderRequest()
  });

  it("makes the request", function(done) {
    digicert.orderSSLCertificate(fakeRequestBody, function(err, res) {
      mock.done()
      expect(res.order_id).to.eq(12345+"failtest")
      done(err)
    })
  });
});

