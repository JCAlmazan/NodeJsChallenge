import express from 'express';

import morgan from 'morgan';

import cors from 'cors';

// Settings
const app = express();
app.set('appName', 'NodeJS Challenge');
app.set('port', 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default route
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to my NodeJs Challenge',
}));

app.listen(app.get('port'), () => {
  console.log(app.get('appName'));
  console.log('Server on port', app.get('port'));
});
