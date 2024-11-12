// server.js
const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la raíz del proyecto
app.use(express.static(path.join(__dirname, '.')));

// Redirigir todas las solicitudes a index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'infex.html'));
});

// Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
