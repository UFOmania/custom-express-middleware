

const custom_middleware = (req,res,next)=>{
    req.the_middleware = 'some data';
    req.req_first_contact = Date.now();
    next();
}

export default custom_middleware;