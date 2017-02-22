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
    testProcessFormForChina: function() {
      var message = serialNumberChecker.processForm('JV12345', 'china')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === 'china')
    },
    testProcessFormForIndia: function() {
      var message = serialNumberChecker.processForm('JV12345', 'india')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === 'india')
    },
    testProcessFormForIndonesia: function() {
      var message = serialNumberChecker.processForm('JV12345', 'indonesia')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === 'indonesia')
    },
    testProcessFormForJapan: function() {
      var message = serialNumberChecker.processForm('JV12345', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === 'japan')
    },
    testProcessFormForKoreaCN: function() {
      var message = serialNumberChecker.processForm('cn423456', 'korea')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1994')
    },
    testProcessFormForKoreaE: function() {
      var message = serialNumberChecker.processForm('e723456', 'korea')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1987')
    },
     testProcessFormForKoreaKC: function() {
      var message = serialNumberChecker.processForm('kc97345678', 'korea')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1997')
    },
      testProcessFormForKoreaKV: function() {
      var message = serialNumberChecker.processForm('kv97345678', 'korea')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1997')
    },
      testProcessFormForKoreaM: function() {
      var message = serialNumberChecker.processForm('m2234567', 'korea')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1992')
    },
      testProcessFormForKoreaNK: function() {
      var message = serialNumberChecker.processForm('nk423456', 'korea')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1994')
    },
      testProcessFormForKoreaS: function() {
      var message = serialNumberChecker.processForm('s9234567', 'korea')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1989')
    },
      testProcessFormForKoreaVN: function() {
      var message = serialNumberChecker.processForm('vn6234567', 'korea')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1996')
    },
    testProcessFormForMexico: function() {
      var message = serialNumberChecker.processForm('mn992345', 'mexico')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1999')
    },
    testProcessFormForUnitedStates89: function() {
      var message = serialNumberChecker.processForm('e912345', 'united states')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1989')
    },
    testProcessFormForUnitedStates0: function() {
      var message = serialNumberChecker.processForm('012345', 'united states')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1991 - 1993')
    },



    // testProcessFormFailure: function() {
    //   var message = serialNumberChecker.processForm('JV12345', 'china')
    //
    //   simpleTest.assert(message.status  === 'ok')
    //   simpleTest.assert(message.state   === false)
    //   simpleTest.assert(message.message === errors.noMatch)
    // },
    // testProcessFormError: function() {
    //   var message = serialNumberChecker.processForm(null, 'china')
    //
    //   simpleTest.assert(message.status  === 'error')
    //   simpleTest.assert(message.state   === false)
    //   simpleTest.assert(message.message === errors.processForm + contact.email)
    // }
  })

})
