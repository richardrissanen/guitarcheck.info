define(['../utility'], function(utility) {
  var utility;

  utility = new utility()

  var koreaModule = function() {

    data = {
      minimumPrefixSize: 2,
      maximumPrefixSize: 4,
      prefixes: {
        'cn0': '1990', 'cn1': '1991', 'cn2': '1992', 'cn3': '1993', 'cn4': '1994', 'cn5': '1995', 'cn6': '1996',
        'cn7': '1997', 'e7': '1987', 'e8': '1988', 'e9': '1989', 'e0': '1990', 'e1': '1991', 'e2': '1992', 'e3': '1993',
        'e4': '1994', 'kc97': '1997', 'kc98': '1998', 'kc99': '1999', 'kc00': '2000', 'kc01': '2001', 'kc02': '2002',
        'kc03': '2003', 'kc04': '2004', 'kc05': '2005', 'kc06': '2006', 'kc07': '2007', 'kc08': '2008', 'kc19': '2019',
        'kc10': '2010', 'kc11': '2011', 'kc12': '2012', 'kc13': '2013', 'kc14': '2014', 'kc15': '2015', 'kc16': '2016',
        'kc17': '2017', 'kv97': '1997', 'kv98': '1998', 'kv99': '1999', 'kv00': '2000', 'kv01': '2001', 'kv02': '2002',
        'kv03': '2003', 'kv04': '2004', 'kv05': '2005', 'kv06': '2006', 'kv07': '2007', 'kv08': '2008', 'kv19': '2019',
        'kv10': '2010', 'kv11': '2011', 'kv12': '2012', 'kv13': '2013', 'kv14': '2014', 'kv15': '2015', 'kv16': '2016',
        'kv17': '2017','m0': '1990', 'm1': '1991', 'm2': '1992', 'm3': '1993', 'm4': '1994', 'm5': '1995', 'm6': '1996',
        'm7': '1997', 'm8': '1998', 'm9': '1999', 'nk0': '1990', 'nk1': '1991', 'nk2': '1992', 'nk3': '1993',
        'nk4': '1994', 'nk5': '1995', 'nk6': '1996', 'nk7': '1997', 'nk8': '1998', 'nk9': '1999', 's9': '1989',
        's0': '1990', 's1': '1991', 's2': '1992', 's3': '1993', 's4': '1994', 'vn0': '1990', 'vn1': '1991',
        'vn2': '1992', 'vn3': '1993', 'vn4': '1994', 'vn5': '1995', 'vn6': '1996', 'vn7': '1997'
      }
    }

    // Iterates over possible serial numbers from Korea and checks against the
    // serial number.
    // Examples:
    //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
    //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
    //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
    this.isSerialNumberFromKorea = function(serialNumber) {
      var message;

      for (var i = data.minimumPrefixSize; i <= data.maximumPrefixSize; i++) {

        if (typeof message !== 'undefined') { break }

        serialNumberPrefix = serialNumber.substring(0, i)

        // console.log(serialNumberPrefix);

        message = data.prefixes[serialNumberPrefix]

        // console.log('message == ' + message);


      }

      return utility.createMessageObject('ok', true, message)    }

  }

  return koreaModule

})
