const prisma = require("../db")

const findJenis_Barang = async () => {
    const jenis_barang = await prisma.jenis_barang.findMany();
    return jenis_barang;
};

const findJenis_BarangByID = async (idJenis_Barang) => {
    const jenis_barang = await prisma.jenis_barang.findUnique({
        where: {
            id_jenis: idJenis_Barang
        }
    });
    return jenis_barang;
};

const insertJenis_Barang = async (newJenis_BarangData) => {
    const jenis_barang = await prisma.jenis_barang.create({
        data: newJenis_BarangData
    });
    return jenis_barang;
};

const editJenis_BarangByID = async (idJenisBarang, newJenisBarangData) => {
    const jenis_barang = await prisma.jenis_barang.update({
        where: {
            id_jenis: idJenisBarang
        },
        data: newJenisBarangData
    });
    return jenis_barang;
};

const deleteJenis_Barang = async (idJenisBarang) => {
    const jenis_barang = await prisma.jenis_barang.delete({
        where: {
            id_jenis: idJenisBarang
        }
    });
    return jenis_barang;
};



module.exports = {
    findJenis_Barang,
    findJenis_BarangByID,
    insertJenis_Barang,
    editJenis_BarangByID,
    deleteJenis_Barang
};