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
        data: newMemberData,
    });
    return member;
};

const editMemberByID = async (idMember, newMemberData) => {
    const member = await prisma.member.update({
        where: { id_member: parseInt(idMember) },
        data: newMemberData,
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