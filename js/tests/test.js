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
    testProcessFormForIndonesiaIC: function() {
      var message = serialNumberChecker.processForm('ic983456789', 'indonesia')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1998')
    },
    testProcessFormForIndonesiaICS: function() {
      var message = serialNumberChecker.processForm('ics10456789', 'indonesia')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '2010')
    },
    testProcessFormForIndonesiaIS: function() {
      var message = serialNumberChecker.processForm('is003456789', 'indonesia')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '2000')
    },
    testProcessFormForIndonesiaSI: function() {
      var message = serialNumberChecker.processForm('si023456789', 'indonesia')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '2002')
    },


    testProcessFormForJapanA: function() {
      var message = serialNumberChecker.processForm('a123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '(mij) 1985 - 1986 | (cij) 1997 - 1998')
    },
    testProcessFormForJapanB: function() {
      var message = serialNumberChecker.processForm('b123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '(mij) 1985 - 1986 | (cij) 1998 - 1999')
    },
    testProcessFormForJapanC: function() {
      var message = serialNumberChecker.processForm('c123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1985 - 1986')
    },
    testProcessFormForJapanE: function() {
      var message = serialNumberChecker.processForm('e123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1984 - 1987')
    },
    testProcessFormForJapanF: function() {
      var message = serialNumberChecker.processForm('f123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1986 - 1987')
    },
    testProcessFormForJapanG: function() {
      var message = serialNumberChecker.processForm('g123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1987 - 1988')
    },
    testProcessFormForJapanH: function() {
      var message = serialNumberChecker.processForm('h123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1988 - 1989')
    },
    testProcessFormForJapanI: function() {
      var message = serialNumberChecker.processForm('i123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1989 - 1990')
    },
    testProcessFormForJapanJ: function() {
      var message = serialNumberChecker.processForm('j123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1989 - 1990')
    },
    testProcessFormForJapanJV: function() {
      var message = serialNumberChecker.processForm('jv12345', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1982 - 1984')
    },
    testProcessFormForJapanK: function() {
      var message = serialNumberChecker.processForm('k123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1990 - 1991')
    },
    testProcessFormForJapanL: function() {
      var message = serialNumberChecker.processForm('l123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1991 - 1992')
    },
    testProcessFormForJapanM: function() {
      var message = serialNumberChecker.processForm('m123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1992 - 1993')
    },
    testProcessFormForJapanN: function() {
      var message = serialNumberChecker.processForm('n123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '(mij) 1993 - 1994 | (cij) 1995 - 1996')
    },
    testProcessFormForJapanP: function() {
      var message = serialNumberChecker.processForm('p123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '(mij) 1993 - 1994 | (cij) 1999 - 2002')
    },
    testProcessFormForJapanQ: function() {
      var message = serialNumberChecker.processForm('q123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '(mij) 1993 - 1994 | (cij) 2002 - 2004')
    },
    testProcessFormForJapanR: function() {
      var message = serialNumberChecker.processForm('r123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '2004 - 2006')
    },
    testProcessFormForJapanS: function() {
      var message = serialNumberChecker.processForm('s123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '(mij) 1994 - 1995 | (cij) 2006 - 2008')
    },
    testProcessFormForJapanSQ: function() {
      var message = serialNumberChecker.processForm('sq12345', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1983 - 1984')
    },
    testProcessFormForJapanT: function() {
      var message = serialNumberChecker.processForm('t123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '(mij) 1994 - 1995 | (mij "post 2006") 2007 - 2010')
    },
    testProcessFormForJapanU: function() {
      var message = serialNumberChecker.processForm('u123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '(mij) 1995 - 1996 | (mij "post 2006") 2010 - 2011')
    },
    testProcessFormForJapanV: function() {
      var message = serialNumberChecker.processForm('v123456', 'japan')

      simpleTest.assert(message.status  === 'ok')
      simpleTest.assert(message.state   === true)
      simpleTest.assert(message.message === '1996 - 1997')
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
