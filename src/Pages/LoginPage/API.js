const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const router = express.Router()

router.get('/api/users/:username', async (req, res) => {
  try {
    // Fetch the user from the database
    const user = await User.findOne({ username: req.params.username })

    if (!user) {
      res.status(404).send({ error: 'User not found' })
    } else {
      res.send(user)
    }
  } catch (err) {
    console.error(err)
    res.status(500).send({ error: 'An error occurred, please try again later' })
  }
})

router.post('/api/login', async (req, res) => {
  try {
    // Fetch the user from the database
    const user = await User.findOne({ username: req.body.username })

    if (!user) {
      res.status(401).send({ error: 'Invalid credentials' })
      return
    }

    // Compare the hashed password
    const isValid = await bcrypt.compare(req.body.password, user.password)
    if (!isValid) {
      res.status(401).send({ error: 'Invalid credentials' })
      return
    }

    // Create and sign a JWT token
    const token = jwt.sign({ user }, 'secretkey', { expiresIn: '1h' })

    // Send the JWT token to the client
    res.send({ token })
  } catch (err) {
    console.error(err)
    res.status(500).send({ error: 'An error occurred, please try again later' })
  }
})

module.exports = router
