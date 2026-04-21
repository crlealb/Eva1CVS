const http = require('http');

const port = 3000;
// Lee la variable de entorno que inyectamos desde GitHub Actions -> Dockerfile
const appColor = process.env.APP_COLOR || 'Sin color definido';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // Imprime un mensaje en pantalla usando el color del entorno
  res.end(`
    <div style="background-color: ${appColor}; color: white; padding: 20px; font-family: sans-serif; text-align: center;">
        <h1>¡Hola TechMarket!</h1>
        <h2>Pipeline ejecutado con éxito.</h2>
        <p>Este es el entorno con color: <strong>${appColor}</strong></p>
    </div>
  `);
});

server.listen(port, () => {
  console.log(`Servidor de TechMarket corriendo en el puerto ${port}`);
});
