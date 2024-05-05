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
    const pembelian = await prisma.pembelian.create({
        data: {
            total_pembelian: newPembelianData.total_pembelian,
            tgl_pembelian: new Date(newPembelianData.tgl_pembelian).toISOString(),
            barang: {
                connect: { id_barang: newPembelianData.kode_barang },
            },
            karyawan: {
                connect: { id_karyawan: newPembelianData.kode_pegawai },
            },
            member: {
                connect: { id_member: newPembelianData.kode_member },
            },
        },
    });
    return pembelian;
};

const editPembelianByID = async (idPembelian, newPembelianData) => {
    const pembelian = await prisma.pembelian.update({
        where: { kode_pembelian: parseInt(idPembelian) },
        data: {
            total_pembelian: newPembelianData.total_pembelian,
            tgl_pembelian: new Date(newPembelianData.tgl_pembelian).toISOString(),
            barang: {
                connect: { id_barang: newPembelianData.kode_barang },
            },
            karyawan: {
                connect: { id_karyawan: newPembelianData.kode_pegawai },
            },
            member: {
                connect: { id_member: newPembelianData.kode_member },
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