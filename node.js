const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    
    var data = {name:'DevDoctor',
    
        hobbies:['coding', 'teaching', 'travel']}
    
     
    
    res.render('home', {data:data});
    
});
    
     
    
var server = app.listen(4000, function() {
    
    console.log('Server running at http://localhost:4000/')
    
});