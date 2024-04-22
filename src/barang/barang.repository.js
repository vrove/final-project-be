const prisma = require("../db")

const findBarang = async () => {
    const barang = await prisma.barang.findMany();
    return barang;
};

const findBarangByID = async (idBarang) => {
    const barang = await prisma.barang.findUnique({
        where: {
            id: idBarang
        }
    });
    return barang;
};

const insertBarang = async (newBarangData) => {
    const barang = await prisma.barang.create({
        data: newBarangData
    });
    return barang;
};

const editBarangByID = async (idBarang, newBarangData) => {
    const barang = await prisma.barang.update({
        where: {
            id: idBarang
        },
        data: newBarangData
    });
    return barang;
};

const deleteBarang = async (idBarang) => {
    const barang = await prisma.barang.delete({
        where: {
            id: idBarang
        }
    });
};

module.exports = {
    findBarang,
    findBarangByID,
    insertBarang,
    editBarangByID,
    deleteBarang
};