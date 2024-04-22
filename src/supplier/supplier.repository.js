const prisma = require("../db")

const findSupplier = async () => {
    const supplier = await prisma.barang.findMany();
    return supplier;
};

const findSupplierByID = async (idSupplier) => {
    const supplier = await prisma.supplier.findUnique({
        where: {
            id: idSupplier
        }
    });
    return supplier;
};

const insertSupplier = async (newSupplierData) => {
    const supplier = await prisma.supplier.create({
        data: newSupplierData
    });
    return supplier;
};

const editSupplierByID = async (idSupplier, newSupplierData) => {
    const supplier = await prisma.supplier.update({
        where: {
            id: idSupplier
        },
        data: newSupplierData
    });
    return supplier;
};

const deleteSupplier = async (idSupplier) => {
    const supplier = await prisma.supplier.delete({
        where: {
            id: idSupplier
        }
    });
};

module.exports = {
    findSupplier,
    findSupplierByID,
    insertSupplier,
    editSupplierByID,
    deleteSupplier
};