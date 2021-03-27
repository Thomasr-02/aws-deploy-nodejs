const express = require('express');
API_PORT = 3333;
const app = express();

app.get('/', (req, res) => res.send("Learning AWS!"));

app.listen(API_PORT);

console.info(`Server runing port ${API_PORT}`);