const express = require("express");
const router = express.Router();
const models = require("../../../models");

router.delete("/", async (req, res) => {
  const result = await models.User.destroy({ where: {}, truncate: false });

  if (result) {
    res.send({ message: `${result} Users were deleted successfully!` });
  } else {
    res.status(500).send({
      message: err.message || "Some error occurred while removing all Users.",
    });
  }
});

module.exports = router;
