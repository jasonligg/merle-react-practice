const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db-mock');

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json('hello world');
});

app.get('/api/messages', (req, res) => {
  res.json(db.messages);
  logDb('messages');
});

app.post('/api/messages', (req, res) => {
  const { alias, text } = req.body;
  const newMessage = { alias, text, postedAt: new Date() };
  db.messages.push(newMessage);
  res.status(201).json(newMessage);
  logDb('messages');
});

const logDb = (tableName) => {
  console.log(`\n${tableName.toUpperCase()}`);
  console.table(db[tableName]);
};

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`message board api running on ${PORT}`);
});