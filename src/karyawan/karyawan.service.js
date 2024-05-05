const { findKaryawan, findKaryawanByID, insertKaryawan, editKaryawanByID, deleteKaryawan } = require('./karyawan.repository');

//get karyawan
const getAllKaryawan = async () => {
    const karyawan = await findKaryawan();
    return karyawan;
};

//add karyawan
const addKaryawan = async (newKaryawanData) => {
    if (!newKaryawanData.nama_karyawan) {
        throw new Error("Nama karyawan harus diisi");
    } else {
        const karyawan = await insertKaryawan(newKaryawanData);
        return karyawan;
    }
};

//update karyawan by id
const updateKaryawanByID = async (idKaryawan, newKaryawanData) => {
    const karyawan = await editKaryawanByID(idKaryawan, newKaryawanData);
    return karyawan;
};

//delete karyawan by id
const deleteKaryawanByID = async (idKaryawan) => {
    const karyawan = await findKaryawanByID(idKaryawan);

    if (!karyawan) {
        throw new Error("Karyawan tidak ditemukan");
    } else {
        await deleteKaryawan(idKaryawan);
    }
};

//get karyawan by id
const getKaryawanByID = async (idKaryawan) => {
    const karyawan = await findKaryawanByID(idKaryawan);

    if (!karyawan) {
        throw new Error("Karyawan tidak ditemukan");
    } else {
        return karyawan;
    }
};

module.exports = {
    getAllKaryawan,
    addKaryawan,
    updateKaryawanByID,
    deleteKaryawanByID,
    getKaryawanByID
};
