const express = require("express");
const router = express.Router();
const models = require("../../../models");

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.send({
      message: "User Id doesn't empty!",
    });
  } else {
    try {
      const result = await models.User.findByPk(id);

      if (result) {
        res.send(result);
      }
    } catch (error) {
      res.status(500).send({
        message: "Error retrieving User with id=" + id,
      });
    }
  }
});

module.exports = router;
