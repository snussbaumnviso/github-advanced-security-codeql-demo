const express = require('express')
const app = express()
const port = 3000

// test
// randomstringcontainingxsstoseeiftriggered

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/demo/:id', (req, res) => {
    res.send(`Hello Test`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// Fix the SQL injection vulnerability

// xss xss xss xss xss xss
