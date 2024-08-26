Custom Middleware Example
This is a basic example demonstrating how to create and use custom middleware in an Express.js application.

 === Files ===

custom_middleware.js
This file defines a custom middleware function that injects some data into the req object, which can then be accessed in subsequent request handling.

app.js
This file sets up a basic Express.js server, imports the custom middleware, and applies it to the application using app.use(). The server listens on port 5522.

 ===   ===

How It Works
The custom middleware function adds a property the_middleware with the value 'some data' to the req object.
This middleware is applied globally using app.use(), so it runs for every incoming request.
In the root route handler (app.get('/')), the the_middleware property is accessed from the req object and logged to the console.
The server listens on port 5522 and logs a message when it start


Running the Code
Ensure you have Node.js installed.
Clone or download this repository.
Run npm install to install the dependencies (if any).
Start the server with node app.js.
Open your browser and navigate to http://localhost:5522.
Check the console for the output of the injected middleware data.