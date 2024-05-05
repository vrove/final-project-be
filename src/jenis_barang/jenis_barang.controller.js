const express = require('express');
const { getJenis_Barang, addJenis_Barang, updateJenis_BarangByID, deleteJenis_BarangByID, getJenis_BarangByID } = require('./jenis_barang.service');

const router = express.Router();

// Get all jenis_barang
router.get('/', async (req, res) => {
    try {
        const jenisBarang = await getJenis_Barang();
        res.json(jenisBarang);
    } catch (error) {
        res.status(500).json({ message: "Error fetching jenis_barang: " + error.message });
    }
});

// Add jenis_barang
router.post('/', async (req, res) => {
    try {
        const newJenisBarang = req.body;
        const jenisBarang = await addJenis_Barang(newJenisBarang);
        res.status(201).json({
            data: jenisBarang,
            message: 'Jenis barang berhasil ditambahkan'
        });
    } catch (error) {
        res.status(500).json({ message: "Error adding jenis_barang: " + error.message });
    }
});

// Update jenis_barang by ID
router.put('/:id', async (req, res) => {
    try {
        const newJenisBarangData = req.body;
        const idJenisBarang = parseInt(req.params.id);
        const updatedJenisBarang = await updateJenis_BarangByID(idJenisBarang, newJenisBarangData);
        res.json({
            data: updatedJenisBarang,
            message: `Jenis barang dengan ID ${idJenisBarang} berhasil diperbarui`
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating jenis_barang: " + error.message });
    }
});

// Delete jenis_barang by ID
router.delete('/:id', async (req, res) => {
    const idJenisBarang = parseInt(req.params.id);
    try {
        const deletedJenisBarang = await deleteJenis_BarangByID(idJenisBarang);
        res.json({
            data: deletedJenisBarang,
            message: `Jenis barang dengan ID ${idJenisBarang} berhasil dihapus`
        });
    } catch (error) {
        res.status(500).json({ message: "Error deleting jenis_barang: " + error.message });
    }
});

// Get jenis_barang by ID
router.get('/:id', async (req, res) => {
    const idJenisBarang = parseInt(req.params.id);
    try {
        const jenisBarang = await getJenis_BarangByID(idJenisBarang);
        res.json(jenisBarang);
    } catch (error) {
        res.status(500).json({ message: "Error fetching jenis_barang by ID: " + error.message });
    }
});

module.exports = router;
