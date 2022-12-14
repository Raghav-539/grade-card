const express = require("express");
const app = express();
const https = require("https");
const bodyParser=require("body-parser");
const fs = require("fs");

// const { response } = require("express");

var send;  // send is for storing the values fetched from the form

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname));

app.get("/", function(req, res)
{
    res.sendFile(__dirname + '/form.html')
})

  
function calculate(sub1 , sub2, sub3, sub4, sub5)
{

    let total = sub1 + sub2 + sub3 + sub4 + sub5;
    let avg = Math.round(total/3);

    let totalS = "Total marks scored by student : " + total;
    let avgS = "Avg marks of student : " + avg;
    let ans = "";

    if(avg <= 33)
    {
       ans+="Your grade is F.";
    }
    else if(avg > 33 && avg <=50)
    {
        ans+="Your grade is E.";
    }
    else if(avg > 50 && avg <=60)
    {
        ans+="Your grade is D.";
    }
    else if(avg > 60 && avg <=70)
    {
        ans+="Your grade is C.";
    }
    else if(avg > 70 && avg <=90)
    {
        ans+="Your grade is B.";
    }
    else if(avg > 90)
    {
        ans+="Your grade is A.";
    }

    return { totalS, avgS, ans };
}

app.post("/addapi",function(req,res)
{
    // fetching value from the form 
    let userid = req.body.userid;
    let name = req.body.username;
    let address = req.body.address;
    let python = Number(req.body.python);
    let java = Number(req.body.java);
    let cpp = Number(req.body.cpp);
    let frontend = Number(req.body.frontend);
    let backend = Number(req.body.backend);
    let { totalS, avgS, ans } = calculate(python, java, cpp, frontend, backend);

    console.log(totalS, avgS, ans);

    // storing data in form of object
    send = {
        statusCode:200,
        userid:userid,
        name:name,
        address:address,
        python:python,
        java:java,
        cpp:cpp,
        frontend:frontend,
        backend:backend,
        total: totalS,
        avg: avgS,
        grade: ans,   
    }

    // storing data in json format 
    let db = JSON.parse(fs.readFileSync('db.json'));
    db.push(send);
    fs.writeFileSync('db.json', JSON.stringify(db));

    // simply displaying data in browser
    console.log(send)
    res.send("data saved");
})

app.get("/show",function(req,res)
{
    let a = JSON.parse(fs.readFileSync('db.json'));
    res.send(a);
    
})

app.listen(4000);

// to run api file write in terminal : npm run watch