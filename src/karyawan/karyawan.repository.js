const prisma = require("../db")

const findKaryawan = async () => {
    const karyawan = await prisma.karyawan.findMany();
    return karyawan;
};

const findKaryawanByID = async (idKaryawan) => {
    const karyawan = await prisma.karyawan.findUnique({
        where: {
            id_karyawan: idKaryawan
        }
    });
    return karyawan;
};

const insertKaryawan = async (newKaryawanData) => {
    const karyawan = await prisma.karyawan.create({
        data: newKaryawanData
    });
    return karyawan;
};

const editKaryawanByID = async (idKaryawan, newKaryawanData) => {
    const karyawan = await prisma.karyawan.update({
        where: {
            id_karyawan: idKaryawan
        },
        data: newKaryawanData
    });
    return karyawan;
};

const deleteKaryawan = async (idKaryawan) => {
    const karyawan = await prisma.karyawan.delete({
        where: {
            id_karyawan: idKaryawan
        }
    });
};

module.exports = {
    findKaryawan,
    findKaryawanByID,
    insertKaryawan,
    editKaryawanByID,
    deleteKaryawan
};
