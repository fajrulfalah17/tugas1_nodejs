const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json ({
        nama : "Richard Muhammad",
        tanggalLahir: "14 Januari 1994",
        jenisKelamin: "Laki - Laki",
        hobi: "Membaca buku"
    });
})

router.post('/', (req, res) => {
    res.send('Data berhasil dibuat');
})

router.put('/', (req, res) => {
    res.send('Data telah di update');
})

router.delete('/', (req, res) => {
    res.send('Data berhasil di hapus');
})


module.exports = router;