const express = require('express');
const SendMail = require('./controllers/Sendemail.js');

// import bodyParser from 'body-parser';
// import exphbs from 'express-handlebars';

// const __dirname = path.resolve();

const app = express();

//view engine setup
// app.engine('handlebars', exphbs.engine());
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'));
// //static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));

// //body  parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('i am server');
});

app.get('/SendMail', SendMail);
// app.post('/send', (req, res) => {
//   console.log(req.body);
// });

app.listen(3000, () => console.log('Server is started at 3000'));
