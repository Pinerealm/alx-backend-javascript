// A simple API server using Express
const express = require('express');

const app = express();
app.use(express.json());
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = parseFloat(req.params.id);
  if (Number.isNaN(id)) {
    res.status(404).send(`Cannot GET /cart/${req.params.id}`);
  } else {
    res.send(`Payment methods for cart ${id}`);
  }
});

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
