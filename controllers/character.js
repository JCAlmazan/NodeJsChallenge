const Character = require("../models").character;

const CharacterMovie = require("../models").characterMovie;

const Movie = require("../models").movie;

module.exports = {
  
  // List all characters
  async list(req, res) {
    try {
      const characters = await Character.findAll({})
      res.status(201).send(characters)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
  },
  
  // Create a new character using body data
  async create(req, res) {
    try {
      const character = await Character.create({
        name: req.body.name,
        age: req.body.age,
        weight: req.body.weight,
        story: req.body.story,
        imageUrl: req.body.imageUrl,
      });
      res.status(201).send(character);
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
  },
  
  // Update specific character by his id using body data
  async update(req, res) {
    try {
      const character = await Character.findAll({ 
        where: { id: req.params.id }
      })
      if (character) {
        await Character.update(req.body, {
          where: {
            id: req.params.id
          }         
        })
        res.status(201).send("Character updated")
      } else {
        res.status(404).send("Character Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

  // Delete specific character by his id
  async delete(req, res) {
    try {
      await Character.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(201).send("Character deleted")
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },
  
  // View a character and his appearances by his id
  async view(req, res) {
    try {
      const character = await Character.findOne({ 
        where: { id: req.params.id }
      })
      if (character) {
        const movies = await CharacterMovie.findAll({
          where: { characterId: req.params.id },
          include: { 
            model: Movie,
            attributes: ['title']
          },
          attributes: ['movieId']
        })
        res.status(201).send({character, movies})
      } else {
        res.status(404).send("Character Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

  // Find a character by his name
  async findByName(req, res) {
    try {
      const character = await Character.findOne({ 
        where: { name: req.params.name }
      })
      if (character) {
        res.status(201).send(character)
      } else {
        res.status(404).send("Character Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

  // Find a character by his age
  async findByAge(req, res) {
    try {
      const character = await Character.findOne({ 
        where: { age: req.params.age }
      })
      if (character) {
        res.status(201).send(character)
      } else {
        res.status(404).send("Character Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

  // Find a character by a movie/serie id
  async findByMovie(req, res) {
    try {
      const characters = await CharacterMovie.findAll({ 
        where: { movieId: req.params.movieId },
        include: Character,
        attributes: ['movieId']
      })
      if (characters) {
        res.status(201).send(characters)
      } else {
        res.status(404).send("Character Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },
  
}