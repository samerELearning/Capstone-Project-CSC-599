import { prisma } from "@/config/db";

export default async function handler(req, res) {
    switch(req.method) {
        
        case "GET" :
            return await getPlayer(req, res);
        case "POST":
            return await addPlayer(req, res);
        case "DELETE":
            return await deleteMulti(req, res);
    }
}

const getPlayer = async (req, res) => {
    
    try {

        const result = await prisma.player.findMany();
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error);
    }
}

const addPlayer = async (req, res) => {

    try {
        const {username, email, lauId, sport, team, size} = req.body;

        // Validate input
        if (!username || !email || !lauId || !sport || !team || !size) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const data = {
            username : username,
            email    : email,
            lauId    : lauId,
            sport    : sport,
            team     : team,
            size     : size
        }
        
        const result = await prisma.player.create({
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

        await prisma.player.deleteMany({
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