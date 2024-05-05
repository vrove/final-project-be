const prisma = require("../db")

const findMerk = async () => {
    const merk = await prisma.merk.findMany();
    return merk;
};

const findMerkByID = async (idMerk) => {
    const merk = await prisma.merk.findUnique({
        where: { id_merk: idMerk },
    });
    return merk;
};

const insertMerk = async (newMerkData) => {
    const merk = await prisma.merk.create({
        data: newMerkData,
    });
    return merk;
};

const editMerkByID = async (idMerk, newMerkData) => {
    const merk = await prisma.merk.update({
        where: { id_merk: parseInt(idMerk) },
        data: newMerkData,
    });
    return merk;
};

const deleteMerk = async (idMerk) => {
    const merk = await prisma.merk.delete({
        where: { id_merk : idMerk },
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