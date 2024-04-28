const { findMember, findMemberByID, insertMember, editMemberByID, deleteMember } = require('./member.repository');

//get Member
const getMember = async () => {
    const member = await findMember();
    return member;
};


const addMember = async (newMemberData) => {
    if(!newMemberData.nama_member){
        throw new Error("Nama member harus diisi");
    }else{
        const member = await insertMember(newMemberData);
        return member;
    }
};

//update Member by id
const updateMemberByID = async (idMember, newMemberData) => {
    const member = await editMemberByID(idMember, newMemberData);
    return member;
};

//delete Member by id
const deleteMemberByID = async (idMember) => {
    const member = await findMemberByID(idMember);

    if(!member){
        throw new Error("Member tidak ditemukan");
    }else{
        await deleteMember(idMember);
    }
};

//get Member by id
const getMemberByID = async (idMember) => {
    const member = await findMemberByID(idMember);

    if(!member){
        throw new Error("Member tidak ditemukan");
    }else{
        const member = await findMemberByID(idMember);
        return member
    }
};

module.exports = {
    getMember,
    addMember,
    updateMemberByID,
    deleteMemberByID,
    getMemberByID
};
