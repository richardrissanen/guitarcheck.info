define(['../utility'], function(utility) {
  var utility;

  utility = new utility()

  var unitedStatesModule = function() {
    var data;

    data = {
      maximumPrefixSize: 2,
      prefixes: {
        'e9': '1989',
        'n0': '1990',
        'n1': '1991',
        'n2': '1992',
        'n3': '1993',
        '0': '1991 - 1993'
      }
    }

    // Iterates over possible serial numbers from United States and checks against
    // the serial number.
    // Examples:
    //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
    //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
    //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
    this.isSerialNumberFromUnitedStates = function(serialNumber) {
      var message;

      for (var i = 0; i <= data.maximumPrefixSize; i++) {

        if (typeof message !== 'undefined') { break }
        serialNumberPrefix = serialNumber.substring(0, i)
        message = data.prefixes[serialNumberPrefix]

      }

      return utility.createMessageObject('ok', true, message)
    }

  }

  return unitedStatesModule

})
