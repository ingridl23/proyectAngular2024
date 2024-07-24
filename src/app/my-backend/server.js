const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Configurar la conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'registromarykayy'
});

connection.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos: ', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Ruta para manejar una consulta GET
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM tu_tabla';
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// Ruta para manejar una consulta POST
app.post('/data', (req, res) => {
  const data = req.body;
  const query = 'INSERT INTO tu_tabla SET ?';
  connection.query(query, data, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json({ message: 'Datos insertados correctamente', id: results.insertId });
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
