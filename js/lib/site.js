requirejs(['./serialNumberChecker'], function(serialNumberChecker) {

  var submitButton;

  submitButton = document.getElementById('serial-number-check-button')

  submitButton.addEventListener('click', function() {
    event.preventDefault()
    var serialNumber, country, message;

    serialNumberCheckerModule = new serialNumberChecker()

    serialNumber = document.getElementById('serial-number').value
    country      = document.getElementById('country').value

    message = serialNumberCheckerModule.validLength(serialNumber)

    if (message.status === 'ok' && message.state === true) {

      serialNumber = serialNumber.toLowerCase()

      message = serialNumberCheckerModule.processForm(serialNumber, country)
    }

    alert(message.message)

  })
})
