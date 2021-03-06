const Character = require("../models").character;

const CharacterMovie = require("../models").characterMovie;

const Movie = require("../models").movie;

module.exports = {
  
  // List all movies/series
  async list(req, res) {
    try {
      const movies = await Movie.findAll({})
      res.status(201).send(movies)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
  },
  
  // View a movie/serie and its characters by its id
  async create(req, res) {
    try {
      const movie = await Movie.create({
        title: req.body.title,
        creationDate: req.body.creationDate,
        rating: req.body.rating,
        imageUrl: req.body.imageUrl,
        genreId: req.body.genreId,
      });
      res.status(201).send(movie);
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
  },
  
  // Create a new movie/serie using body data
  async update(req, res) {
    try {
      const movie = await Movie.findAll({ 
        where: { id: req.params.id }
      })
      if (movie) {
        await Movie.update(req.body, {
          where: {
            id: req.params.id
          }         
        })
        res.status(201).send("Movie updated")
      } else {
        res.status(404).send("Movie Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

  // Update a movie/serie by its id using body data
  async delete(req, res) {
    try {
      await Movie.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(201).send("Movie deleted")
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },
  
  // Delete a movie/serie by its id using body data
  async view(req, res) {
    try {
      const movie = await Movie.findOne({ 
        where: { id: req.params.id }
      })
      if (movie) {
        const characters = await CharacterMovie.findAll({
          where: { movieId: req.params.id },
          include: { 
            model: Character,
            attributes: ['name']
          },
          attributes: ['characterId']
        })
        res.status(201).send({movie, characters})
      } else {
        res.status(404).send("Movie Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

  // Find a movie/serie by its name
  async findByName(req, res) {
    try {
      const movie = await Movie.findOne({ 
        where: { title: req.params.name }
      })
      if (movie) {
        res.status(201).send(movie)
      } else {
        res.status(404).send("Movie Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

  // Find a movie/serie by its Genre
  async findByGenre(req, res) {
    try {
      const movie = await Movie.findAll({ 
        where: { genreId: req.params.genreId }
      })
      if (movie) {
        res.status(201).send(movie)
      } else {
        res.status(404).send("Movie Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

  // Order a movie/serie ascendant or descendant by its creation date
  async orderByCreationDate(req, res) {
    try {
      if(req.params.order == 'ASC'){
        const movies = await Movie.findAll({
          order: [ ['creationDate', 'ASC'] ]
        })
        res.status(201).send(movies)
      }
      if(req.params.order == 'DESC'){
        const movies = await Movie.findAll({
          order: [ ['creationDate', 'DESC'] ]
        })
        res.status(201).send(movies)
      }else {
        res.status(404).send("Only ASC or DESC order are permitted")
      }
      const movies = await Movie.findAll({
        order: [ ['creationDate', 'ASC'] ]
      })
      res.status(201).send(req.params.order)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
  },
  
}