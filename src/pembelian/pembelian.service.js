const { findPembelian, findPembelianByID, insertPembelian, editPembelianByID, deletePembelian } = require('./Pembelian.repository');

//get data pembelian
const getPembelian = async () => {
    const pembelian = await findPembelian();
    return pembelian;
};


const addPembelian = async (newPembelianData) => {
    if(!newPembelianData.kode_pembelian){
        throw new Error("Harap masukkan kode pembelian");
    }else{
        const pembelian = await insertPembelian(newPembelianData);
        return pembelian;
    }
};

//update data pembelian by id
const updatePembelianByID = async (idPembelian, newPembelianData) => {
    const pembelian = await editPembelianByID(idPembelian, newPembelianData);
    return pembelian;
};

//delete data pembelian by id
const deletePembelianByID = async (idPembelian) => {
    const pembelian = await findPembelianByID(idPembelian);

    if(!pembelian){
        throw new Error("Data pembelian tidak ditemukan");
    }else{
        await deletePembelian(idPembelian);
    }
};

//get data pembelian by id
const getPembelianByID = async (idPembelian) => {
    const pembelian = await findPembelianByID(idPembelian);

    if(!pembelian){
        throw new Error("Data pembelian yang dicari tidak ditemukan");
    }else{
        const pembelian = await findPembelianByID(idPembelian);
        return pembelian
    }
};

module.exports = {
    getPembelian,
    addPembelian,
    updatePembelianByID,
    deletePembelianByID,
    getPembelianByID
};
