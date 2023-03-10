const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();


app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.get("/status", (req, res, next) => {
    const secretKey = process.env.SECRET_KEY;
    const providedKey = req.query.key;

    if (providedKey === secretKey) {
        res.status(200).send("OK!")
    } else {
        res.status(401).send("Acesso negado!")
    }
})

module.exports = app;