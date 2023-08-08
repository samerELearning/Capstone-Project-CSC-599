import { prisma } from "@/config/db";

export default async function handler(req, res) {

    switch(req.method){
        case "GET" :
            return await getEquipment(req, res)
        case "PUT" :
            return await updateEquipment(req, res)
        case "DELETE" :
            return await deleteEquipment(req, res)
    }
}

const getEquipment = async (req, res) => {
    try{
        const {equipmentId} = req.query;
        const result   = await prisma.equipment.findFirst({
            where : {
                id : {
                    equals : parseInt(equipmentId)
                }
            }
        })
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const updateEquipment = async (req, res) => {
    try{
        const {username, code, manufa, model, cost, quantity} = req.body;
        const {equipmentId} = req.query;
        
        const result   = await prisma.equipment.update({
            where : {
                id : parseInt(equipmentId)
            },
            data : {
                username : username,
                code     : code,
                manufa   : manufa,
                model    : model,
                cost     : cost,
                quantity : quantity
            }
        });
        return res.status(200).json({username, code, manufa, model, cost, quantity, equipmentId});
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const deleteEquipment = async (req, res) => {
    try{
        const {equipmentId} = req.query;
        const result   = await prisma.equipment.delete({
            where : {
                id : parseInt(equipmentId)
            }
        })
        return res.status(200).json({success : true});
    }catch(error){
        return res.status(500).json(error.message);
    }
}