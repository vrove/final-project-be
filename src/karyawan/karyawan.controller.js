const express = require('express');

const {getKaryawan, addKaryawan, updateKaryawanByID, deleteKaryawanByID, getKaryawanByID} = require('./karyawan.service');

const router = express.Router();

//get all karyawan
router.get('/', async (req, res) => {
    try {
        const karyawan = await getKaryawan();
        res.json(karyawan);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//add karyawan
router.post('/', async (req, res) => {
    try {
        const newKaryawanData = req.body;
        const karyawan = await addKaryawan(newKaryawanData);
        res.send({
            data: karyawan,
            message: 'Karyawan berhasil ditambahkan'
        });
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
});

//update karyawan by id
router.put('/:id', async (req, res) => {
    try{
        const newKaryawanData = req.body;
        const idKaryawan = parseInt(req.params.id);

        const karyawan = await updateKaryawanByID(idKaryawan, newKaryawanData);

        res.send({
            data: karyawan,
            message: `Karyawan dengan id ${idKaryawan} berhasil diupdate`
        });
    } catch(err){
        res.status(500).json("Internal Server Error");
    }
});

//delete karyawan by id
router.delete('/:id', async (req, res) => {
    const idKaryawan = parseInt(req.params.id);
    try{
        const karyawan = await deleteKaryawanByID(idKaryawan);

        res.send({
            data: karyawan,
            message: `Karyawan dengan id ${idKaryawan} berhasil dihapus`
        });
    } catch(err){
        res.status(500).json("Internal Server Error");
    }
});

//get karyawan by id
router.id('/:id', async (req, res) => {
    const idKaryawan = parseInt(req.params.id);
    try{
        const student = await getKaryawanByID(idKaryawan);
        res.json(student);
    } catch(err){
        res.status(500).json("Internal Server Error");
    }
});

module.exports = router;
