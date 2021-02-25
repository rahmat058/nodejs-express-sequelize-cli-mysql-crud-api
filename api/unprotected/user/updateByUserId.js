const express = require("express");
const router = express.Router();
const models = require("../../../models");

router.put("/:id", async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.send({
      message: "User Id doesn't empty!",
    });
  } else {
    try {
      const result = await models.User.update(req.body, { where: { id: id } });

      if (result == 1) {
        res.send({
          message: "User was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Error updating User with id=" + id,
      });
    }
  }
});

module.exports = router;
