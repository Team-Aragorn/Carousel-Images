const express = require('express');
const db = require('../database/database.js');

const app = express();
const PORT = 3003;

app.use(express.static(`${__dirname}/../public`));
app.use(express.json());

app.get('/api/game', (req, res) => {
  db.getGameForTopCarousel((err, result) => {
    if (err) {
      res.status(404).end();
    } else {
      res.status(200).send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening at port:${PORT}`);
});
