const prisma = require("../db")

const findPembelian = async () => {
    const pembelian = await prisma.pembelian.findMany();
    return pembelian;
};

const findPembelianByID = async (idPembelian) => {
    const pembelian = await prisma.pembelian.findUnique({
        where: { kode_pembelian: idPembelian },
    });
    return pembelian;
};

const insertPembelian = async (newPembelianData) => {
    const pembelian= await prisma.pembelian.create({
        data: {
            kode_pembelian: newPembelianData.kode_pembelian,
            total_pembelian: parseInt(newPembelianData.total_pembelian),
            kode_barang: {
                connect: { id_jenis: parseInt(newPembelianData.kode_jenis) },
            },
            karyawan: {
                connect: { id_karyawan: parseInt(newPembelianData.nama_karyawan) },
            },
            member: {
                connect: { id_member: parseInt(newPembelianData.nama_member) },
            },
        },
    });
    return pembelian;
};

const editPembelianByID = async (idPembelian, newPembelianData) => {
    const pembelian = await prisma.pembelian.update({
        where: { kode_pembelian: parseInt(idPembelian) },
        data: {
            kode_pembelian: newPembelianData.kode_pembelian,
            total_pembelian: parseInt(newPembelianData.total_pembelian),
            kode_barang: {
                connect: { id_jenis: parseInt(newPembelianData.kode_jenis) },
            },
            karyawan: {
                connect: { id_karyawan: parseInt(newPembelianData.nama_karyawan) },
            },
            member: {
                connect: { id_member: parseInt(newPembelianData.nama_member) },
            },
        },
    });
    return pembelian;
};
const deletePembelian = async (idPembelian) => {
    const pembelian = await prisma.pembelian.delete({
        where: { kode_pembelian: idPembelian },
    });
    return pembelian;
};

module.exports = {
    findPembelian,
    findPembelianByID,
    insertPembelian,
    editPembelianByID,
    deletePembelian
};