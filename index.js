const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));
var data = require('./data/test.json');
      

app.get('/', (req, res) => {
  var title = 'Home Page';
  res.render('pages/index',{'title':title});
});
app.get('/food', (req, res) => {
  var title = ' Food Page';
  res.render('pages/food',{'title':title});
});
app.get('/purpose', (req, res) => {
  var title = ' Purpose Page';
  res.render('pages/purpose',{'title':title});
});
app.get('/about', (req, res) => {
  var title = 'About Page';
  res.render('pages/about',{'title':title});
});
app.get('/users', function(req, res) {
  var title = 'Users Page';
  res.render('users/index',{
    title:title,
    users: data
  });
  });

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});
app.get('/quotes', (req, res) => {
  var title = 'quotes Page';
  res.render('pages/quotes',{'title':title});
});
app.get('/movies', (req, res) => {
  var title = ' Movies Page';
  res.render('pages/movies',{'title':title});
});
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});





























