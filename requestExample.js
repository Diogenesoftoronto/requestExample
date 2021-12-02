const request = require('request')

const url = 'https://www.example.edu/'
request(url, function callin(error, response, body) {
  console.log('error: ', error, 'response: ', response)
  setTimeout(function () {
    console.log("here comes the rest of the page...")
    console.log('\n')
    console.log(body)

  }, 1200)
})
const net = require('net');
const conn = net.createConnection({ 
  host: url,
  port: 80
});
conn.setEncoding('UTF8');
conn.on('connect', () => {
  console.log(`Connected to server!`);

  conn.write(`GET / HTTP/1.1\r\n`);
  conn.write(`Host: example.edu\r\n`);
  conn.write(`\r\n`);
});