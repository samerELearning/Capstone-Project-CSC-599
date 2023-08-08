import { prisma } from "@/config/db";

export default async function handler(req, res) {
    switch(req.method) {
        
        case "GET" :
            return await getTeam(req, res);
        case "POST":
            return await addTeam(req, res);
        case "DELETE":
            return await deleteMulti(req, res);
    }
}

const getTeam = async (req, res) => {
    
    try {

        const result = await prisma.team.findMany();
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error);
    }
}

const addTeam = async (req, res) => {

    try {
        const {username, sport, capacity, facility, level, coach} = req.body;

        // Validate input
        if (!username || !sport || !capacity || !facility || !level || !coach) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const data = {
            username : username,
            sport    : sport,
            capacity    : capacity,
            facility    : facility,
            level     : level,
            coach     : coach
        }
        
        const result = await prisma.team.create({
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

        await prisma.team.deleteMany({
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