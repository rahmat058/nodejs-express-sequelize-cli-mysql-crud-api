const express = require("express");
const router = express.Router();
const models = require("../../../models");

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.send({
      message: "User Id doesn't empty!",
    });
  } else {
    try {
      const result = await models.User.destroy({ where: { id: id } });

      if (result == 1) {
        res.send({
          message: "User was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    }
  }
});

module.exports = router;
