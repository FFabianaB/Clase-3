// Modulo para gestionar protocolo http
const http = require('http');
const host = '127.0.0.1'; //localhost
const port = 3000;

const server = http.createServer((req, res) => {
    //funcion anonima que se ejecuta cuando se recibe una peticion

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Achura');
})
server.listen(port, host, () => {
    console.log(`El Server está corriendo en http://${host}:${port}`);
})