import { prisma } from "@/config/db";

export default async function handler(req, res) {
    switch(req.method) {
        
        case "GET" :
            return await getUniform(req, res);
        case "POST":
            return await addUniform(req, res);
        case "DELETE":
            return await deleteMulti(req, res);
    }
}

const getUniform = async (req, res) => {
    
    try {

        const result = await prisma.uniform.findMany();
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error);
    }
}

const addUniform = async (req, res) => {

    try {
        const {sport, code, range, color, quantity, cost} = req.body;

        // Validate input
        if (!sport || !code || !range || !color || !quantity || !cost) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const data = {
            sport    : sport,
            code     : code,
            range    : range,
            color    : color,
            quantity : quantity,
            cost     : cost
        }
        
        const result = await prisma.uniform.create({
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

        await prisma.uniform.deleteMany({
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