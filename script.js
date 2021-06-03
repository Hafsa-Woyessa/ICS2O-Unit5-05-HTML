let number = 0
let sentence = 'hello this is the number 3'

document.getElementById('button').addEventListener('click', square)

function square () {
  number = document.getElementById('text1').value

  number = number * number

alert(number)
}

// This line displays  a message
alert('The computer displays an alert')

alert('Click square to get a new result') // This line displays a  message
