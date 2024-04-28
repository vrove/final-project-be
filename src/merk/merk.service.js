const { findMerk, findMerkByID, insertMerk, editMerkByID, deleteMerk } = require('./merk.repository');

//get Merk barang
const getMerk = async () => {
    const merk = await findMerk();
    return merk;
};


const addMerk = async (newMerkData) => {
    if(!newMerkData.nama_Merk){
        throw new Error("Nama merk barang harus diisi");
    }else{
        const merk = await insertMerk(newMerkData);
        return merk;
    }
};

//update Merk barang by id
const updateMerkByID = async (idMerk, newMerkData) => {
    const merk = await editMerkByID(idMerk, newMerkData);
    return merk;
};

//delete Merk barang by id
const deleteMerkByID = async (idMerk) => {
    const merk = await findMerkByID(idMerk);

    if(!merk){
        throw new Error("Merk Barang tidak ditemukan");
    }else{
        await deleteMerk(idMerk);
    }
};

//get Merk barang by id
const getMerkByID = async (idMerk) => {
    const merk = await findMerkByID(idMerk);

    if(!merk){
        throw new Error("Merk Barang tidak ditemukan");
    }else{
        const merk = await findMerkByID(idMerk);
        return merk
    }
};

module.exports = {
    getMerk,
    addMerk,
    updateMerkByID,
    deleteMerkByID,
    getMerkByID
};
