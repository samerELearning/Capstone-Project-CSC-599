import { prisma } from "@/config/db";

export default async function handler(req, res) {
    switch(req.method) {
        
        case "GET" :
            return await getFacility(req, res);
        case "POST":
            return await addFacility(req, res);
        case "DELETE":
            return await deleteMulti(req, res);
    }
}

const getFacility = async (req, res) => {
    
    try {

        const result = await prisma.facility.findMany();
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error);
    }
}

const addFacility = async (req, res) => {

    try {
        const {username, location, campus, sport, type, contact} = req.body;

        // Validate input
        if (!username || !location || !campus || !sport || !type || !contact) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const data = {
            username : username,
            location    : location,
            campus    : campus,
            sport    : sport,
            type     : type,
            contact     : contact
        }
        
        const result = await prisma.facility.create({
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

        await prisma.facility.deleteMany({
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