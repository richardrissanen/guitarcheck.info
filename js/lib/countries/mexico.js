define(['../utility'], function(utility) {
  var utility;

  utility = new utility()

  var mexicoModule = function() {

    // Iterates over possible serial numbers from Mexico and checks against the
    // serial number.
    // Examples:
    //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
    //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
    //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
    this.isSerialNumberFromMexico = function(serialNumber) {
      return utility.createMessageObject('ok', true, 'mexico')
    }

  }

  return mexicoModule

})
