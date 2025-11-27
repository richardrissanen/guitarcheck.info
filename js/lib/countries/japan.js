define(['../utility'], function(utility) {
  var utility;

  utility = new utility()

  var japanModule = function() {

    data = {
      minimumPrefixSize: 1,
      maximumPrefixSize: 2,
      prefixes: {
        'a': '(mij) 1985 - 1986 | (cij) 1997 - 1998',
        'b': '(mij) 1985 - 1986 | (cij) 1998 - 1999',
        'c': '1985 - 1986',
        'e': '1984 - 1987',
        'f': '1986 - 1987',
        'g': '1987 - 1988',
        'h': '1988 - 1989',
        'i': '1989 - 1990',
        'j': '1989 - 1990',
        'jv': '1982 - 1984',
        'k': '1990 - 1991',
        'l': '1991 - 1992',
        'm': '1992 - 1993',
        'n': '(mij) 1993 - 1994 | (cij) 1995 - 1996',
        'o': '1997 - 1998',
        'p': '(mij) 1993 - 1994 | (cij) 1999 - 2002',
        'q': '(mij) 1993 - 1994 | (cij) 2002 - 2004',
        'r': '2004 - 2006',
        's': '(mij) 1994 - 1995 | (cij) 2006 - 2008',
        'sq': '1983 - 1984',
        't': '(mij) 1994 - 1995 | (mij "post 2006") 2007 - 2010',
        'u': '(mij) 1995 - 1996 | (mij "post 2006") 2010 - 2011',
        'v': '1996 - 1997'
      }
    }

    // Iterates over possible serial numbers from Japan and checks against the
    // serial number.
    // Examples:
    //   HAPPY PATH:   returns { status: 'ok', state: true message: "1985" }
    //   FAILURE PATH: returns { status: 'ok', state: false, message: null }
    //   ERROR PATH:   returns { status: 'error', state: false, message: <error> }
    this.isSerialNumberFromJapan = function(serialNumber) {
      // count down from max size so SQ will run before S. Otherwise S will
      // catch all SQ serial numbers. Same for JV before J
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

  return japanModule

})
