const express = require('express');

const {getSupplier, addSupplier, updateSupplierByID, deleteSupplierByID, getSupplierByID} = require('./supplier.service');

const router = express.Router();

//get semua supplier
router.get('/', async (req, res) => {
    try {
        const supplier = await getSupplier();
        res.json(supplier);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//add supplier
router.post('/', async (req, res) => {
    try {
        const newSupplierData = req.body;
        const supplier = await addSupplier(newSupplierData);
        res.send({
            data: supplier,
            message: 'Supplier berhasil ditambahkan'
        });
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
});

//update supplier by id
router.put('/:id', async (req, res) => {
    try{
        const newSupplierData = req.body;
        const idSupplier = parseInt(req.params.id);

        const supplier = await updateSupplierByID(idBarang, newSupplierData);

        res.send({
            data: supplier,
            message: `Supplier dengan id ${idSupplier} berhasil diupdate`
        });
    } catch(err){
        res.status(500).json("Internal Server Error");
    }
});

//delete supplier by id
router.delete('/:id', async (req, res) => {
    const idSupplier = parseInt(req.params.id);
    try{
        const supplier = await deleteSupplierByID(idSupplier);

        res.send({
            data: supplier,
            message: `Supplier dengan id ${idSupplier} berhasil dihapus`
        });
    } catch(err){
        res.status(500).json("Internal Server Error");
    }
});

//get supplier by id
router.id('/:id', async (req, res) => {
    const idSupplier = parseInt(req.params.id);
    try{
        const student = await getSupplierByID(idSupplier);
        res.json(student);
    } catch(err){
        res.status(500).json("Internal Server Error");
    }
});

module.exports = router;
