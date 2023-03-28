// const hello = (welcomeNotice) => {
//     console.group(welcomeNotice)
// }
// hello('the file is working')

//importing http for creating server creation mangement 
const http = require('http');
const fs = require('fs')
const _ = require('lodash');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // //lodash 
    // const num = _.random(0, 20);
    // console.log(num)
    
    // //running an function once
    // const greet = _.once(
    //     () => {
    //         console.log('we run only once when we use lodash once')
    //     }
    // )

    // greet()
    // greet()

    // set header content-type
    // res.setHeader('content-type', 'text/plain')
    res.setHeader('content-type', 'text/html')

    let path = '../Views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('location', '/about'); 
            res.end();
            break;
        default:
            path += '404Error.html';
            res.statusCode = 404;
            break;
    }

    //writing on the webpage
    //fs,write('we successfully inset an text in html page')


    //Accessing HTML page
    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err)
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })


    //ending the response
    // res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('server is UP on port 3000')
})

