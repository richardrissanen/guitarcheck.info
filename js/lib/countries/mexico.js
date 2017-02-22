define(['../utility', ], function(utility) {
  var utility;

  utility = new utility()

  var mexicoModule = function() {

    data = {
      prefixSize: 3,
      prefixes: {
        'mn3': '1993',
        'mn4': '1994',
        'mn5': '1995',
        'mn6': '1996',
        'mn7': '1997',
        'mn8': '1998',
        'mn9': '1999'
      }
    }

    // Iterates over possible serial numbers from Mexico and checks against the
    // serial number.
    // Examples:
    //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
    //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
    //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
    this.isSerialNumberFromMexico = function(serialNumber) {
      var message;

      serialNumberPrefix = serialNumber.substring(0, data.prefixSize)

      message = data.prefixes[serialNumberPrefix]

      return utility.createMessageObject('ok', true, message)
    }

  }

  return mexicoModule

})
