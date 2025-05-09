const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Forty7 AI backend is live!');
});

app.post('/webhook/tally', (req, res) => {
  const submission = req.body;

  console.log('🔥 New Tally submission received:');
  console.log(JSON.stringify(submission, null, 2));

  res.status(200).send('Webhook received successfully');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
