// CONVERTER PROPERTIES
const numberInput = document.querySelector('#fields-container input')
const selectedUnit = document.querySelector('#fields-container select')
const convertButton = document.querySelector('#converter-container button')

// RESULTS PROPERTIES
const celsiusResult = (document.querySelector('#celsius-result'))
const fahrenheitResult = (document.querySelector('#fahrenheit-result'))
const kelvinResult = (document.querySelector('#kelvin-result'))

// EVENTS
convertButton.addEventListener('click', (e) => {
  const numberValue = parseFloat(numberInput.value) // float
  const baseUnit = selectedUnit.value // string

  e.preventDefault()

  convertTemperature(numberValue, baseUnit)
})

// FUNCTIONS
function convertTemperature (value, unit) {
  let tempCelsius = Number
  let tempFahrenheit = Number
  let tempKelvin = Number

  switch (unit) {
    case 'celsius':
      tempCelsius = value
      tempFahrenheit = (value * 9 / 5) + 32
      tempKelvin = value + 273.15

      celsiusResult.innerHTML = tempCelsius
      fahrenheitResult.innerHTML = tempFahrenheit
      kelvinResult.innerHTML = tempKelvin

      break

    case 'fahrenheit':
      tempCelsius = (value - 32) * 5 / 9
      tempFahrenheit = value
      tempKelvin = (value - 32) * 5 / 9 + 273.15

      celsiusResult.innerHTML = tempCelsius
      fahrenheitResult.innerHTML = tempFahrenheit
      kelvinResult.innerHTML = tempKelvin

      break

    case 'kelvin':
      tempCelsius = value - 273.15
      tempFahrenheit = (value - 275.17) * 9 / 5 + 32
      tempKelvin = value

      celsiusResult.innerHTML = tempCelsius
      fahrenheitResult.innerHTML = tempFahrenheit
      kelvinResult.innerHTML = tempKelvin

      break
  }
}
