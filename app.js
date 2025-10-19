const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;
const rootPath = process.cwd();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(rootPath, 'public')));
app.use(express.static(path.join(rootPath, 'public', 'css')));
app.use(express.static(path.join(rootPath, 'public', 'js')));
app.use(express.static(path.join(rootPath, 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(rootPath, 'views', 'index.html'));
});

app.get('/countdown', (req, res) => {
  res.sendFile(path.join(rootPath, 'views', 'countdown.html'));
});

app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(rootPath, 'sitemap.xml'));
});

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});

module.exports = app;