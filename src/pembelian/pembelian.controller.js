const express = require('express');

const {getPembelian, addPembelian, updatePembelianByID, deletePembelianByID, getPembelianByID} = require('./pembelian.service');

const router = express.Router();

//get all data pembelian
router.get('/', async (req, res) => {
    try {
        const pembelian = await getPembelian();
        res.json(pembelian);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//add Data Pembelian
router.post('/', async (req, res) => {
    try {
        const newPembelianData = req.body;
        newPembelianData.kode_pembelian = parseInt(newPembelianData.kode_pembelian);
        newPembelianData.kode_barang = parseInt(newPembelianData.kode_barang);
        newPembelianData.kode_pegawai = parseInt(newPembelianData.kode_pegawai);
        newPembelianData.total_pembelian = parseInt(newPembelianData.total_pembelian);
        newPembelianData.kode_member = parseInt(newPembelianData.kode_member);
        const pembelian = await addPembelian(newPembelianData);
        res.send({
            data: pembelian,
            message: 'Data Transaksi berhasil ditambahkan'
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
});

//update data Pembelian by id
router.put('/:id', async (req, res) => {
    try{
        const newPembelianData = req.body;
        const idPembelian = parseInt(req.params.id);
        newPembelianData.kode_pembelian = parseInt(newPembelianData.kode_pembelian);
        newPembelianData.kode_barang = parseInt(newPembelianData.kode_barang);
        newPembelianData.kode_pegawai = parseInt(newPembelianData.kode_pegawai);
        newPembelianData.total_pembelian = parseInt(newPembelianData.total_pembelian);
        newPembelianData.kode_member = parseInt(newPembelianData.kode_member);
        const pembelian = await updatePembelianByID(idPembelian, newPembelianData);

        res.send({
            data: pembelian,
            message: `Data Transaksi dengan kode ${idPembelian} berhasil diupdate`
        });
    } catch(err){
        res.status(500).json(err.message);
    }
});

//delete data Pembelian by id
router.delete('/:id', async (req, res) => {
    const idPembelian = parseInt(req.params.id);
    try{
        const pembelian = await deletePembelianByID(idPembelian);

        res.send({
            data: pembelian,
            message: `Data Transaksi dengan id ${idPembelian} berhasil dihapus`
        });
    } catch(err){
        res.status(500).json(err.message);
    }
});

//get data Pembelian by id
router.get('/:id', async (req, res) => {
    const idPembelian = parseInt(req.params.id);
    try{
        const student = await getPembelianByID(idPembelian);
        res.json(student);
    } catch(err){
        res.status(500).json(err.message);
    }
});

module.exports = router;
