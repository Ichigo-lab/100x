function onPress() {
    function callback(res) {
        res.json.then((data)=>{
            console.log(data)
        })
    }

      fetch("http://localhost:3000/todos", {
        method: "GET"
      }).then(callback)
}