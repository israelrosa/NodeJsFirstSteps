import { createConnection } from 'typeorm';

createConnection()
  .then(() => {
    console.log('Conexão bem sucedida');
  })
  .catch(error => console.log(error));
