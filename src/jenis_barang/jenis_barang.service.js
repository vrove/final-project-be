const { findJenis_Barang, findJenis_BarangByID, insertJenis_Barang, editJenis_BarangByID, deleteJenis_Barang } = require('./jenis_barang.repository');

// Get all jenis_barang
const getAllJenis_Barang = async () => {
    const jenis_barang = await findJenis_Barang();
    return jenis_barang;
};

// Add jenis_barang
const addJenis_Barang = async (newJenis_BarangData) => {
    if (!newJenis_BarangData.nama_jenis_barang) {
        throw new Error("Nama jenis_barang harus diisi");
    } else {
        const jenis_barang = await insertJenis_Barang(newJenis_BarangData);
        return jenis_barang;
    }
};

// Update jenis_barang by ID
const updateJenis_BarangByID = async (idJenis_Barang, newJenis_BarangData) => {
    if (typeof id !== 'number') {
        throw new Error("ID harus berupa angka");
    } else {
        const jenis_barang = await editJenis_BarangByID(idJenis_Barang, newJenis_BarangData);
        return jenis_barang;
    }
};

// Delete jenis_barang by ID
const deleteJenis_BarangByID = async (idJenis_Barang) => {
    if (typeof id !== 'number') {
        throw new Error("ID harus berupa angka");
    }

    const jenis_barang = await findJenis_BarangByID(idJenis_Barang);

    if (!jenis_barang) {
        throw new Error("Jenis_Barang tidak ditemukan");
    } else {
        await deleteJenis_Barang(idJenis_Barang);
    }
};

// Get jenis_barang by ID
const getJenis_BarangByID = async (idJenis_Barang) => {
    if (typeof id !== 'number') {
        throw new Error("ID harus berupa angka");
    }
    
    const jenis_barang = await findJenis_BarangByID(idJenis_Barang);

    if (!jenis_barang) {
        throw new Error("Jenis_Barang tidak ditemukan");
    } else {
        const jenis_barang = await findJenis_BarangByID(idJenis_Barang);
        return jenis_barang;
    }
};

module.exports = {
    getAllJenis_Barang,
    addJenis_Barang,
    updateJenis_BarangByID,
    deleteJenis_BarangByID,
    getJenis_BarangByID
};
