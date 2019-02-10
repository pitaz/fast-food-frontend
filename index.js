const express = require('express');
const path = require('path');

const port = process.env.PORT || 4001;

const app = express();
const client = path.join(__dirname, './dist/index.html');
app.use(express.static(path.join(__dirname, './dist')));

app.get('*', (req, res) => {
  res.sendFile(client);
});

app.listen(port, () => {
  console.log(`connected on port ${port}`);
});
