const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const register = (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ error: err.message });
        User.createUser(username, hashedPassword, (err, userId) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'User created successfully', userId });
        });
    });
};

const login = (req, res) => {
    const { username, password } = req.body;
    User.findUserByUsername(username, (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(400).json({ message: 'User not found' });

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

            res.status(200).json({ message: 'Login successful' });
        });
    });
};

module.exports = { register, login };
