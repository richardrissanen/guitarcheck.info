requirejs(['./serialNumberChecker'], function(serialNumberChecker) {

  var submitButton;

  submitButton = document.getElementById('serial-number-check-button')

  submitButton.addEventListener('click', function() {
    event.preventDefault()
    var serialNumberCheckerModule, unEditedSerialNumber, dashRemovedSerialNumber, serialNumber, country, message;

    serialNumberCheckerModule = new serialNumberChecker()

    unEditedSerialNumber    = document.getElementById('serial-number').value
    dashRemovedSerialNumber = unEditedSerialNumber.replace('-', '')
    country                 = document.getElementById('country').value

    message = serialNumberCheckerModule.validLength(dashRemovedSerialNumber)

    if (message.status === 'ok' && message.state === true) {

      serialNumber = dashRemovedSerialNumber.toLowerCase()

      message = serialNumberCheckerModule.processForm(serialNumber, country)
    }

    alert(message.message)

  })
})
