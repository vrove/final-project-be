const prisma = require("../db")

const findMember = async () => {
    const member = await prisma.member.findMany();
    return member;
};

const findMemberByID = async (idMember) => {
    const member = await prisma.member.findUnique({
        where: { id_member: idMember },
    });
    return member;
};

const insertMember = async (newMemberData) => {
    const member = await prisma.member.create({
        data: {
            nama_member: newMemberData.nama_Member,
            alamat_member: parseInt(newMemberData.alamat_member),
            id_member: {
                connect: { id_jenis: parseInt(newMemberData.kode_jenis) },
            },
            merk: {
                connect: { id_merk: parseInt(newMemberData.kode_merk) },
            },
            pembelian: {
                connect: { id_member: parseInt(newMemberData.kode_member) },
            },
        },
    });
    return member;
};

const editMemberByID = async (idMember, newMemberData) => {
    const member = await prisma.member.update({
        where: { id_member: parseInt(idMember) },
        data: {
            nama_member: newMemberData.nama_Member,
            alamat_member: parseInt(newMemberData.alamat_member),
            id_member: {
                connect: { id_jenis: parseInt(newMemberData.kode_jenis) },
            },
            merk: {
                connect: { id_merk: parseInt(newMemberData.kode_merk) },
            },
            pembelian: {
                connect: { id_member: parseInt(newBarangData.kode_member) },
            },
        },
    });
    return member;
};

const deleteMember = async (idMember) => {
    const member = await prisma.member.delete({
        where: { id_member: idMember },
    });
    return member;
};

module.exports = {
    findMember,
    findMemberByID,
    insertMember,
    editMemberByID,
    deleteMember
};