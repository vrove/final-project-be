const prisma = require("../db")

const findBarang = async () => {
    const barang = await prisma.barang.findMany();
    return barang;
};

const findBarangByID = async (idBarang) => {
    const barang = await prisma.barang.findUnique({
        where: { id_barang: idBarang },
    });
    return barang;
};

const insertBarang = async (newBarangData) => {
    const barang = await prisma.barang.create({
        data: {
            nama_barang: newBarangData.nama_barang,
            harga_barang: parseInt(newBarangData.harga_barang),
            jenis_barang: {
                connect: { id_jenis: parseInt(newBarangData.kode_jenis) },
            },
            merk: {
                connect: { id_merk: parseInt(newBarangData.kode_merk) },
            },
            supplier: {
                connect: { id_supplier: parseInt(newBarangData.kode_supplier) },
            },
        },
    });
    return barang;
};

const editBarangByID = async (idBarang, newBarangData) => {
    const barang = await prisma.barang.update({
        where: { id_barang: parseInt(idBarang) },
        data: {
            nama_barang: newBarangData.nama_barang,
            harga_barang: parseInt(newBarangData.harga_barang),
            jenis_barang: {
                connect: { id_jenis: parseInt(newBarangData.kode_jenis) },
            },
            merk: {
                connect: { id_merk: parseInt(newBarangData.kode_merk) },
            },
            supplier: {
                connect: { id_supplier: parseInt(newBarangData.kode_supplier) },
            },
        },
    });
    return barang;
};

const deleteBarang = async (idBarang) => {
    const barang = await prisma.barang.delete({
        where: { id_barang: idBarang },
    });
    return barang;
};

module.exports = {
    findBarang,
    findBarangByID,
    insertBarang,
    editBarangByID,
    deleteBarang
};