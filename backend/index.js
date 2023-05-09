require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router/router')
const initDatabase = require("./models/models");
const except = require('./middlewear/errorMiddleware');
const fileUpload = require('express-fileupload');
const path = require('path');

const port = process.env.PORT || 5000
const app = express()

initDatabase()

app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}))
app.use('/spirit', router)
app.use(except)


app.listen(port, () => {
    console.log(`Server http://localhost:${port} is working`)
})