define(
  ['../config/strings', '../config/application', './utility', './countries/china', './countries/india',
  './countries/indonesia', './countries/japan', './countries/korea', './countries/mexico', './countries/unitedStates'],
  function(strings, app, utility, china, india, indonesia, japan, korea, mexico, unitedStates) {
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
              china   = new china()
              message = china.isSerialNumberFromChina(serialNumber)
              break
            case 'india':
              india   = new india()
              message = india.isSerialNumberFromIndia(serialNumber)
              break
            case 'indonesia':
              indonesia = new indonesia()
              message   = indonesia.isSerialNumberFromIndonesia(serialNumber)
              break
            case 'japan':
              japan = new japan()
              message = japan.isSerialNumberFromJapan(serialNumber)
              break
            case 'korea':
              korea = new korea()
              message = korea.isSerialNumberFromKorea(serialNumber)
              break
            case 'mexico':
              mexico = new mexico()
              message = mexico.isSerialNumberFromMexico(serialNumber)
              break
            case 'united states':
              unitedStates = new unitedStates()
              message = unitedStates.isSerialNumberFromUnitedStates(serialNumber)
              break
            default:
              // run all countries
              // message = isSerialNumberFromChina(serialNumber)
              // if (message.status == 'ok' && message.state == true) { break }
              // message = isSerialNumberFromIndia(serialNumber)
              // if (message.status == 'ok' && message.state == true) { break }
              // message = isSerialNumberFromIndonesia(serialNumber)
              // if (message.status == 'ok' && message.state == true) { break }
              // message = isSerialNumberFromJapan(serialNumber)
              // if (message.status == 'ok' && message.state == true) { break }
              // message = isSerialNumberFromKorea(serialNumber)
              // if (message.status == 'ok' && message.state == true) { break }
              // message = isSerialNumberFromMexico(serialNumber)
              // if (message.status == 'ok' && message.state == true) { break }
              // message = isSerialNumberFromUnitedStates(serialNumber)
              // if (message.status == 'ok' && message.state == true) { break }
        }

        return message
      }
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

  }
)
