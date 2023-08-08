import { prisma } from "@/config/db";

export default async function handler(req, res) {
    switch(req.method) {
        
        case "GET" :
            return await getEquipment(req, res);
        case "POST":
            return await addEquipment(req, res);
        case "DELETE":
            return await deleteMulti(req, res);
    }
}

const getEquipment = async (req, res) => {
    
    try {

        const result = await prisma.equipment.findMany();
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error);
    }
}

const addEquipment = async (req, res) => {

    try {
        const {username, code, manufa, model, cost, quantity} = req.body;

        // Validate input
        if (!username || !code || !manufa || !model || !cost || !quantity) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const data = {
            username : username,
            code     : code,
            manufa   : manufa,
            model    : model,
            cost     : cost,
            quantity : quantity
        }
        
        const result = await prisma.equipment.create({
            data : data,
            select : {
                id : true
            }
        });

        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json({ error: "Internal server error" });
    }
}

const deleteMulti = async (req, res) => {
    try{
        const {ids} = req.body;

        await prisma.equipment.deleteMany({
            where : {
                id : {
                    in : ids
                }
            }
        })
        return res.status(200).json({success : "deleted multi"});
    }catch(error){
        return res.status(500).json(error.message);
    }
}