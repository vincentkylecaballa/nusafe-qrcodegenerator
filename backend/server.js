const express = require('express');
const app = express();

app.post('/api/register', (req, res) => {
    console.log(req.body);
});


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});