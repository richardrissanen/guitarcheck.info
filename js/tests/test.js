requirejs(['simpleTest', '../lib/serialNumberChecker', '../config/strings'], function(simpleTest, serialNumberChecker, strings) {
  var simpleTest, serialNumber, errors, contact;

  simpleTest          = new simpleTest()
  serialNumberChecker = new serialNumberChecker()

  errors  = strings.errors
  contact = strings.contact

  // simpleTest.testLog('Here is my input!!!')

  simpleTest.test({
    testValidLength: function() {
      var message = serialNumberChecker.validLength('123456789')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === null)
    },
    testValidLengthMaximumFailure: function() {
      var message = serialNumberChecker.validLength('1234567891013')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === false)
      simpleTest.assert(message.message === errors.maximumLength)
    },
    testValidLengthMinimumFailure: function() {
      var message = serialNumberChecker.validLength('12345')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === false)
      simpleTest.assert(message.message === errors.minimumLength)
    },
    testValidLengthUndefinedFailure: function() {
      var message = serialNumberChecker.validLength(serialNumber)

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === false)
      simpleTest.assert(message.message === errors.emptySerialNumber)
    },
    testProcessForm: function() {
      var message = serialNumberChecker.processForm('JV12345', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1982 - 1984')
    },
    testProcessFormFailure: function() {
      var message = serialNumberChecker.processForm('JV12345', 'china')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === false)
      simpleTest.assert(message.message === errors.noMatch)
    },
    testProcessFormError: function() {
      var message = serialNumberChecker.processForm(null, 'china')

      simpleTest.assert(message.status  === 'error')
      simpleTest.assert(message.state   === false)
      simpleTest.assert(message.message === errors.processForm + contact.email)
    }
})

})
