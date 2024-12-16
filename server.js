const express = require('express');


const app = express();
const port = process.env.PORT || 8080;

// Streži statične datoteke iz Angular aplikacije
app.use(express.static('./'));

// Preusmeri vse poti na `index.html` (za Angular router)
app.get('/*', (req, res) => {
  res.sendFile('./');
});

// Zaženi strežnik
app.listen(port, () => {
  console.log(`Angular aplikacija je dostopna na http://localhost:${port}`);
});
