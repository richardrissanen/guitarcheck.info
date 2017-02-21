define(['./strings'], function(strings) {
  var errors, contact;
  errors  = strings.errors
  contact = strings.contact

  var serialNumberCheckerModule = function() {

    // Ensures length of serial number is less than 12. India has serial numbers
    // that start with ZSSH followed 8 numbers. All other numbers are less.
    this.validLength = function(serialNumber) {
      return { status: 'ok', state: true, message: null }
    }

    // Primary Function determines what to do next.
    // It uses the "Country of origin" / country select to determine which
    // "isSerialNumberFrom" to call.
    // Examples:
    //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
    //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
    //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
    this.processForm = function(serialNumber, country) {
      return { status: 'ok', state: true, message: '1985' }
    }
  }

  // Iterates over possible serial numbers from China and checks against the
  // serial number.
  // Examples:
  //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
  //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
  //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
  function isSerialNumberFromChina() {
    return { status: 'ok', state: false }
  }

  // Iterates over possible serial numbers from India and checks against the
  // serial number.
  // Examples:
  //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
  //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
  //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
  function isSerialNumberFromIndia() {
    return { status: 'ok', state: false }
  }

  // Iterates over possible serial numbers from Indonesia and checks against the
  // serial number.
  // Examples:
  //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
  //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
  //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
  function isSerialNumberFromIndonesia() {
    return { status: 'ok', state: false }
  }

  // Iterates over possible serial numbers from Japan and checks against the
  // serial number.
  // Examples:
  //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
  //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
  //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
  function isSerialNumberFromJapan() {
    return { status: 'ok', state: false }
  }

  // Iterates over possible serial numbers from Korea and checks against the
  // serial number.
  // Examples:
  //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
  //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
  //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
  function isSerialNumberFromKorea() {
    return { status: 'ok', state: false }
  }

  // Iterates over possible serial numbers from Mexico and checks against the
  // serial number.
  // Examples:
  //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
  //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
  //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
  function isSerialNumberFromMexico() {
    return { status: 'ok', state: false }
  }

  // Iterates over possible serial numbers from United States and checks against
  // the serial number.
  // Examples:
  //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
  //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
  //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
  function isSerialNumberFromUnitedStates() {
    return { status: 'ok', state: false }
  }

  ////
  // errors
  ////

  // Retunrs message indicating the serial number was not found. This only
  // occurs when "Country of origin" is "not sure" and no match was found.
  function serialNumberWasNotFound() {
    return {
      status: 'error',
      state: 'failed',
      messsage: errors.notFound
    }
  }

  // Retunrs message indicating the serial number did not match the
  // "Country of origin" suggested by the visitor. This only occurs when
  // "Country of origin" is any named country and no match is found.
  function countryOfOriginDidNotMatchSerialNumber() {
    return {
      status: 'error',
      state: 'failed',
      messsage: errors.noMatch
    }
  }

  ////
  // UTILITY
  ////

  // Resets the country of origin field to "not sure"
  // HAPPY PATH: retruns { status: 'ok', state: true, message: null }
  // FAILURE PATH: retruns { status: 'ok', state: false, message: null }
  // ERROR PATH: retruns { status: 'error', state: false, message: <error> }
  function resetCountryOfOrigin() { return { status: 'ok', state: true } }

  // Creates oobject with keys status, state, and message
  function createMessageObject(status, state, message) { return { status: status, state: state, message: message } }

  return serialNumberCheckerModule

})