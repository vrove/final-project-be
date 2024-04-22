const { findSupplier, findSupplierByID, insertSupplier, editSupplierByID, deleteSupplier } = require('./supplier.repository');

//get supplier
const getAllSupplier = async () => {
    const supplier = await findSupplier();
    return supplier;
};

//add Supplier
const addSupplier = async (newSupplierData) => {
    if(!newSupplierData.nama_supplier){
        throw new Error("Nama supplier harus diisi");
    }else{
        const supplier = await insertSupplier(newSupplierData);
        return supplier;
    }
};

//update supplier by id
const updateSupplierByID = async (idSupplier, newSupplierData) => {
    if(typeof id !== 'number'){
        throw new Error("ID harus berupa angka");
    }else{
        const supplier = await editSupplierByID(idSupplier, newSupplierData);
        return supplier;
    }
};

//delete supplier by id
const deleteSupplierByID = async (idSupplier) => {
    if(typeof id !== 'number'){
        throw new Error("ID harus berupa angka");
    }

    const supplier = await findSupplierByID(idSupplier);

    if(!supplier){
        throw new Error("Supplier tidak ditemukan");
    }else{
        await deleteSupplier(idSupplier);
    }
};

//get supplier by id
const getSupplierByID = async (idSupplier) => {
    if(typeof id !== 'number'){
        throw new Error("ID harus berupa angka");
    }
    
    const supplier = await findSupplierByID(idSupplier);

    if(!supplier){
        throw new Error("Supplier tidak ditemukan");
    }else{
        const supplier = await findSupplierByID(idSupplier);
        return supplier
    }
};

module.exports = {
    getAllSupplier,
    addSupplier,
    updateSupplierByID,
    deleteSupplierByID,
    getSupplierByID
};
