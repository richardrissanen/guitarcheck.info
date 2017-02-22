define(['../utility'], function(utility) {
  var utility;

  utility = new utility()

  var japanModule = function() {

    // data = {
    //   maximumPrefixSize: #,
    //   obj: {
    //
    //   }
    // }

    // Iterates over possible serial numbers from Japan and checks against the
    // serial number.
    // Examples:
    //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
    //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
    //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
    this.isSerialNumberFromJapan = function(serialNumber) {
      return utility.createMessageObject('ok', true, 'japan')
    }

  }

  return japanModule

})
