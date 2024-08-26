import express from 'express'
const app = express();

import custom_middleware from './custom_middleware.js';

//tell express to use the middleware
app.use(custom_middleware)

app.get('/',(req,res)=>{
    //printing the injected middleware 
    console.log(req.the_middleware)

    //const req_time = Date.now()-req.req_first_contact;
    res.status(200).send(req.req_first_contact.toString())
    //that was a failed try to send the request time back to the client
})


app.listen(5522 , ()=>console.log('app is started on port 5522'));