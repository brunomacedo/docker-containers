const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

let port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server listening on 3000.'));
