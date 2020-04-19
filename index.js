const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use('/abc',express.static('public'));
app.set('view engine', 'twig');
app.set('views', './public/view');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/',(req, res, next)=>{

	res.render('index',{title:"PUG example", h1:"Hello Brij"});
});

app.post('/',(req, res, next)=>{

	res.render('show',{title:"User Detail", h1:"Hello Brij", uname:req.body.uname, pass:req.body.pss});
});

app.get('/sum/:a-:b',(req, res)=>{

	res.render('sum',{title:"SUM", h1:"Hello Brij.", add:parseInt(req.params.a) + parseInt(req.params.b), sub:parseInt(req.params.a) - parseInt(req.params.b), mul:parseInt(req.params.a) * parseInt(req.params.b), div:parseInt(req.params.a) / parseInt(req.params.b)});
});

app.listen(1200, ()=>console.log('server created'));