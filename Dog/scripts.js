const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'dog.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://dog.ceo/api/breed/Borzoi/images/random', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(dog => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = dog.title

      const img = document.createElement('img')
      img.src = "https://dog.ceo/api/breed/Borzoi/images/random"

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()