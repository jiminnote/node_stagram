const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index');
const dotenv = require('dotenv')
dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use(cors());
app.use('', routes);

const port = process.env.PORT || 8000 ;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
