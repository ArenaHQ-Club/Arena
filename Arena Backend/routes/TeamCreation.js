const router = require("express").Router();
const { Router } = require("express");
const { Team, validate } = require("../models/teams");
const bcrypt = require("bcrypt");

router.post("/team", async (req, res) => {
  try {
    const { error } = validate(req.body);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    await new Team({ ...req.body }).save();

    res.status(200).send("Team create succesfully");
  } catch (err) {
    res.status(500).send({ message: "Internal Server error" });
  }
});

module.exports = router;
