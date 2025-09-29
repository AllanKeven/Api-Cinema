const {PrismaClient} = require('../generated/prisma');

const prisma =  new PrismaClient();

class sessionsController{
    async register(req,res){
        const {movieId, theaterId, room, startTime, endTime, price} = req.body;

        try {
            
            
        } catch (error) {
            
        }

    }
    async getAll(req,res){

    }
    async update(req,res){

    }
    async delete(req,res){

    }
    async getById(req,res){

    }
}