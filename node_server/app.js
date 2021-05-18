// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('../views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if(request.url === '/cats') {
        fs.readFile('../views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if(request.url === '/cars/new') {
        fs.readFile('../views/cars_new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // CSS
    else if(request.url === '/style.css') {
        fs.readFile('../public/css/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if(request.url === '/carsnew_style.css') {
        fs.readFile('../public/css/carsnew_style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // Images
    else if(request.url === '/cars-1.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cars-1.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cars-2.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cars-2.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cars-3.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cars-3.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cars-4.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cars-4.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cars-5.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cars-5.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cars-6.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cars-6.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cars-7.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cars-7.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cars-8.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cars-8.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cars-9.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cars-9.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cars-10.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cars-10.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cars-11.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cars-11.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cars-12.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cars-12.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    }else if(request.url === '/cats-1.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cats-1.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cats-2.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cats-2.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cats-3.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cats-3.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cats-4.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cats-4.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cats-5.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cats-5.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cats-6.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cats-6.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cats-7.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cats-7.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cats-8.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cats-8.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/cats-9.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('../public/images/cats-9.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg/png'});
            response.write(contents);
            response.end();
        })
    }
    

    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('URL requested is not available.');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal windowcopy
console.log("Running in localhost at port 7077");