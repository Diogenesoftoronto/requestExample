const request = require('request')

const url = 'https://github.com/'
request(url, function callin(error, response, body) {
  console.log('error: ', error, 'response: ', response)
  setTimeout(function () {
    console.log("here comes the rest of the page...")
    console.log('\n')
    console.log(body)

  }, 1200)
})