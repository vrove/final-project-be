const express = require('express');

const {getAllKaryawan, addKaryawan, updateKaryawanByID, deleteKaryawanByID, getKaryawanByID} = require('./karyawan.service');

const router = express.Router();

//get all karyawan
router.get('/', async (req, res) => {
    try {
        const karyawan = await getAllKaryawan();
        res.json(karyawan);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//add karyawan
router.post('/', async (req, res) => {
    try {
        const newKaryawanData = req.body;
        newKaryawanData.id_karyawan = parseInt(newKaryawanData.id_karyawan);
        const karyawan = await addKaryawan(newKaryawanData);
        res.send({
            data: karyawan,
            message: 'Karyawan berhasil ditambahkan'
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//update karyawan by id
router.put('/:id', async (req, res) => {
    try{
        const newKaryawanData = req.body;
        const idKaryawan = parseInt(req.params.id);
        newKaryawanData.id_karyawan = parseInt(newKaryawanData.id_karyawan);
        const karyawan = await updateKaryawanByID(idKaryawan, newKaryawanData);

        res.send({
            data: karyawan,
            message: `Karyawan dengan id ${idKaryawan} berhasil diupdate`
        });
    } catch(error){
        res.status(500).json({message: error.message});
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
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

//get karyawan by id
router.get('/:id', async (req, res) => {
    const idKaryawan = parseInt(req.params.id);
    try{
        const student = await getKaryawanByID(idKaryawan);
        res.json(student);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;
