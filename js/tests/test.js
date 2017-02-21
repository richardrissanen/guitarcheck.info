requirejs(['simpleTest', '../lib/serialNumberChecker', '../lib/strings'], function(simpleTest, serialNumberChecker, strings) {
  var simpleTest, serialNumber, errors, contact;

  simpleTest = new simpleTest()
  serialNumberChecker = new serialNumberChecker()

  errors  = strings.errors
  contact = strings.contact

  // simpleTest.testLog('Here is my input!!!')

  simpleTest.test({
    testAddition: function() {
      simpleTest.assert(1 + 1 === 2)
    },
    testValidLength: function() {
      var message = serialNumberChecker.validLength ('123456789')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === null)
    },
    testValidLengthMaximumFailure: function() {
      var message = serialNumberChecker.validLength('1234567891013')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === false)
      simpleTest.assert(message.message === errors.maxLength)
    },
    testValidLengthMinimumFailure: function() {
      var message = serialNumberChecker.validLength('12345')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === false)
      simpleTest.assert(message.message === errors.minimumLength)
    },
    testValidLengthNullFailure: function() {
      var message = serialNumberChecker.validLength(null)

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
    },
    testIsSerialNumberFromChina: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromChinaFailure: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromChinaError: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromIndia: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromIndiaFailure: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromIndiaError: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromIndonesia: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromIndonesiaFailure: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromIndonesiaError: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromJapan: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromJapanFailure: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromJapanError: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromKorea: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromKoreaFailure: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromKoreaError: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromMexico: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromMexicoFailure: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromMexicoError: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromUnitedStates: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromUnitedStatesFailure: function() {
      simpleTest.assert()
    },
    testIsSerialNumberFromUnitedStatesError: function() {
      simpleTest.assert()
    },
    testSerialNumberWasNotFound: function() {
      simpleTest.assert()
    },
    testCountryOfOriginDidNotMatchSerialNumber: function() {
      simpleTest.assert()
    },
    testResetCountryOfOrigin: function() {
      simpleTest.assert()
    },
    testResetCountryOfOriginFailure: function() {
      simpleTest.assert()
    },
    testResetCountryOfOriginError: function() {
      simpleTest.assert()
    },
    testCreateMessageObject: function() {
      simpleTest.assert()
    },
    testError: function() {
      simpleTest.assert()
    }
})

})
