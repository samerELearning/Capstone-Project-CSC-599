import { prisma } from "@/config/db";

export default async function handler(req, res) {

    switch(req.method){
        case "GET" :
            return await getFacility(req, res)
        case "PUT" :
            return await updateFacility(req, res)
        case "DELETE" :
            return await deleteFacility(req, res)
    }
}

const getFacility = async (req, res) => {
    try{
        const {facilityId} = req.query;
        const result   = await prisma.facility.findFirst({
            where : {
                id : {
                    equals : parseInt(facilityId)
                }
            }
        })
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const updateFacility = async (req, res) => {
    try{
        const {username, location, campus, sport, type, contact} = req.body;
        const {facilityId} = req.query;
        
        const result   = await prisma.facility.update({
            where : {
                id : parseInt(facilityId)
            },
            data : {
                username : username,
                location    : location,
                campus    : campus,
                sport    : sport,
                type     : type,
                contact     : contact
            }
        });
        return res.status(200).json({username, location, campus, sport, type, contact, facilityId});
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const deleteFacility = async (req, res) => {
    try{
        const {facilityId} = req.query;
        const result   = await prisma.facility.delete({
            where : {
                id : parseInt(facilityId)
            }
        })
        return res.status(200).json({success : true});
    }catch(error){
        return res.status(500).json(error.message);
    }
}