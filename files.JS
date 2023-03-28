const fs = require('fs')
//reading files
    // fs.readFile('./test.txt', (err, data) => {
    //     if(err){
    //         console.log(err)
    //     }
    //     console.log(data.toString())
    // });
//writing files
    fs.writeFile('./Views/404Error.html', 'Error page Html page is created', () => {
        console.log('created a view folder and file called error.html');
    });
//directories
    // if (!fs.existsSync('./Views')){
    //     fs.mkdir('./Views', (err) => {
    //         if (err) {
    //             console.log(err)
    //         }
    //         console.log('Folder Created')
    //     })
    //  } else {
    //     fs.rmdir('./Views', (err) => {
    //         if (err){
    //             console.log(err)
    //         }
    //         console.log('folder is deleted')
    //     })
    //  }

//deleting files

    //  if (fs.existsSync('./trail/trailBlog.txt')){
    //     fs.unlink('./trail/trailBlog.txt', (err) => {
    //         if (err){
    //             console.log(err)
    //         }
    //         console.log('the file is deleted')
    //     })
    //  }


