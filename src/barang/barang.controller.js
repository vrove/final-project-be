const express = require('express');

const {getBarang, addBarang, updateBarangByID, deleteBarangByID, getBarangByID} = require('./barang.service');

const router = express.Router();

//get all barang
router.get('/', async (req, res) => {
    try {
        const barang = await getBarang();
        res.json(barang);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//add barang
router.post('/', async (req, res) => {
    try {
        const newBarangData = req.body;
        const barang = await addBarang(newBarangData);
        res.send({
            data: barang,
            message: 'Barang berhasil ditambahkan'
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
});

//update barang by id
router.put('/:id', async (req, res) => {
    try{
        const newBarangData = req.body;
        const idBarang = parseInt(req.params.id);

        const barang = await updateBarangByID(idBarang, newBarangData);

        res.send({
            data: barang,
            message: `Barang dengan id ${idBarang} berhasil diupdate`
        });
    } catch(err){
        res.status(500).json(err.message);
    }
});

//delete barang by id
router.delete('/:id', async (req, res) => {
    const idBarang = parseInt(req.params.id);
    try{
        const barang = await deleteBarangByID(idBarang);

        res.send({
            data: barang,
            message: `Barang dengan id ${idBarang} berhasil dihapus`
        });
    } catch(err){
        res.status(500).json(err.message);
    }
});

//get barang by id
router.get('/:id', async (req, res) => {
    const idBarang = parseInt(req.params.id);
    try{
        const student = await getBarangByID(idBarang);
        res.json(student);
    } catch(err){
        res.status(500).json(err.message);
    }
});

module.exports = router;
