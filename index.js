const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//////// db

require('./helper/db')();

const port = normalizePort(process.env.PORT || 5050);
//////// Routers
app.use('/', require('./routers/home'));
app.use('/category', require('./routers/category'));



app.listen(port, () => {
    console.log('Server ishlamoqda :' + port);
});

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}
