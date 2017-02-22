define(['../utility'], function(utility) {
  var utility;

  utility = new utility()

  var chinaModule = function() {

    data = {
      minimumPrefixSize: 3,
      maximumPrefixSize: 6,
      prefixes: {
        'ca5': '1995', 'ca6': '1996', 'ca7': '1997', 'ca8': '1998', 'ca9': '1999', 'cae95': '1995', 'cae96': '1996',
        'cae97': '1997', 'cae98': '1998', 'cae99': '1999', 'cae00': '2000', 'cae01': '2001', 'cae02': '2002',
        'cae03': '2003', 'cae04': '2004', 'cae05': '2005', 'cae06': '2006', 'cae07': '2007', 'cae08': '2008',
        'cae09': '2009', 'cae10': '2010', 'cae11': '2011', 'cd5': '1995', 'cd6': '1996', 'cd7': '1997', 'cd8': '1998',
        'cd9': '1999', 'cgrl95': '1995', 'cgrl96': '1996', 'cgrl97': '1997', 'cgrl98': '1998', 'cgrl99': '1999',
        'cgrl00': '2000', 'cgrl01': '2001', 'cgrl02': '2002', 'cgrl03': '2003', 'cgrl04': '2004', 'cgrl05': '2005',
        'cgrl06': '2006', 'cgrl07': '2007', 'cgrl08': '2008', 'cgrl09': '2009', 'cgrl10': '2010', 'cgrl11': '2011',
        'cgs95': '1995', 'cgs96': '1996', 'cgs97': '1997', 'cgs98': '1998', 'cgs99': '1999', 'cgs00': '2000',
        'cgs01': '2001', 'cgs02': '2002', 'cgs03': '2003', 'cgs04': '2004', 'cgs05': '2005', 'cgs06': '2006',
        'cgs07': '2007', 'cgs08': '2008', 'cgs09': '2009', 'cgs10': '2010', 'cgs11': '2011', 'cj5': '1995',
        'cj6': '1996', 'cj7': '1997', 'cj8': '1998', 'cj9': '1999', 'co5': '1995', 'co6': '1996', 'co7': '1997',
        'co8': '1998', 'co9': '1999', 'cob95': '1995', 'cob96': '1996', 'cob97': '1997', 'cob98': '1998',
        'cob99': '1999', 'cob00': '2000', 'cob01': '2001', 'cob02': '2002', 'cob03': '2003', 'cob04': '2004',
        'cob05': '2005', 'cob06': '2006', 'cob07': '2007', 'cob08': '2008', 'cob09': '2009', 'cob10': '2010',
        'cob11': '2011', 'cos95': '1995', 'cos96': '1996', 'cos97': '1997', 'cos98': '1998', 'cos99': '1999',
        'cos00': '2000', 'cos01': '2001', 'cos02': '2002', 'cos03': '2003', 'cos04': '2004', 'cos05': '2005',
        'cos06': '2006', 'cos07': '2007', 'cos08': '2008', 'cos09': '2009', 'cos10': '2010', 'cos11': '2011',
        'ct5': '1995', 'ct6': '1996', 'ct7': '1997', 'ct8': '1998', 'ct9': '1999', 'cxs95': '1995', 'cxs96': '1996',
        'cxs97': '1997', 'cxs98': '1998', 'cxs99': '1999', 'cxs00': '2000', 'cxs01': '2001', 'cxs02': '2002',
        'cxs03': '2003', 'cxs04': '2004', 'cxs05': '2005', 'cxs06': '2006', 'cxs07': '2007', 'cxs08': '2008',
        'cxs09': '2009', 'cxs10': '2010', 'cxs11': '2011', 'cy1': '2001', 'cy2': '2002', 'cy3': '2003', 'cy4': '2004',
        'cy5': '2005', 'cy6': '2006', 'cy7': '2007', 'cy8': '2008', 'cy95': '1995', 'cy96': '1996', 'cy97': '1997',
        'cy98': '1998', 'cy99': '1999', 'cy00': '2000', 'cy01': '2001', 'cy02': '2002', 'cy03': '2003', 'cy04': '2004',
        'cy05': '2005', 'cy06': '2006', 'cy07': '2007', 'cy08': '2008', 'cy09': '2009', 'cy10': '2010', 'cy11': '2011',
        'nc5': '1995', 'nc6': '1996', 'nc7': '1997', 'nc8': '1998', 'nc9': '1999', 'yn5': '1995', 'yn6': '1996',
        'yn7': '1997', 'yn8': '1998', 'yn9': '1999'
      }
    }

    // Iterates over possible serial numbers from China and checks against the
    // serial number.
    // Examples:
    //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
    //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
    //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
    this.isSerialNumberFromChina = function(serialNumber) {
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

  return chinaModule

})
