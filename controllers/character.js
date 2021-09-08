const Character = require("../models").character;

module.exports = {
  
    async list(req, res) {
    try {
      const characters = await Character.findAll({})
      res.status(201).send(characters)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
  },
  
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
  
  async update(req, res) {
    try {
      const character = await Character.findAll({ 
        where: { id: req.params.id }
      })
      if (character) {
        const updatedCharacter = await Character.update(req.body, {
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
  
}