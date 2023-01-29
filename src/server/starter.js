const app = require('./server')
const port = 8080;

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}...`)
})