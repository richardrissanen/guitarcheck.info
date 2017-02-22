define(['../utility'], function(utility) {
  var utility;

  utility = new utility()

  var indiaModule = function() {

    data = {
      minimumPrefixSize: 4,
      maximumPrefixSize: 6,
      prefixes: {
        'cs07': '2007',
        'nhs10': '2010',
        'nhs11': '2011',
        'nhsa09': '2009',
        'nhsd09': '2009',
        'nhse09': '2009',
        'nhsf09': '2009',
        'nhsg09': '2009',
        'nhsh09': '2009',
        'nhsi09': '2009',
        'nhsj08': '2008',
        'nhsj09': '2009',
        'nshk09': '2009',
        'sh07': '2007',
        'sh08': '2008',
        'zssh07': '2007',
        'zssh08': '2008'
      }
    }

    // Iterates over possible serial numbers from India and checks against the
    // serial number.
    // Examples:
    //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
    //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
    //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
    this.isSerialNumberFromIndia = function(serialNumber) {
      // count down from max size prevents false positve if serial numebers are
      // NHS and NHSK. NHS would catch all NHSK's if counting up.
      for (var i = data.maximumPrefixSize; i >= data.minimumPrefixSize; i--) {

        serialNumberPrefix = serialNumber.substring(0, i)
        message = data.prefixes[serialNumberPrefix]

        if (typeof message !== 'undefined') { break }
      }

      return utility.createMessageObject('ok', true, message)
    }

  }

  return indiaModule

})
