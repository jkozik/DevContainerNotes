const express = require("express")
const app = express()
const port = 3000

app.get("/", function(req, res) {
res.send("hello from devcontainer")
})

app. listen(port, () => {
console.log(`Server listening on port ${port}`)

})
