var express = require('express');
app = express();
const path = require('path');

app.use(express.static("public"));
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
  });

// Home route
app.get('/home', (req, res, next) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
  });

// About route
// app.get('/about', (req, res, next) => {
//     res.sendFile(path.join(__dirname, './views/about.html'))
// });
app.get('/about', (req, res, next) => {
    console.log('About route called');
    console.log(`File path: ${path.join(__dirname, './views/about.html')}`);
    res.sendFile(path.join(__dirname, './views/about.html'))
});


// Works route
app.get('/works', (request, response, next) => {
    res.sendFile(path.join(__dirname, './views/works.html'))
  });

app.listen(4000, () => console.log('My first app listening for lab express!'));