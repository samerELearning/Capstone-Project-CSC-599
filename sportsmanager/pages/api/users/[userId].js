import { prisma } from "@/config/db";

export default async function handler(req, res) {

    switch(req.method){
        case "GET" :
            return await getUser(req, res)
        case "DELETE" :
            return await deleteUser(req, res)
    }
}

const getUser = async (req, res) => {
    try{
        const {userId} = req.query;
        const result   = await prisma.user.findFirst({
            where : {
                id : {
                    equals : parseInt(userId)
                }
            }
        })
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const deleteUser = async (req, res) => {
    try{
        const {userId} = req.query;
        const result   = await prisma.user.delete({
            where : {
                id : parseInt(userId)
            }
        })
        return res.status(200).json({success : true});
    }catch(error){
        return res.status(500).json(error.message);
    }
}