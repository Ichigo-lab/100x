const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

function sum(counter){
    var sum = 0;
    for (var i=0; i<counter; i++){
        sum = sum + i
    }
    return sum;
}

function multi(counter){
    var multi = 1;
    for (var i=1; i<counter; i++){
        multi = multi * i
    }
    return multi;
}

app.get('/handleSum', (req, res) => {
    var calculatedSum = req.query.counter;
    if(calculatedSum < 1000){
        res.json(`Hello World! ${sum(calculatedSum)}`)
    }else{
        res.status(411).send("Big Number")
    }
})

// app.post('/handleSum', (req, res) => {
//     var counter = req.body.counter;
//     var ansObject = {
//         sum: sum(counter),
//         multi: multi(counter)
//     }
//     res.send(ansObject)
// })

app.get('/', (req, res) => {
        var counter = req.body.counter;
        var ansObject = {
            sum: sum(counter),
            multi: multi(counter)
        }
            res.sendFile(__dirname+"/index.html")
      
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

