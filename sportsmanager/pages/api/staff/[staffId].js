import { prisma } from "@/config/db";

export default async function handler(req, res) {

    switch(req.method){
        case "GET" :
            return await getStaff(req, res)
        case "PUT" :
            return await updateStaff(req, res)
        case "DELETE" :
            return await deleteStaff(req, res)
    }
}

const getStaff = async (req, res) => {
    try{
        const {staffId} = req.query;
        const result   = await prisma.staff.findFirst({
            where : {
                id : {
                    equals : parseInt(staffId)
                }
            }
        })
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const updateStaff = async (req, res) => {
    try{
        const {email, username, lauId, position, campus, date} = req.body;
        const {staffId} = req.query;
        
        const result   = await prisma.staff.update({
            where : {
                id : parseInt(staffId)
            },
            data : {
                username : username,
                email    : email,
                lauId    : lauId,
                position    : position,
                campus     : campus,
                date     : date
            }
        });
        return res.status(200).json({username, email, lauId, position, campus, date, staffId});
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const deleteStaff = async (req, res) => {
    try{
        const {staffId} = req.query;
        const result   = await prisma.staff.delete({
            where : {
                id : parseInt(staffId)
            }
        })
        return res.status(200).json({success : true});
    }catch(error){
        return res.status(500).json(error.message);
    }
}