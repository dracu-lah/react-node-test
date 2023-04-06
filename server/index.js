const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Add this line

app.post('/username', (req, res) => {
  console.log(req.body.username);
  res.send('Username received');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
