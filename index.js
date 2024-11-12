
const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// Set the view engine to hbs
app.set('view engine', 'hbs');

// Set the directory where views are stored
app.set('views', path.join(__dirname, 'views'));

// Serve static files (e.g., images, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route that renders an HTML page using HBS
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/contact', (req, res) => {
    res.render('contact');
  });
  app.get('/about', (req, res) => {
    res.render('aboutus');
  });
  app.get('/movies', (req, res) => {
    res.render('library');
  });
  app.get('/api/movies', async (req, res) => {
    const data =await searchData()
    res.send(data);
  });

  app.get('/test', async (req, res) => {
    const data =await searchData()
    res.render("home",{data});
  });



// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  
});

const searchData = async ()=>{
    const response = await fetch("http://localhost:1111",{
      "method":"GET",
      "headers":{
        "Content-type":"application/json",
        "origin":"http://localhost:3000"
      }
    })
    if(response.ok){
const data = await response.json()
    console.log(data)
    return data
    }else{
      console.log("failed to fetch")
    }
    
    }




