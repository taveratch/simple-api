let express = require('express');
let app = express();

app.get('/api', (req, res) => {
    res.send({
        word: 'It works'
    })
});

app.listen(9000, (err) => {console.log('Server is running on port 9000')});