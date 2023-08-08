import { prisma } from "@/config/db";

export default async function handler(req, res) {

    switch(req.method){
        case "GET" :
            return await getTeam(req, res)
        case "PUT" :
            return await updateTeam(req, res)
        case "DELETE" :
            return await deleteTeam(req, res)
    }
}

const getTeam = async (req, res) => {
    try{
        const {teamId} = req.query;
        const result   = await prisma.team.findFirst({
            where : {
                id : {
                    equals : parseInt(teamId)
                }
            }
        })
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const updateTeam = async (req, res) => {
    try{
        const {username, sport, capacity, facility, level, coach} = req.body;
        const {teamId} = req.query;
        
        const result   = await prisma.team.update({
            where : {
                id : parseInt(teamId)
            },
            data : {
                username : username,
                sport    : sport,
                capacity    : capacity,
                facility    : facility,
                level     : level,
                coach     : coach
            }
        });
        return res.status(200).json({username, sport, capacity, facility, level, coach, teamId});
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const deleteTeam = async (req, res) => {
    try{
        const {teamId} = req.query;
        const result   = await prisma.team.delete({
            where : {
                id : parseInt(teamId)
            }
        })
        return res.status(200).json({success : true});
    }catch(error){
        return res.status(500).json(error.message);
    }
}