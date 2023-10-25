
const app = require('./app')
//setting a port to run app
const port = 3000

app.listen(port, () => {
    console.log('APP WORKS', port)
});