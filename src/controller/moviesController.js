const { PrismaClient } = require('../generated/prisma');
const { all } = require('../routes/movies.routes');

const prisma = new PrismaClient();

class moviesController {

    async registerMovie(req, res) {
        try {
            const { title, synopsis, posterURL, trailerURL, genre, duration, ageRating, releaseDate } = req.body;

            const newMovie = await prisma.movies.create({
                data: {
                    title,
                    synopsis,
                    posterURL,
                    trailerURL,
                    genre,
                    duration,
                    ageRating,
                    releaseDate
                }
            })
            res.status(201).json({
                message: "Filme criado com sucesso",
                movie: newMovie
            })

        } catch (error) {
            console.log(error)
        }
    }

    async getMovie(req, res) {
        const allMovies = await prisma.movies.findMany()

        res.status(200).json(allMovies);
    }

    async updateMovies(req, res) {
        const { id } = req.params;
        const { title, synopsis, posterURL, trailerURL, genre, duration, ageRating, releaseDate } = req.body;

        try {
            const updateMovies = await prisma.movies.update({
                where: {
                    id: id
                },
                data: {
                    title,
                    synopsis,
                    posterURL,
                    trailerURL,
                    genre,
                    duration,
                    ageRating,
                    releaseDate
                }
            })

            res.status(200).json(updateMovies);
        } catch (error) {
            res.status(500).json("Erro ao atualizar o Filme!")
            console.log(error);
        }
    }
    async deleteMovie(req, res) {
        const { id } = req.params

        try {
            const deleteMovie = await prisma.movies.delete({
                where: {
                    id: id
                }
            })
            res.status(200).json(deleteMovie);
        } catch (error) {
            res.status(404).json("Movie not found");


        }
    }

}
module.exports = { moviesController };