import express = require('express');
import model = require('./models/models');
import response = require('./network/response');
import bodyParser = require('body-parser')
const app: express.Application = express();
let resp:model.Responses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.post('/',(req, res)=>{
    console.log(req.body)
    let picoYPlaca=new model.PicoYPlaca(req.body.placa,req.body.date,req.body.time)
    try {
        if(picoYPlaca.determinateCirculation()){
            response.success(res,'No se puede circular',200)
        }else{
            response.success(res,'Se puede circular',200)
        }
    } catch (error) {
        console.log(error)
        console.log(model.errors)
        response.error(res,model.errors[error],400)
    }
})
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
    });