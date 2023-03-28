const express = require('express');


//creating an instance of the express
const app = express();

//Registering EJS
app.set('view engine', 'ejs');
//setting up an new folder for ejs templates
app.set('views', 'vueJS');

//listening to request
app.listen(3000)

// app.get('/', (req, res) => {
//     // res.send('<h1 style="padding: 20px; text-align: center; font-style: capitalize">We Have Implemnted Express</h1> <hr>')
//     res.sendFile('./Views/index.html', { root: __dirname })
// })

//adding an second route
// app.get('/about', (req, res) => {
//     // sending an text
//     // res.send('<h1 style="padding: 20px; text-align: center; font-style: capitalize">Hello i am Suresh Antony with an Express     About Page</h1> <hr>')

//     //sending an html page
//     res.sendFile('./Views/about.html', { root: __dirname })
// })

//using re-direct
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

// //crreating an 404 page in express
// app.use((req, res) => {
//     res.status(404).sendFile('./Views/404Error.html', { root: __dirname });
// })

//=======================================================================================================================

// Routing to new vue engine

//creating home page using view
app.get('/', (req,res) => {
    //creating an demi data that can be displayed in the template
    const blogs = [
        {title: 'suresh demo', content: 'An demo content used for populating an demi respoonse data', date: '07-2-20123'},
        {title: 'Antony D', 
            content: 'An second demo content used for populating an demi respoonse data', 
            date: '07-2-20123'
        },
        {title: 'Dinesh', 
            content: 'An third demo content used for populating an demi respoonse data', 
            date: '07-2-20123'
        }
    ]
    res.render('index', { title: 'Home', blogs });
})

//creating about page using Vue
app.get('/about', (req,res) => {
    res.render('about', { title: 'About' });
})

//creating re-direct in vue js
app.get('/contentCreation', (req,res) => {
    res.render('create', { title: 'Create' });
})


//creating 404 page using Vue
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})

