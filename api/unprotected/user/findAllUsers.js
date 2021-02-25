const express = require("express");
const router = express.Router();
const models = require("../../../models");

router.get("/", async (req, res) => {
  const email = req.query.email;
  const condition = email
    ? { email: { [models.Sequelize.Op.like]: `%${email}%` } }
    : null;

  try {
    const result = await models.User.findAll({ where: condition });

    if (result) {
      res.send(result);
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving Users.",
    });
  }
});

module.exports = router;
