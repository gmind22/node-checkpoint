const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content type': 'text/html'})
    res.end('<h1>Hello Node!!!!</h1>')
})

server.listen(3000, () => console.log(`Server Started on http://localhost:${3000}`))