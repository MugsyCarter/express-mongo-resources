const port = process.env.PORT || 3200;
const server = require('./lib/server.js'); 

server.listen(port, ()=>{
    console.log('app started on port ', server.address().port);
});
