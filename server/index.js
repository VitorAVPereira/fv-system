import express, { json } from 'express';
import cors from 'cors';
import sequelize from './src/config/database.js';
import servicesRoute from './src/routes/services.js'
const app = express();

app.use(cors());
app.use(json());
app.use('/services', servicesRoute);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('DB and Server status OK, port:3000 ');
  });
}).catch((error) => console.error("Erro na sincronização:", error));