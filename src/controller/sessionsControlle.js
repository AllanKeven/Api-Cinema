const {PrismaClient} = require('../generated/prisma');

const prisma =  new PrismaClient();

class sessionsController{
    async register(req,res){
        const {movieId, theaterId, room, startTime, endTime, price} = req.body;

        try {
            
            const newSessios = await prisma.sessions.create({
                data:{
                    movieId,
                    theaterId,
                    room,
                    startTime,
                    endTime,
                    price
                }
            })
            res.status(201).json({message:"Sessão criada com sucesso!" + newSessios});


        } catch (error) {
            console.error(error)
            
            res.status(500).json({message:"Erro ao criar a sessão"})
        }

    }
    async getAll(req,res){
        const allsessions = await prisma.movies.findMany();

        res.status(200).json(allsessions);
    }
    async updateSessions(req,res){
        const {id}= req.params;
        const {movieId, theaterId, room, startTime, endTime, price} = req.body;

        try {
            const updateSessions =  await prisma.sessions.update({
                where:{
                    id: id
                },
                data:{
                    movieId,
                    theaterId,
                    room,
                    startTime,
                    endTime,
                    price
                }
            })

            res.status(200).json(updateSessions);

        } catch (error) {
            res.status(500).json("Erro ao atualizar esta sessão!")
            console.log(error);
        }

    }
    async delete(req,res){

    }
    async getById(req,res){

    }
}