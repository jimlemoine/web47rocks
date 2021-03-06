require('dotenv').config()

const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send(
        `<h1>Web 47 rocks!</h1>`
    )
})
//trying to fix github
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})

function web47rocks() {
    console.log(`web ${process.argv[2]} rocks`)
}
web47rocks()

function cohortRocksEnv() {
    console.log(`home folder is ${process.env.HOME} and FOO is ${process.env.FOO}`)
}
cohortRocksEnv()