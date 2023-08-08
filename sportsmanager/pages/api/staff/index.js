import { prisma } from "@/config/db";

export default async function handler(req, res) {
    switch(req.method) {
        
        case "GET" :
            return await getStaff(req, res);
        case "POST":
            return await addStaff(req, res);
        case "DELETE":
            return await deleteMulti(req, res);
    }
}

const getStaff = async (req, res) => {
    
    try {

        const result = await prisma.staff.findMany();
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error);
    }
}

const addStaff = async (req, res) => {

    try {
        const {username, email, lauId, position, campus, date} = req.body;

        // Validate input
        if (!username || !email || !lauId || !position || !campus || !date) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const data = {
            username : username,
            email    : email,
            lauId    : lauId,
            position    : position,
            campus     : campus,
            date     : date
        }
        
        const result = await prisma.staff.create({
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

        await prisma.staff.deleteMany({
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