const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Conexión a MongoDB
const uri = 'mongodb://localhost:27017/consultorasDB';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

  const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/consultorasDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos consultorasDB');
  })
  .catch((err) => {
    console.error('Error de conexión: ', err);
  });


// Esquema y modelo para usuarios
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

// Endpoint de prueba
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });
    if (user) {
        res.json({ success: true, message: 'Inicio de sesión exitoso' });
    } else {
        res.json({ success: false, message: 'Usuario o contraseña incorrectos' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});