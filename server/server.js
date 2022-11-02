const express = require('express')
const cors = require('cors')
require('dotenv')
const app = express()


const path = require('path')
// Helps using local paths eaiser

app.use(express.json())
app.use(cors())






const { PORT } = process.env
app.listen(PORT, () => console.log(`Server up on ${PORT}`))