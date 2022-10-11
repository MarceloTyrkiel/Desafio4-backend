const express = require('express');
const app = express();
const PORT = 9000;
const server = app.listen(PORT,()=> console.log(`Server listening in PORT ${PORT}`));
server.on("error", err => console.log(`Error:${err}`));

const routerProductos = require('./routes/productos.js');

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use('/api',routerProductos);

app.use('/formularios', express.static(__dirname+'/public/index.html'));
