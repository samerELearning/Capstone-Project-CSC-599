import { prisma } from "@/config/db";

export default async function handler(req, res) {

    switch(req.method){
        case "GET" :
            return await getUniform(req, res)
        case "PUT" :
            return await updateUniform(req, res)
        case "DELETE" :
            return await deleteUniform(req, res)
    }
}

const getUniform = async (req, res) => {
    try{
        const {uniformId} = req.query;
        const result   = await prisma.uniform.findFirst({
            where : {
                id : {
                    equals : parseInt(uniformId)
                }
            }
        })
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const updateUniform = async (req, res) => {
    try{
        const {sport, code, range, color, quantity, cost} = req.body;
        const {uniformId} = req.query;
        
        const result   = await prisma.uniform.update({
            where : {
                id : parseInt(uniformId)
            },
            data : {
                sport : sport,
                code     : code,
                range   : range,
                color    : color,
                quantity     : quantity,
                cost : cost
            }
        });
        return res.status(200).json({sport, code, range, color, quantity, cost, uniformId});
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const deleteUniform = async (req, res) => {
    try{
        const {uniformId} = req.query;
        const result   = await prisma.uniform.delete({
            where : {
                id : parseInt(uniformId)
            }
        })
        return res.status(200).json({success : true});
    }catch(error){
        return res.status(500).json(error.message);
    }
}