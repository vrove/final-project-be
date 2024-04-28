const express = require('express');

const {getMerk, addMerk, updateMerkByID, deleteMerkByID, getMerkByID} = require('./merk.service');

const router = express.Router();

//get all Merk barang
router.get('/', async (req, res) => {
    try {
        const merk = await getMerk();
        res.json(merk);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//add Merk barang
router.post('/', async (req, res) => {
    try {
        const newMerkData = req.body;
        const merk = await addMerk(newMerkData);
        res.send({
            data: merk,
            message: 'Merk barang berhasil ditambahkan'
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
});

//update Merk barang by id
router.put('/:id', async (req, res) => {
    try{
        const newMerkData = req.body;
        const idMerk = parseInt(req.params.id);

        const merk = await updateMerkByID(idMerk, newMerkData);

        res.send({
            data: merk,
            message: `Merk barang dengan id ${idMerk} berhasil diupdate`
        });
    } catch(err){
        res.status(500).json(err.message);
    }
});

//delete Merk barang by id
router.delete('/:id', async (req, res) => {
    const idMerk = parseInt(req.params.id);
    try{
        const merk = await deleteMerkByID(idMerk);

        res.send({
            data: merk,
            message: `Merk barang dengan id ${idMerk} berhasil dihapus`
        });
    } catch(err){
        res.status(500).json(err.message);
    }
});

//get Merk barang by id
router.get('/:id', async (req, res) => {
    const idMerk = parseInt(req.params.id);
    try{
        const student = await getMerkByID(idMerk);
        res.json(student);
    } catch(err){
        res.status(500).json(err.message);
    }
});

module.exports = router;
