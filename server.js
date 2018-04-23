



const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const model = require('./src/db/model.js');
const port = 3001;
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, './build')));

app.listen(port, () => {   console.log(`App is listening to port ${port}`); });

app.get('/projects', (req, res) => {
  model.getProjects()
  .then(response => {
  res.send(response);
  }); });
  app.put('/projects/views', (req, res) => {
  const { project } = req.body;
  model.incrementProjectViews(project)
  .then(response => {     res.send(response);   }); });
  app.put('/projects/likes', (req, res) => {
  const { project } = req.body;
  model.incrementProjectLikes(project)
  .then(response => {     res.send(response);   }); });
  
  module.exports = app;
  
  
  