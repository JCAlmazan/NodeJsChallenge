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
  /*
  async update(req, res) {
    try {
      const userCollection = await User.find({
        id: req.params.userId,
      })
      if (userCollection) {
        const updatedUser = await User.update({
          id: req.body.email,
        })
        res.status(201).send(updatedUser)
      } else {
        res.status(404).send("User Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },
  */
}