const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));

app.listen(3000, () => {
    console.log("Server is up on port 3000");
});

app.get("/sum", (req, res) => {
    res.sendFile(__dirname + "/sum.html");
});

app.post("/sum", (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 + num2;
    res.send(`The result of calculation is: ${result}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);

    const bmi = weight / Math.pow(height, 2);

    res.send(`Your BMI is <b>${bmi}</b>`);
});