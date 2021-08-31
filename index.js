// panggil express
const express = require("express");
const app = express();
// change port
const port = 8000;
// memanggil route
const ApiRouter = require("./api-routes");

app.get('/', (req, res) => {
    res.send('Selamat Datang di Data Center Siswa Indonesia');
})

app.use('/data-siswa', ApiRouter );

app.listen(port, () => {
    console.log('app running at port $(port)')
})