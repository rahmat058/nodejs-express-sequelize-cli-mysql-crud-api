const express = require("express");
const router = express.Router();
const models = require("../../../models");

router.post("/", async (req, res) => {
  // Validate request
  if (
    !req.body.email ||
    !req.body.password ||
    !req.body.firstName ||
    !req.body.lastName
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a new user
  const user = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  try {
    // Save Tutorial in the database
    const result = await models.User.create(user);

    if (result) {
      res.send(result);
    }
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the New User.",
    });
  }
});

module.exports = router;
