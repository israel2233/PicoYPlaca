import express = require('express');
import model = require('./models/models');
import response = require('./network/response');
import bodyParser = require('body-parser')
const app: express.Application = express();
let resp:model.Responses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {//Se usan cabeceras CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.post('/',(req, res)=>{
    let picoYPlaca=new model.PicoYPlaca(req.body.placa,req.body.date,req.body.time)
    try {
        if(picoYPlaca.determinateCirculation()){
            response.success(res,'No se puede circular',200)
        }else{
            response.success(res,'Se puede circular',200)
        }
    } catch (error) {
        response.error(res,model.errors[error],400)
    }
})
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
    });