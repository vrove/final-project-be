const express = require('express');

const {getMember, addMember, updateMemberByID, deleteMemberByID, getMemberByID} = require('./member.service');

const router = express.Router();

//get all Member
router.get('/', async (req, res) => {
    try {
        const member = await getMember();
        res.json(member);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//add Member
router.post('/', async (req, res) => {
    try {
        const newMemberData = req.body;
        newMemberData.id_member = parseInt(newMemberData.id_member);
        const member = await addMember(newMemberData);
        res.send({
            data: member,
            message: 'Data Member berhasil ditambahkan'
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
});

//update Member by id
router.put('/:id', async (req, res) => {
    try{
        const newMemberData = req.body;
        const idMember = parseInt(req.params.id);
        newMemberData.id_member = parseInt(newMemberData.id_member);
        const member = await updateMemberByID(idMember, newMemberData);

        res.send({
            data: member,
            message: `Member dengan id ${idMember} telah berhasil diupdate`
        });
    } catch(err){
        res.status(500).json(err.message);
    }
});

//delete Member by id
router.delete('/:id', async (req, res) => {
    const idMember = parseInt(req.params.id);
    try{
        const member = await deleteMemberByID(idMember);

        res.send({
            data: member,
            message: `Member dengan id ${idMember} telah berhasil dihapus`
        });
    } catch(err){
        res.status(500).json(err.message);
    }
});

//get Member by id
router.get('/:id', async (req, res) => {
    const idMember = parseInt(req.params.id);
    try{
        const student = await getMemberByID(idMember);
        res.json(student);
    } catch(err){
        res.status(500).json(err.message);
    }
});

module.exports = router;
