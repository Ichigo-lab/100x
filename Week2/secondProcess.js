var secObj = {
    method: "GET"
}

fetch("http://localhost:3000/handleSum?counter=10", secObj)
.then((result) => result.json()).then((body)=>console.log(body))