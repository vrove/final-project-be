const express = require('express');

const {getAllSupplier, addSupplier, updateSupplierByID, deleteSupplierByID, getSupplierByID} = require('./supplier.service');

const router = express.Router();

//get semua supplier
router.get('/', async (req, res) => {
    try {
        const supplier = await getAllSupplier();
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

        const supplier = await updateSupplierByID(idSupplier, newSupplierData);

        res.send({
            data: supplier,
            message: `Supplier dengan id ${idSupplier} berhasil diupdate`
        });
    } catch(error){
        res.status(500).json({message: error.message});
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
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

//get supplier by id
router.get('/:id', async (req, res) => {
    const idSupplier = parseInt(req.params.id);
    try{
        const student = await getSupplierByID(idSupplier);
        res.json(student);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;
