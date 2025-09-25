const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

class theaterController {

    // Criar novo cinema
    async create(req, res) {
        try {
            const { name, location, capacity, phone, email, rooms } = req.body;

            const newTheater = await prisma.theater.create({
                data: {
                    name,
                    location,
                    capacity,
                    phone,
                    email,
                    rooms
                }
            });

            res.status(201).json({ message: "Cinema criado com sucesso!", theater: newTheater });
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao criar cinema");
        }
    }

    // Listar todos os cinemas
    async getAll(req, res) {
        try {
            const theaters = await prisma.theater.findMany({
                include: { sessions: true } 
            });
            res.json(theaters);
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao buscar cinemas");
        }
    }

    // Buscar cinema por ID
    async getById(req, res) {
        try {
            const { id } = req.params;

            const theater = await prisma.theater.findUnique({
                where: { id },
                include: { sessions: true }
            });

            if (!theater) return res.status(404).send("Cinema não encontrado");

            res.json(theater);
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao buscar cinema");
        }
    }

    // Atualizar cinema
    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, location, capacity, phone, email, rooms } = req.body;

            const updatedTheater = await prisma.theater.update({
                where: { id },
                data: { name, location, capacity, phone, email, rooms }
            });

            res.json({ message: "Cinema atualizado com sucesso!", theater: updatedTheater });
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao atualizar cinema");
        }
    }

    // Deletar cinema
    async delete(req, res) {
        try {
            const { id } = req.params;

            await prisma.theater.delete({
                where: { id }
            });

            res.json({ message: "Cinema deletado com sucesso!" });
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao deletar cinema");
        }
    }
}

module.exports = { theaterController };
