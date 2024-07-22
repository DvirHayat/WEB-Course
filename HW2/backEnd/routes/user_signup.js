const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Corrected path
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, birthday, workplace, email, password, country, city, gender } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ firstName, lastName, birthday, workplace, email, password: hashedPassword, country, city, gender });
    await user.save();
    res.status(201).send('User created');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
