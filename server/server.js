const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

// Setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(`${__dirname + '/../'}/dist`));

// express will serve up index.html if it doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../', 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));