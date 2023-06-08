const express = require('express');
const mongoose = require('mongoose');
const productsRouter = require('./routes/routes');
require('dotenv').config();
const authenticate = require('./middlewares/authenticate');

const app = express();
const PORT = 3001;

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.use(express.json());

// Set up routes
app.use('/', productsRouter);
app.use('/products',productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});