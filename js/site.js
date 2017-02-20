var submitButton,
    serialNumber;

submitButton = document.getElementById('serial-number-check-button')
submitButton.addEventListener('click', function() {
  var obj,
      date;

  event.preventDefault()

  console.log('clicked')
})

// Ensures length of serial number is less than 12. India has serial numbers
// that start with ZSSH followed 8 numbers. All other numbers are less.
function validLength() {
  return { state: true }
}

// Primary Function determines what to do next.
// It uses the "Country of origin" / country select to determine which
// "isSerialNumberFrom" to call.
// Examples:
//   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
//   FAILURE PATH: returns { status: 'ok', state: false, message: null }
//   ERROR PATH:   returns { status: 'error', state: false, message: null }
function processForm() {
  return { state: true }
}

// Iterates over possible serial numbers from China and checks against the
// serial number.
// Examples:
//   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
//   FAILURE PATH: returns { status: 'ok', state: false, message: null }
//   ERROR PATH:   returns { status: 'error', state: false, message: null }
function isSerialNumberFromChina () {
  return { status: 'ok', state: false }
}

// Iterates over possible serial numbers from India and checks against the
// serial number.
// Examples:
//   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
//   FAILURE PATH: returns { status: 'ok', state: false, message: null }
//   ERROR PATH:   returns { status: 'error', state: false, message: null }
function isSerialNumberFromIndia () {
  return { status: 'ok', state: false }
}

// Iterates over possible serial numbers from Indonesia and checks against the
// serial number.
// Examples:
//   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
//   FAILURE PATH: returns { status: 'ok', state: false, message: null }
//   ERROR PATH:   returns { status: 'error', state: false, message: null }
function isSerialNumberFromIndonesia () {
  return { status: 'ok', state: false }
}

// Iterates over possible serial numbers from Japan and checks against the
// serial number.
// Examples:
//   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
//   FAILURE PATH: returns { status: 'ok', state: false, message: null }
//   ERROR PATH:   returns { status: 'error', state: false, message: null }
function isSerialNumberFromJapan () {
  return { status: 'ok', state: false }
}

// Iterates over possible serial numbers from Korea and checks against the
// serial number.
// Examples:
//   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
//   FAILURE PATH: returns { status: 'ok', state: false, message: null }
//   ERROR PATH:   returns { status: 'error', state: false, message: null }
function isSerialNumberFromKorea () {
  return { status: 'ok', state: false }
}

// Iterates over possible serial numbers from Mexico and checks against the
// serial number.
// Examples:
//   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
//   FAILURE PATH: returns { status: 'ok', state: false, message: null }
//   ERROR PATH:   returns { status: 'error', state: false, message: null }
function isSerialNumberFromMexico () {
  return { status: 'ok', state: false }
}

// Iterates over possible serial numbers from United States and checks against
// the serial number.
// Examples:
//   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
//   FAILURE PATH: returns { status: 'ok', state: false, message: null }
//   ERROR PATH:   returns { status: 'error', state: false, message: null }
function isSerialNumberFromUnitedStates () {
  return { status: 'ok', state: false }
}

////
// errors
////

// Retunrs message indicating the serial number was not found. This only
// occurs when "Country of origin" is "not sure" and no match was found.
function serialNumberWasNotFound() {
  return {
    status: 'error'
    state: 'failed',
    messsage: 'The serial number you entered does not appear to be a Squier serial number.'
  }
}

// Retunrs message indicating the serial number did not match the
// "Country of origin" suggested by the visitor. This only occurs when
// "Country of origin" is any named country and no match is found.
function countryOfOriginDidNotMatchSerialNumber() {
  return {
    status: 'error'
    state: 'failed',
    messsage: 'The serial number you entered does not match the country of origin. Please try the serial number without a country of origin.'
  }
}

////
// UTILITY
////

// Resets the country of origin field to "not sure"
// HAPPY PATH: retruns { status: 'ok', state: true, message: null }
// FAILURE PATH: retruns { status: 'ok', state: false, message: null }
// ERROR PATH: retruns { status: 'error', state: false, message: null }
function resetCountryOfOrigin() { return { status: 'ok', state: true } }

// Creates oobject with keys status, state, and message
function createMessageObject(status, state, message) { return { status: status, state: state, message: message } }
