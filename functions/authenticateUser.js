exports.handler = async (event, context) => {
    const auth = require('basic-auth');
    const compare = require('tsscmp');
    
    // Define las credenciales de usuario y contraseña
    const credentials = [
      { username: 'diego', password: '123456' },
      { username: 'usuario2', password: 'contrasena2' },
      // Agrega más usuarios y contraseñas si es necesario
    ];
    
    // Obtiene las credenciales proporcionadas por el usuario
    const user = auth(event);
    
    // Verifica si las credenciales son válidas
    const isValidCredentials = (user) => {
      for (const credential of credentials) {
        if (compare(user.name, credential.username) && compare(user.pass, credential.password)) {
          return true;
        }
      }
      return false;
    };
    
    // Si las credenciales son válidas, permite el acceso
    if (isValidCredentials(user)) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Autenticación exitosa' }),
      };
    }
    
    // Si las credenciales no son válidas, devuelve un error
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Credenciales inválidas' }),
      headers: {
        'WWW-Authenticate': 'Basic realm="Acceso restringido"',
      },
    };
  };
  