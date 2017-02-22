////
// UTILITY
////

define([], function() {

  var utilityModule = function() {


    // Resets the country of origin field to "not sure"
    // HAPPY PATH: retruns { status: 'ok', state: true, message: null }
    // FAILURE PATH: retruns { status: 'ok', state: false, message: null }
    // ERROR PATH: retruns { status: 'error', state: false, message: <error> }
    this.resetCountryOfOrigin = function() { return this.createMessageObject('ok', true, null) }

    // Creates oobject with keys status, state, and message
    this.createMessageObject = function(status, state, message) {
      return {
        status: status,
        state: state,
        message: message
      }
    }
  }

  return utilityModule
  
})
