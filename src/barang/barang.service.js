const { findBarang, findBarangByID, insertBarang, editBarangByID, deleteBarang } = require('./barang.repository');

//get barang
const getBarang = async () => {
    const barang = await findBarang();
    return barang;
};

//add barang
const addBarang = async (newBarangData) => {
    if(!newBarangData.nama_barang){
        throw new Error("Nama barang harus diisi");
    }else{
        const barang = await insertBarang(newBarangData);
        return barang;
    }
};

//update barang by id
const updateBarangByID = async (idBarang, newBarangData) => {
    const barang = await editBarangByID(idBarang, newBarangData);
    return barang;
};

//delete barang by id
const deleteBarangByID = async (idBarang) => {
    const barang = await findBarangByID(idBarang);

    if(!barang){
        throw new Error("Barang tidak ditemukan");
    }else{
        await deleteBarang(idBarang);
    }
};

//get barang by id
const getBarangByID = async (idBarang) => {
    const barang = await findBarangByID(idBarang);

    if(!barang){
        throw new Error("Barang tidak ditemukan");
    }else{
        const barang = await findBarangByID(idBarang);
        return barang
    }
};

module.exports = {
    getBarang,
    addBarang,
    updateBarangByID,
    deleteBarangByID,
    getBarangByID
};
