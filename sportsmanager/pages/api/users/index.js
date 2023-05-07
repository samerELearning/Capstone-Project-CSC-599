import { prisma } from "@/config/db";

export default async function handler(req, res) {
    switch(req.method) {
        
        case "GET" :
            return await getUser(req, res);
    }
}

const getUser = async (req, res) => {
    
    try {

        const result = await prisma.user.findMany();
    }catch(error){
        return res.status(200).json(error);
    }
}