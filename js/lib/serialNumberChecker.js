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
              var chinaModule;

              if (typeof chinaModule === 'undefined') { chinaModule = new china() }
              message = chinaModule.isSerialNumberFromChina(serialNumber)

              break
            case 'india':
              var indiaModule;

              if (typeof indiaModule === 'undefined') { indiaModule = new india() }
              message = indiaModule.isSerialNumberFromIndia(serialNumber)

              break
            case 'indonesia':
              var indonesiaModule;

              if (typeof indonesiaModule === 'undefined') { indonesiaModule = new indonesia() }
              message = indonesiaModule.isSerialNumberFromIndonesia(serialNumber)

              break
            case 'japan':
              var japanModule;

              if (typeof japanModule === 'undefined') { japanModule = new japan() }
              message = japanModule.isSerialNumberFromJapan(serialNumber)

              break
            case 'korea':
              var koreaModule;

              if (typeof koreaModule === 'undefined' ) { koreaModule = new korea() }
              message = koreaModule.isSerialNumberFromKorea(serialNumber)

              break
            case 'mexico':
              var mexicoModule;

              if (typeof mexicoModule === 'undefined') { mexicoModule = new mexico() }
              message = mexicoModule.isSerialNumberFromMexico(serialNumber)

              break
            case 'united states':
              var unitedStatesModule;

              if (typeof unitedStatesModule === 'undefined' ) { unitedStatesModule = new unitedStates() }
              message = unitedStatesModule.isSerialNumberFromUnitedStates(serialNumber)

              break
            default:
              message = utility.createMessageObject(
                'ok',
                false,
                'Find country of origin: Check the headstock and the base of the neck where it meets the body.'
              )
              // todo
              //   run all countries
        }

        return message
      }
    }

    ////
    // errors
    ////

    // Returns message indicating the serial number was not found. This only
    // occurs when "Country of origin" is "not sure" and no match was found.
    function serialNumberWasNotFound() { return utility.createMessageObject('error', false, errors.notFound) }

    // Returns message indicating the serial number did not match the
    // "Country of origin" suggested by the visitor. This only occurs when
    // "Country of origin" is any named country and no match is found.
    function countryOfOriginDidNotMatchSerialNumber() {
      return utility.createMessageObject('error', false, errors.noMatch)
    }

    return serialNumberCheckerModule
})
