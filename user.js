const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

const User = require('./user');

const nuevoUsuario = new User({
  nombre: 'Laura Cubillos',
  correo: 'laura@example.com',
  contraseña: 'password123'
});

nuevoUsuario.save()
  .then((usuario) => {
    console.log('Usuario insertado: ', usuario);
  })
  .catch((err) => {
    console.error('Error al insertar usuario: ', err);
  });

