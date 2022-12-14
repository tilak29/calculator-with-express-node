//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get("/" , function(req , res){
  res.sendFile(__dirname + '/index.html');
});

app.get("/bmicalculator" , function(req , res){
  res.sendFile(__dirname + '/bmi-calculator.html');
})


app.post("/" , function(req , res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1+num2;

  res.send("The result is " + result);
})

app.post("/bmicalculator" , function(req , res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var resultBMI = weight / (height*height);

  res.send("The result for BMI is " + resultBMI);
});

app.listen(port , function(){
  console.log('listning the port ' + port);
});
