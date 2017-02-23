define(['../utility'], function(utility) {
  var utility;

  utility = new utility()

  var indonesiaModule = function() {

    data = {
      minimumPrefixSize: 4,
      maximumPrefixSize: 5,
      prefixes: {
        'ic96': '1996', 'ic97': '1997', 'ic98': '1998', 'ic99': '1999', 'ic00': '2000', 'ic01': '2001', 'ic02': '2002',
        'ic03': '2003', 'ic04': '2004', 'ic05': '2005', 'ic06': '2006', 'ic07': '2007', 'ic08': '2008', 'ic09': '2009',
        'ic10': '2010', 'ic11': '2011', 'ic12': '2012', 'ic13': '2013', 'ic14': '2014', 'ic15': '2015', 'ic16': '2016',
        'ic17': '2017', 'ics96': '1996', 'ics97': '1997', 'ics98': '1998', 'ics99': '1999', 'ics00': '2000',
        'ics01': '2001', 'ics02': '2002', 'ics03': '2003', 'ics04': '2004', 'ics05': '2005', 'ics06': '2006',
        'ics00': '2007', 'ics08': '2008', 'ics09': '2009', 'ics10': '2010', 'ics11': '2011', 'ics12': '2012',
        'ics13': '2013', 'ics14': '2014', 'ics15': '2015', 'ics16': '2016', 'ics17': '2017', 'is96': '1996',
        'is97': '1997', 'is98': '1998', 'is99': '1999', 'is00': '2000', 'is01': '2001', 'is02': '2002', 'is03': '2003',
        'is04': '2004', 'is05': '2005', 'is06': '2006', 'is07': '2007', 'is08': '2008', 'is09': '2009', 'is10': '2010',
        'is11': '2011', 'is12': '2012', 'is13': '2013', 'is14': '2014', 'is15': '2015', 'is16': '2016', 'is17': '2017',
        'si96': '1996', 'si97': '1997', 'si98': '1998', 'si99': '1999', 'si00': '2000', 'si01': '2001', 'si02': '2002',
        'si03': '2003', 'si04': '2004', 'si05': '2005', 'si06': '2006', 'si00': '2007', 'si08': '2008', 'si09': '2009',
        'si10': '2010', 'si11': '2011', 'si12': '2012', 'si13': '2013', 'si14': '2014', 'si15': '2015', 'si16': '2016',
        'si17': '2017'
      }
    }

    // Iterates over possible serial numbers from Indonesia and checks against the
    // serial number.
    // Examples:
    //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
    //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
    //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
    this.isSerialNumberFromIndonesia = function(serialNumber) {
      // count down from max size so ICS will run before IC. Otherwise IC will
      // catch all ICS serial numbers.
      for (var i = data.maximumPrefixSize; i >= data.minimumPrefixSize; i--) {

        serialNumberPrefix = serialNumber.substring(0, i)
        message = data.prefixes[serialNumberPrefix]

        console.log(serialNumberPrefix);
        console.log('message: ' + message);

        if (typeof message !== 'undefined') { break }
      }

      return utility.createMessageObject('ok', true, message)
    }

  }

  return indonesiaModule

})
