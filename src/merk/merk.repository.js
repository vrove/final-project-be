const prisma = require("../db")

const findMerk = async () => {
    const merk = await prisma.merk.findMany();
    return merk;
};

const findMerkByID = async (idMerk) => {
    const merk = await prisma.merk.findUnique({
        where: { id_barang: idBarang },
    });
    return merk;
};

const insertMerk = async (newMerkData) => {
    const merk = await prisma.merk.create({
        data: {
            nama_merk: newMerkData.nama_merk,
            harga_barang: parseInt(newBarangData.harga_barang),
            jenis_barang: {
                connect: { id_jenis: parseInt(newMerkData.kode_jenis) },
            },
            karyawan: {
                connect: { id_karyawan: parseInt(newMerkData.kode_karyawan) },
            },
            supplier: {
                connect: { id_supplier: parseInt(newMerkData.kode_supplier) },
            },
        },
    });
    return merk;
};

const editMerkByID = async (idMerk, newMerkData) => {
    const merk = await prisma.merk.update({
        where: { id_Merk: parseInt(idMerk) },
        data: {
            nama_merk: newMerkData.nama_merk,
            harga_barang: parseInt(newBarangData.harga_barang),
            jenis_barang: {
                connect: { id_jenis: parseInt(newMerkData.kode_jenis) },
            },
            karyawan: {
                connect: { id_karyawan: parseInt(newMerkData.kode_karyawan) },
            },
            supplier: {
                connect: { id_supplier: parseInt(newMerkData.kode_supplier) },
            },
        },
    });
    return merk;
};

const deleteMerk = async (idMerk) => {
    const merk = await prisma.merk.delete({
        where: { id_Merk : idMerk },
    });
    return merk;
};

module.exports = {
    findMerk,
    findMerkByID,
    insertMerk,
    editMerkByID,
    deleteMerk
};