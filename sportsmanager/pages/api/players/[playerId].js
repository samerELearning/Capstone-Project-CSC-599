import { prisma } from "@/config/db";

export default async function handler(req, res) {

    switch(req.method){
        case "GET" :
            return await getPlayer(req, res)
        case "PUT" :
            return await updatePlayer(req, res)
        case "DELETE" :
            return await deletePlayer(req, res)
    }
}

const getPlayer = async (req, res) => {
    try{
        const {playerId} = req.query;
        const result   = await prisma.player.findFirst({
            where : {
                id : {
                    equals : parseInt(playerId)
                }
            }
        })
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const updatePlayer = async (req, res) => {
    try{
        const {email, username, lauId, sport, team, size} = req.body;
        const {playerId} = req.query;
        
        const result   = await prisma.player.update({
            where : {
                id : parseInt(playerId)
            },
            data : {
                username : username,
                email    : email,
                lauId    : lauId,
                sport    : sport,
                team     : team,
                size     : size
            }
        });
        return res.status(200).json({username, email, lauId, sport, team, size, playerId});
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const deletePlayer = async (req, res) => {
    try{
        const {playerId} = req.query;
        const result   = await prisma.player.delete({
            where : {
                id : parseInt(playerId)
            }
        })
        return res.status(200).json({success : true});
    }catch(error){
        return res.status(500).json(error.message);
    }
}