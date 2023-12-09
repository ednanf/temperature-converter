// CONVERTER PROPERTIES
const numberInput = document.querySelector('#fields-container input')
const selectedUnit = document.querySelector('#fields-container select')
const convertButton = document.querySelector('#converter-container button')

// RESULTS PROPERTIES
const resultsContainer = document.querySelector('#results-container')
const celsiusResult = (document.querySelector('#celsius-result'))
const fahrenheitResult = (document.querySelector('#fahrenheit-result'))
const kelvinResult = (document.querySelector('#kelvin-result'))
const resetButton = document.querySelector('#reset-text p')

// const pCelsius = document.querySelector('#p-celsius')
// // const pFahrenheit = document.querySelector('#p-fahrenheit')
// const pKelvin = document.querySelector('#p-kelvin')

// EVENTS
convertButton.addEventListener('click', (e) => {
  const numberValue = parseFloat(numberInput.value) // float
  const baseUnit = selectedUnit.value // string

  e.preventDefault()

  if (!numberValue) { return }

  resultsContainer.style.display = 'block'

  convertTemperature(numberValue, baseUnit)
})

resetButton.addEventListener('click', reset)

// FUNCTIONS
function convertTemperature (value, unit) {
  let tempCelsius = Number
  let tempFahrenheit = Number
  let tempKelvin = Number

  switch (unit) {
    case 'celsius':
      tempCelsius = (value).toFixed(2)
      tempFahrenheit = ((value * 9 / 5) + 32).toFixed(2)
      tempKelvin = (value + 273.15).toFixed(2)

      celsiusResult.innerHTML = tempCelsius
      fahrenheitResult.innerHTML = tempFahrenheit
      kelvinResult.innerHTML = tempKelvin

      disableInterface()

      break

    case 'fahrenheit':
      tempCelsius = ((value - 32) * 5 / 9).toFixed(2)
      tempFahrenheit = (value).toFixed(2)
      tempKelvin = ((value - 32) * 5 / 9 + 273.15).toFixed(2)

      celsiusResult.innerHTML = tempCelsius
      fahrenheitResult.innerHTML = tempFahrenheit
      kelvinResult.innerHTML = tempKelvin

      disableInterface()

      break

    case 'kelvin':
      tempCelsius = (value - 273.15).toFixed(2)
      tempFahrenheit = ((value - 275.17) * 9 / 5 + 32).toFixed(2)
      tempKelvin = (value).toFixed(2)

      celsiusResult.innerHTML = tempCelsius
      fahrenheitResult.innerHTML = tempFahrenheit
      kelvinResult.innerHTML = tempKelvin

      disableInterface()

      break
  }
}

function reset () {
  resultsContainer.style.display = 'none'
  convertButton.disabled = false
  selectedUnit.disabled = false
  numberInput.disabled = false
  numberInput.value = ''
  selectedUnit.value = 'celsius'
}

function disableInterface () {
  convertButton.disabled = true
  selectedUnit.disabled = true
  numberInput.disabled = true
}
