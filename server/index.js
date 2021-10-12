const express = require('express')
const cors = require('cors')

const app = express()

app.use (express.json())
app.use(cors())

app.listen(5050, () => {console.log(`Sir! Activity has been detected in sector 5050!`)})