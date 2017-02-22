define(['../config/strings', '../config/application', './utility'], function(strings, app, utility) {
  var errors, contact, serialNumber, utility;

  errors             = strings.errors
  contact            = strings.contact
  serialNumberConfig = app.serialNumber

  utility = new utility()

  var serialNumberCheckerModule = function() {

    // Ensures length of serial number is less than 12. India has serial numbers
    // that start with ZSSH followed 8 numbers. All other numbers are less.
    this.validLength = function(serialNumber) {
      var length, status, state, message;

      message = null

      try {

        if ( typeof serialNumber !== 'undefined' ) {

          length = serialNumber.length

          if (length < serialNumberConfig.minimumLength || length > serialNumberConfig.maximumLength ) {

            if ( length < serialNumberConfig.minimumLength )  { message = errors.minimumLength }
            if ( length > serialNumberConfig.maximumLength )  { message = errors.maximumLength }

            state = false

          } else {
            state = true
          }


        } else {
          state   = false
          message = errors.emptySerialNumber
        }

        status = 'ok'

      } catch (error) {

        status  = 'error'
        status  = false
        message = error.message

      }

      return utility.createMessageObject(status, state, message)

    }

    // Primary Function determines what to do next.
    // It uses the "Country of origin" / country select to determine which
    // "isSerialNumberFrom" to call.
    // Examples:
    //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
    //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
    //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
    this.processForm = function(serialNumber, country) {

      var message;

      switch(country) {
          case 'china':
            message = isSerialNumberFromChina(serialNumber)
            break
          case 'india':
            message = isSerialNumberFromIndia(serialNumber)
            break
          case 'indonesia':
            message = isSerialNumberFromIndonesia(serialNumber)
            break
          case 'japan':
            message = isSerialNumberFromJapan(serialNumber)
            break
          case 'korea':
            message = isSerialNumberFromKorea(serialNumber)
            break
          case 'mexico':
            message = isSerialNumberFromMexico(serialNumber)
            break
          case 'united states':
            message = isSerialNumberFromUnitedStates(serialNumber)
            break
          default:
            // run all countries
      }

      return message
    }
  }

  // Iterates over possible serial numbers from China and checks against the
  // serial number.
  // Examples:
  //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
  //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
  //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
  function isSerialNumberFromChina(serialNumber) {
    return utility.createMessageObject('ok', true, 'china')
  }

  // Iterates over possible serial numbers from India and checks against the
  // serial number.
  // Examples:
  //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
  //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
  //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
  function isSerialNumberFromIndia(serialNumber) {
    return utility.createMessageObject('ok', true, 'india')
  }

  // Iterates over possible serial numbers from Indonesia and checks against the
  // serial number.
  // Examples:
  //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
  //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
  //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
  function isSerialNumberFromIndonesia(serialNumber) {
    return utility.createMessageObject('ok', true, 'indonesia')
  }

  // Iterates over possible serial numbers from Japan and checks against the
  // serial number.
  // Examples:
  //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
  //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
  //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
  function isSerialNumberFromJapan(serialNumber) {
    return utility.createMessageObject('ok', true, 'japan')
  }

  // Iterates over possible serial numbers from Korea and checks against the
  // serial number.
  // Examples:
  //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
  //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
  //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
  function isSerialNumberFromKorea(serialNumber) {
    return utility.createMessageObject('ok', true, 'korea')
  }

  // Iterates over possible serial numbers from Mexico and checks against the
  // serial number.
  // Examples:
  //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
  //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
  //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
  function isSerialNumberFromMexico(serialNumber) {
    return utility.createMessageObject('ok', true, 'mexico')
  }

  // Iterates over possible serial numbers from United States and checks against
  // the serial number.
  // Examples:
  //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
  //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
  //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
  function isSerialNumberFromUnitedStates(serialNumber) {
    return utility.createMessageObject('ok', true, 'united states')
  }

  ////
  // errors
  ////

  // Retunrs message indicating the serial number was not found. This only
  // occurs when "Country of origin" is "not sure" and no match was found.
  function serialNumberWasNotFound() { return utility.createMessageObject('error', false, errors.notFound) }

  // Retunrs message indicating the serial number did not match the
  // "Country of origin" suggested by the visitor. This only occurs when
  // "Country of origin" is any named country and no match is found.
  function countryOfOriginDidNotMatchSerialNumber() {
    return utility.createMessageObject('error', false, errors.noMatch)
  }

  return serialNumberCheckerModule

})
