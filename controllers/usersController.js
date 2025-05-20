const { User } = require('../models');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const {name,email, password} = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        const user = await User.create({ name, email, password });
        res.status(201).json({ message: 'User created', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.destroy();
        res.json({ message: 'User deleted successfully' });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email } = req.body;
        const user = await User.findByPk(req.params.id);


        user.name = name || user.name;
        user.email = email || user.email;
        await user.save();

        res.json({ message: 'User updated', user });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};