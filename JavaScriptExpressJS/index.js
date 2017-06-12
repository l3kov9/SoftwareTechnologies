/**
 * Created by Lekov on 10.6.2017 г..
 */
const cat=require('./cat');

console.log(cat.name);

const http=require('http');

http
    .createServer((req,res)=>{
        res.write('Hi from Node');
        res.end();
    })
    .listen(1234);