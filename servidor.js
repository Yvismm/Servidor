require("colors");
let http = require("http");
let express = require("express");
let bodyParser = require("body-parser")

let app = express();
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set('views', './views');

let server = http.createServer(app);
server.listen(80);





console.log("Servidor Rodando ...".rainbow);

/////////////////////////////////////////////////

app.post("/cadastrar", function(req, res){
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    let senha = req.body.senha;
    let email = req.body.email;
    

    console.log(nome, sobrenome, email, senha);
    res.render("resposta.ejs", {nome_template: "Yvis", sobrenome_template: "Morales"});
    

})

app.get("/cadastrar", function(req, res){
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    let senha = req.query.senha;
    let email = req.query.email;
    

    console.log(nome, sobrenome, email, senha);
    res.render("resposta.ejs", {nome_template: nome, sobrenome_template: sobrenome});
    

})